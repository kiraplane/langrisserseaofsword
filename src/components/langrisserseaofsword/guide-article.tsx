import { FaqSection } from '@/components/langrisserseaofsword/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/langrisserseaofsword/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  routeLabels,
} from '@/data/langrisserseaofsword/localized';
import { siteFacts } from '@/data/langrisserseaofsword/sources';
import type { Guide } from '@/data/langrisserseaofsword/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

function toSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRouteLabel(route: string) {
  return (
    routeLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

export function GuideArticle({
  guide,
  locale,
  pathname,
}: {
  guide: Guide;
  locale?: Locale;
  pathname: string;
}) {
  const ui = getGuideArticleUi(locale);
  const canonicalUrl = `${siteFacts.domain}${pathname}`;
  const isGuideRoute = pathname.startsWith('/guides/');
  const breadcrumbItems: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: siteFacts.siteName,
      item: siteFacts.domain,
    },
  ];

  if (isGuideRoute) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: `${siteFacts.domain}/guides`,
    });
  }

  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: guide.title,
    item: canonicalUrl,
  });

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      headline: guide.title,
      description: guide.summary,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      image: `${siteFacts.domain}${guide.coverImageUrl}`,
      mainEntityOfPage: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
      },
      author: { '@type': 'Organization', name: siteFacts.siteName },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
    {
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];

  if (guide.video) {
    graph.push({
      '@type': 'VideoObject',
      name: guide.video.title,
      description: `${guide.summary} This supporting video is by ${guide.video.channel}.`,
      thumbnailUrl: `${siteFacts.domain}${guide.video.thumbnailUrl}`,
      uploadDate: guide.video.publishedAt,
      embedUrl: `https://www.youtube-nocookie.com/embed/${guide.video.id}`,
    });
  }

  const sectionLinks = guide.body.map((section) => ({
    href: `#${toSectionId(section.heading)}`,
    label: section.heading,
  }));

  return (
    <div className="min-h-screen bg-[#07131b] py-8 text-[#f5efe1] md:py-10">
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': graph }} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <article className="min-w-0 space-y-6">
            <header className="overflow-hidden rounded-xl border border-[#39505a] bg-[#0d2029]">
              <div className="relative aspect-video border-[#39505a] border-b sm:aspect-[16/7] sm:min-h-[220px]">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,11,0.05)_0%,rgba(8,13,11,0.95)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-5 md:p-7">
                  <Badge className="bg-[#d8b060] text-[#07131b]">
                    {ui.categoryLabels[guide.category]}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#6ed2c5]/60 bg-[#07131b]/80 text-[#f5efe1]"
                  >
                    {ui.difficultyLabels[guide.difficulty]}
                  </Badge>
                  {guide.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-white/20 bg-[#07131b]/80 text-[#f5efe1]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-5 md:p-7">
                <h1 className="max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">
                  {guide.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#aebcb8] md:text-lg">
                  {guide.summary}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#aebcb8]">
                  Published {guide.publishedAt} · Updated {guide.updatedAt}
                </p>
                <MobileWikiNav
                  currentPath={pathname}
                  locale={locale}
                  sectionLinks={sectionLinks}
                />
              </div>
            </header>

            <div className="rounded-xl border border-[#39505a] bg-[#0d2029] p-5 md:p-8">
              <div className="space-y-10">
                {guide.body.map((section, sectionIndex) => (
                  <div key={section.heading} className="space-y-8">
                    <section id={toSectionId(section.heading)}>
                      <h2 className="font-display text-2xl font-bold md:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-base leading-8 text-[#aebcb8]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-5 grid gap-2 text-sm leading-7 text-[#c8d1ce]">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-lg border border-[#39505a] bg-[#07131b] px-4 py-3"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>

                    {sectionIndex === 0 && guide.video ? (
                      <section className="overflow-hidden rounded-xl border border-[#39505a] bg-black">
                        <iframe
                          className="aspect-video w-full"
                          src={`https://www.youtube-nocookie.com/embed/${guide.video.id}?rel=0`}
                          title={guide.video.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        <p className="bg-[#07131b] px-4 py-3 text-sm leading-6 text-[#aebcb8]">
                          {ui.videoPrefix}{' '}
                          <a
                            href={guide.video.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#6ed2c5] underline underline-offset-4"
                          >
                            {guide.video.title}
                          </a>{' '}
                          by {guide.video.channel}. {ui.videoSuffix}
                        </p>
                      </section>
                    ) : null}
                  </div>
                ))}
              </div>

              <section className="mt-10 rounded-xl border border-[#39505a] bg-[#07131b] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 size-5 shrink-0 text-[#6ed2c5]" />
                  <div>
                    <h2 className="font-display text-xl font-bold">
                      {ui.officialTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#aebcb8]">
                      {ui.officialBody}
                    </p>
                    <a
                      href={siteFacts.officialSteamUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-[#6ed2c5] text-sm underline underline-offset-4"
                    >
                      {ui.officialLinkLabel}
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </section>

              <section className="mt-10 rounded-xl border border-[#39505a] bg-[#07131b] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6ed2c5]">
                  Next decisions
                </p>
                <h2 className="mt-1 font-display text-xl font-bold">
                  Continue through the wiki
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {guide.relatedRoutes.slice(0, 4).map((route) => (
                    <Button
                      key={route}
                      asChild
                      variant="outline"
                      className="h-auto min-w-0 justify-between gap-3 whitespace-normal border-[#39505a] bg-[#0d2029] px-3 py-3 text-left text-[#f5efe1] hover:border-[#6ed2c5] hover:bg-[#17303a]"
                    >
                      <LocaleLink href={route}>
                        <span className="min-w-0 break-words">
                          {getRouteLabel(route)}
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-[#6ed2c5]" />
                      </LocaleLink>
                    </Button>
                  ))}
                </div>
              </section>

              <FaqSection
                className="mt-10"
                items={guide.faq}
                title={ui.faqTitle}
              />
            </div>
          </article>

          <WikiRouteSidebar
            currentPath={pathname}
            locale={locale}
            sectionLinks={sectionLinks}
          />
        </div>
      </Container>
    </div>
  );
}
