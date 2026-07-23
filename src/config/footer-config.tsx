'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Release Status', href: Routes.ReleaseDate, external: false },
        {
          title: 'Pre-Registration',
          href: Routes.PreRegistration,
          external: false,
        },
      ],
    },
    {
      title: 'Game',
      items: [
        { title: 'Gameplay', href: Routes.Gameplay, external: false },
        {
          title: 'Dual-Hero System',
          href: Routes.DualHeroSystem,
          external: false,
        },
        { title: 'Characters', href: Routes.Characters, external: false },
      ],
    },
    {
      title: 'World',
      items: [
        {
          title: 'Exploration & Territory',
          href: Routes.ExplorationTerritory,
          external: false,
        },
        {
          title: 'Story & Setting',
          href: Routes.StorySetting,
          external: false,
        },
        {
          title: 'Sea of Sword vs Mobile',
          href: Routes.CompareMobile,
          external: false,
        },
      ],
    },
    {
      title: 'Platforms',
      items: [
        { title: 'Platform Status', href: Routes.Platforms, external: false },
        {
          title: 'System Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
        { title: 'Official Download', href: Routes.Download, external: false },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
