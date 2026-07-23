import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata('gameplay', locale, '/gameplay');
}

export default async function GameplayPage({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return renderGuidePage('gameplay', '/gameplay', locale);
}
