'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  CalendarClock,
  Compass,
  Download,
  Gamepad2,
  MonitorCog,
  ShieldCheck,
  Swords,
  Users,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'All current release, system and platform guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Release status',
          description: 'The live launch status and how to verify a real date.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <CalendarClock className="size-4" />,
        },
        {
          title: 'Pre-registration',
          description: 'Register through the official global campaign safely.',
          href: Routes.PreRegistration,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
      ],
    },
    {
      title: 'Game',
      href: Routes.Gameplay,
      external: false,
      icon: <Swords className="size-4" />,
      items: [
        {
          title: 'Gameplay',
          description:
            'Dual heroes, mixed troops and destructible battlefields.',
          href: Routes.Gameplay,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Dual-hero system',
          description: 'Lead switching, troop mixing and Hero Unity Skills.',
          href: Routes.DualHeroSystem,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Exploration & territory',
          description: 'World exploration, resources and territory growth.',
          href: Routes.ExplorationTerritory,
          external: false,
          icon: <Compass className="size-4" />,
        },
        {
          title: 'Characters',
          description: 'Confirmed new and returning heroes.',
          href: Routes.Characters,
          external: false,
          icon: <Users className="size-4" />,
        },
      ],
    },
    {
      title: 'Platforms',
      href: Routes.Platforms,
      external: false,
      icon: <MonitorCog className="size-4" />,
      items: [
        {
          title: 'Platform status',
          description: 'Confirmed Windows, iOS and Android support.',
          href: Routes.Platforms,
          external: false,
          icon: <MonitorCog className="size-4" />,
        },
        {
          title: 'PC requirements',
          description: 'Official minimum and recommended Steam hardware.',
          href: Routes.SystemRequirements,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use Steam App 4808030 and avoid unsafe mirrors.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
