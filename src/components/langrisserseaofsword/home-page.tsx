import { FaqSection } from '@/components/langrisserseaofsword/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
} from '@/components/langrisserseaofsword/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/langrisserseaofsword/localized';
import { siteFacts } from '@/data/langrisserseaofsword/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Compass,
  ExternalLink,
  Gamepad2,
  MonitorCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Swords,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const startRoutes = [
  {
    href: '/release-date',
    label: 'Release status',
    text: 'What is confirmed, what is not, and where a real date will appear.',
    icon: CalendarClock,
  },
  {
    href: '/pre-registration',
    label: 'Pre-register',
    text: 'Use the official form and keep wishlist, registration and download separate.',
    icon: CheckCircle2,
  },
  {
    href: '/gameplay',
    label: 'Gameplay',
    text: 'Dual heroes, mixed troops, exploration and destructible battlefields.',
    icon: Gamepad2,
  },
  {
    href: '/characters',
    label: 'Characters',
    text: 'The Nameless, Eta and the three returning heroes confirmed so far.',
    icon: Users,
  },
] as const;

const systemGroups = [
  {
    title: 'Plan the squad',
    text: 'Understand lead switching, troop mixing and pair-specific Unity Skills before rankings exist.',
    icon: Swords,
    links: [
      ['/guides/dual-hero-system', 'Dual-hero system'],
      ['/characters', 'Confirmed characters'],
      ['/gameplay', 'Gameplay overview'],
    ],
  },
  {
    title: 'Read the world',
    text: 'Free exploration connects NPCs, materials and territory growth to tactical maps.',
    icon: Compass,
    links: [
      ['/guides/exploration-and-territory', 'Exploration & territory'],
      ['/guides/story-and-setting', 'Story & setting'],
      ['/guides/sea-of-sword-vs-langrisser-mobile', 'Compare with Mobile'],
    ],
  },
  {
    title: 'Prepare safely',
    text: 'Check the real platform, hardware and monetization status without trusting early mirrors.',
    icon: ShieldCheck,
    links: [
      ['/platforms', 'Platforms'],
      ['/system-requirements', 'PC requirements'],
      ['/guides/free-to-play-and-gacha-status', 'Free-to-play status'],
      ['/download', 'Official download'],
    ],
  },
] as const;

export function LangrisserSeaOfSwordHomePage({
  locale,
}: {
  locale?: Locale;
}) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
  const sameAs = [
    siteFacts.officialWebsiteUrl,
    siteFacts.officialSteamUrl,
    siteFacts.officialYouTubeUrl,
    siteFacts.officialXUrl,
    siteFacts.officialFacebookUrl,
    siteFacts.officialRedditUrl,
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: content.intro,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}${siteFacts.officialIconImage}`,
        sameAs,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        url: siteFacts.officialSteamUrl,
        image: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        applicationCategory: 'Game',
        genre: ['Strategy', 'RPG', 'Adventure', 'Free To Play'],
        gamePlatform: ['Windows', 'iOS', 'Android'],
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
      },
      {
        '@type': 'VideoObject',
        name: 'Langrisser: Sea of Sword First Gameplay Trailer',
        description:
          'Official gameplay preview for dual-hero combat, exploration and tactical battlefields.',
        thumbnailUrl: `${siteFacts.domain}/langrisserseaofsword/guides/gameplay.jpg`,
        uploadDate: siteFacts.officialTrailerPublishedAt,
        embedUrl: `https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#07131b] text-[#f5efe1]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#39505a] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="Langrisser: Sea of Sword official seascape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,0.98)_0%,rgba(7,19,27,0.92)_42%,rgba(7,19,27,0.50)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,27,0.18)_0%,rgba(7,19,27,0.9)_100%)]" />

        <Container className="relative px-4 py-8 md:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_500px]">
            <div className="min-w-0">
              <Badge className="bg-[#d8b060] text-[#07131b]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.03] text-[#fff9eb] md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#c8d1ce] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#d8b060] px-5 py-3 text-[#07131b] hover:bg-[#6ed2c5]"
                >
                  <LocaleLink href="/guides">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#6ed2c5]/70 bg-[#07131b]/70 px-5 py-3 text-[#fff9eb] hover:bg-[#17303a]"
                >
                  <LocaleLink href="/release-date">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-2xl text-xs leading-5 text-[#aebcb8]">
                {content.scopeNote}
              </p>
              <MobileWikiNav currentPath="/" locale={locale} />
            </div>

            <div className="overflow-hidden rounded-xl border border-[#6ed2c5]/45 bg-black/80 shadow-2xl shadow-black/40">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Langrisser: Sea of Sword official gameplay trailer"
                loading="eager"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-[#39505a] border-b bg-[#0d2029]">
        <Container className="grid gap-px px-4 py-4 sm:grid-cols-3">
          {[
            ['Status', 'Coming Soon · date not announced'],
            ['Platforms', 'Steam · iOS · Android'],
            ['Steam model', 'Free To Play · single-player'],
          ].map(([label, value]) => (
            <div key={label} className="px-4 py-2 first:pl-0">
              <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.16em]">
                {label}
              </p>
              <p className="mt-1 text-sm text-[#f5efe1]">{value}</p>
            </div>
          ))}
        </Container>
      </section>

      <Container className="space-y-14 px-4 py-12">
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
                Start here
              </p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">
                Four decisions before launch
              </h2>
            </div>
            <LocaleLink
              href="/guides"
              className="inline-flex items-center gap-2 text-[#d8b060] text-sm underline underline-offset-4"
            >
              Browse all pages <ArrowRight className="size-4" />
            </LocaleLink>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {startRoutes.map((route) => (
              <LocaleLink
                key={route.href}
                href={route.href}
                className="group rounded-xl border border-[#39505a] bg-[#0d2029] p-4 transition hover:border-[#6ed2c5]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-[#d8b060]/15 text-[#d8b060]">
                    <route.icon className="size-4" />
                  </span>
                  <h3 className="font-display text-lg font-bold">
                    {route.label}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#aebcb8]">
                  {route.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#6ed2c5] text-xs font-semibold">
                  Open{' '}
                  <ArrowRight className="size-3 transition group-hover:translate-x-1" />
                </span>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section>
          <div>
            <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
              Core systems
            </p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">
              Build a reliable pre-launch picture
            </h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {systemGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-[#39505a] bg-[#0d2029] p-5"
              >
                <div className="flex items-center gap-3">
                  <group.icon className="size-5 text-[#d8b060]" />
                  <h3 className="font-display text-xl font-bold">
                    {group.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#aebcb8]">
                  {group.text}
                </p>
                <div className="mt-4 grid gap-2">
                  {group.links.map(([href, label]) => (
                    <LocaleLink
                      key={href}
                      href={href}
                      className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#39505a] bg-[#07131b] px-3 py-2 text-sm text-[#f5efe1] hover:border-[#6ed2c5]"
                    >
                      <span className="min-w-0 break-words">{label}</span>
                      <ArrowRight className="size-4 shrink-0 text-[#6ed2c5]" />
                    </LocaleLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
                Latest pages
              </p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">
                Source-checked launch coverage
              </h2>
            </div>
            <Badge
              variant="outline"
              className="border-[#d8b060]/50 text-[#f5efe1]"
            >
              Updated July 23, 2026
            </Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={guide.path}
                className="group overflow-hidden rounded-xl border border-[#39505a] bg-[#0d2029] hover:border-[#6ed2c5]"
              >
                <div className="relative aspect-video border-[#39505a] border-b">
                  <Image
                    src={guide.coverImageUrl}
                    alt={`${guide.title} cover`}
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07131b]/90 to-transparent" />
                </div>
                <div className="p-4">
                  <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.14em]">
                    {guide.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {guide.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#aebcb8]">
                    {guide.summary}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-[#39505a] bg-[#0d2029] p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="size-5 text-[#d8b060]" />
              <h2 className="font-display text-2xl font-black">
                Confirmed game snapshot
              </h2>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-[#39505a] bg-[#07131b] p-4"
                >
                  <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.14em]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#c8d1ce]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#39505a] bg-[#0d2029] p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="size-5 text-[#d8b060]" />
              <h2 className="font-display text-2xl font-black">
                Official destinations
              </h2>
            </div>
            <div className="mt-5 grid gap-2">
              {[
                ['Official site', siteFacts.officialWebsiteUrl, Smartphone],
                ['Steam App 4808030', siteFacts.officialSteamUrl, MonitorCog],
                ['Official YouTube', siteFacts.officialYouTubeUrl, Gamepad2],
                ['Official Discord', siteFacts.officialDiscordUrl, Users],
              ].map(([label, href, Icon]) => {
                const LinkIcon = Icon as typeof Smartphone;
                return (
                  <a
                    key={label as string}
                    href={href as string}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-[#39505a] bg-[#07131b] px-4 py-3 text-sm hover:border-[#6ed2c5]"
                  >
                    <span className="flex items-center gap-3">
                      <LinkIcon className="size-4 text-[#6ed2c5]" />
                      {label as string}
                    </span>
                    <ExternalLink className="size-4 text-[#d8b060]" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
            Wiki index
          </p>
          <h2 className="mt-2 font-display text-3xl font-black">
            Every supported search route
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.keywordRoutes.map((route) => (
              <LocaleLink
                key={route.route}
                href={route.route}
                title={route.intent}
                className="rounded-full border border-[#39505a] bg-[#0d2029] px-3 py-2 text-sm text-[#c8d1ce] hover:border-[#6ed2c5] hover:text-[#fff9eb]"
              >
                {route.label}
              </LocaleLink>
            ))}
          </div>
        </section>

        <FaqSection items={content.faq} title="Sea of Sword wiki FAQ" />

        <section className="rounded-xl border border-[#d8b060]/50 bg-[linear-gradient(135deg,#132a34_0%,#0d2029_60%,#2a2420_100%)] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
                Stay on the official path
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Wishlist on Steam, then track the real release.
              </h2>
            </div>
            <Button
              asChild
              className="h-auto shrink-0 bg-[#d8b060] px-5 py-3 text-[#07131b] hover:bg-[#6ed2c5]"
            >
              <a
                href={siteFacts.officialSteamUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Steam
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
