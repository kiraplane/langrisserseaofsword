import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Terms of Service | Langrisser: Sea of Sword Wiki',
    description:
      'Terms for using the independent Langrisser: Sea of Sword Wiki.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#07131b] py-12 text-[#f5efe1]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#aebcb8]">
          This site provides independent Langrisser: Sea of Sword guides, source
          notes and official-link guidance. It is not affiliated with, endorsed
          by, sponsored by or operated by Black Jack Studio, HongKong GameTree
          Limited, Valve, Steam or YouTube.
        </p>
        <p className="leading-8 text-[#aebcb8]">
          Release timing, system details, requirements and platform support can
          change. Treat guide pages as community-oriented guidance and verify
          important details through the live official sources.
        </p>
        <p className="leading-8 text-[#aebcb8]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, paid files, trainers, or automation
          scripts.
        </p>
        <p className="leading-8 text-[#aebcb8]">
          Questions can be sent to hello@langrisserseaofsword.wiki.
        </p>
      </Container>
    </div>
  );
}
