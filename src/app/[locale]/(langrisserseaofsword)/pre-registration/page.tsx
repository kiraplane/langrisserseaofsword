import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata('pre-registration', locale, '/pre-registration');
}

export default async function PreRegistrationPage({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return renderGuidePage('pre-registration', '/pre-registration', locale);
}
