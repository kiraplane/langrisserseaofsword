import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/langrisserseaofsword/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Compass,
  Download,
  Gamepad2,
  Menu,
  ShieldCheck,
  Swords,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: BookOpen,
    routes: ['/', '/guides', '/release-date', '/pre-registration'],
  },
  {
    title: 'Game Systems',
    icon: Swords,
    routes: [
      '/gameplay',
      '/guides/dual-hero-system',
      '/guides/exploration-and-territory',
      '/characters',
      '/guides/story-and-setting',
    ],
  },
  {
    title: 'Platforms & Status',
    icon: ShieldCheck,
    routes: [
      '/platforms',
      '/system-requirements',
      '/guides/free-to-play-and-gacha-status',
      '/guides/sea-of-sword-vs-langrisser-mobile',
      '/download',
      '/disclaimer',
    ],
  },
] as const;

const routeCount = wikiNavRoutes.reduce(
  (count, group) => count + group.routes.length,
  0
);

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: {
  currentPath?: string;
  href: string;
}) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-lg border px-3 py-2 text-left text-sm leading-6 transition',
        active
          ? 'border-[#6ed2c5] bg-[#6ed2c5] font-semibold text-[#07131b]'
          : 'border-[#39505a] bg-[#07131b] text-[#aebcb8] hover:border-[#6ed2c5] hover:bg-[#17303a] hover:text-[#fff9eb]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#07131b]' : 'text-[#6ed2c5]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#6ed2c5]/60 bg-[#6ed2c5]/5'
            : 'border-[#39505a] bg-[#07131b]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f5efe1] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#6ed2c5]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#8fa19d] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#d8b060] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#39505a] bg-[#0d2029] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 break-words font-display text-lg font-bold text-[#f5efe1]">
              Sea of Sword
            </h2>
          </div>
          <Compass className="size-5 shrink-0 text-[#d8b060]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
        <p className="mt-4 border-[#39505a] border-t pt-3 text-[#8fa19d] text-xs">
          {routeCount} focused wiki routes
        </p>
      </div>

      {sectionLinks.length ? (
        <div className="rounded-xl border border-[#39505a] bg-[#0d2029] p-4">
          <p className="text-[#6ed2c5] text-xs font-semibold uppercase tracking-[0.18em]">
            On this page
          </p>
          <div className="mt-3 grid gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-0 break-words rounded-lg border border-[#39505a] bg-[#07131b] px-3 py-2 text-[#aebcb8] text-sm leading-6 hover:border-[#6ed2c5] hover:text-[#f5efe1]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group mt-5 rounded-xl border border-[#39505a] bg-[#0d2029] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#f5efe1] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Menu className="size-4 text-[#6ed2c5]" />
          Open wiki menu
          <Badge className="bg-[#d8b060] text-[#07131b]">{routeCount}</Badge>
        </span>
        <ChevronDown className="size-4 text-[#d8b060] transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 border-[#39505a] border-t pt-4">
        <NavGroups currentPath={currentPath} />
        {sectionLinks.length ? (
          <details className="rounded-lg border border-[#39505a] bg-[#07131b] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#f5efe1]">
              On this page
            </summary>
            <div className="mt-3 grid gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="break-words rounded-lg border border-[#39505a] px-3 py-2 text-[#aebcb8] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/release-date', label: 'Release', icon: CalendarClock },
    { href: '/pre-registration', label: 'Register', icon: CheckCircle2 },
    { href: '/gameplay', label: 'Gameplay', icon: Gamepad2 },
    { href: '/characters', label: 'Heroes', icon: Users },
    { href: '/download', label: 'Steam', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#52707c] bg-[#07131b]/85 px-2.5 py-1.5 text-[#f5efe1] text-xs transition hover:border-[#6ed2c5] hover:bg-[#17303a] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#6ed2c5]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
