import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'Sea of Sword Wiki',
  '/guides': 'Guide Hub',
  '/release-date': 'Release Date',
  '/pre-registration': 'Pre-Registration',
  '/gameplay': 'Gameplay',
  '/characters': 'Characters',
  '/platforms': 'Platforms',
  '/system-requirements': 'PC Requirements',
  '/download': 'Official Download',
  '/guides/dual-hero-system': 'Dual Heroes',
  '/guides/exploration-and-territory': 'Exploration & Territory',
  '/guides/story-and-setting': 'Story & Setting',
  '/guides/free-to-play-and-gacha-status': 'Free-to-Play Status',
  '/guides/sea-of-sword-vs-langrisser-mobile': 'Sea of Sword vs Mobile',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const seenRoutes = new Set<string>();
  const keywordRoutes = keywordMatrix
    .filter((matrixItem) => ['keep', 'watch'].includes(matrixItem.status))
    .filter((matrixItem) => matrixItem.route !== 'none')
    .filter((matrixItem) => {
      const cleanRoute = matrixItem.route.split('#')[0];
      if (seenRoutes.has(cleanRoute)) return false;
      seenRoutes.add(cleanRoute);
      return true;
    })
    .map((matrixItem) => {
      const cleanRoute = matrixItem.route.split('#')[0];
      return {
        keyword: matrixItem.keyword,
        route: matrixItem.route,
        label: routeLabels[cleanRoute] ?? cleanRoute,
        intent: matrixItem.intent,
      };
    });

  return {
    badge: 'Pre-launch guide hub · Checked July 23, 2026',
    metadataTitle: 'Langrisser: Sea of Sword Wiki - Release, Gameplay & Guides',
    title: 'Langrisser: Sea of Sword Wiki',
    intro:
      'Track the release, pre-register safely, understand dual-hero combat and separate confirmed systems from launch speculation.',
    primaryCta: 'Open the guide hub',
    secondaryCta: 'Check release status',
    scopeNote:
      'Current scope: Steam App 4808030 and the official global pre-registration campaign. Unannounced launch systems stay clearly labeled.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Langrisser: Sea of Sword?',
        answer:
          'It is a new free-to-play fantasy tactical RPG from Black Jack Studio with dual-hero squads, free exploration, territory growth and destructible battlefields.',
      },
      {
        question: 'When does Langrisser: Sea of Sword release?',
        answer:
          'No date or launch window has been announced. Steam currently lists the game as Coming Soon.',
      },
      {
        question: 'Which platforms are confirmed?',
        answer:
          'Windows through Steam, iOS and Android are confirmed. Console, Mac and Linux releases are not announced.',
      },
      {
        question: 'Is Langrisser: Sea of Sword gacha?',
        answer:
          'Steam confirms Free To Play, but official sources have not yet described a summon or gacha system.',
      },
      {
        question: 'Can I download the game now?',
        answer:
          'No public global client is available. Use the official Steam wishlist and pre-registration site.',
      },
      {
        question: 'Is this the same game as Langrisser Mobile?',
        answer:
          'No. Sea of Sword is a separate new title with its own story, systems, Steam App and official campaign.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} source-checked pages`,
    title: 'Langrisser: Sea of Sword Guide Hub',
    intro:
      'Start with the decision you need now: release timing, registration, gameplay, characters, PC fit, official download, dual heroes, exploration or monetization status.',
    readGuide: 'Open page',
    faq: [
      {
        question: 'Which guide should I read first?',
        answer:
          'Use the release-date page if you are waiting to play, then read gameplay and dual heroes for the confirmed system overview.',
      },
      {
        question: 'Why is there no tier list or reroll guide?',
        answer:
          'The roster, summons, launch rewards and live meta are not public. Publishing a ranking now would be guesswork.',
      },
      {
        question: 'Are these pages based on Langrisser Mobile?',
        answer:
          'No. Sea of Sword facts come from its Steam page, official site and official videos. Mobile is used only for clearly labeled comparison context.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Official media:',
    videoSuffix:
      'The written page uses the current Steam and publisher record for factual status.',
    officialTitle: 'Verify the live official status',
    officialBody:
      'Release timing, platforms, requirements and unreleased systems can change. The current Steam listing and official global site remain the authority.',
    officialLinkLabel: 'Open Steam App 4808030',
    faqTitle: 'Langrisser: Sea of Sword FAQ',
    categoryLabels: {
      Status: 'Current Status',
      Start: 'Start Here',
      Systems: 'Game Systems',
      Exploration: 'World & Maps',
      Characters: 'Characters',
      Story: 'Story',
      Platforms: 'Platforms',
      Safety: 'Official Channels',
      Comparison: 'Comparison',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      'System guide': 'System guide',
      Checklist: 'Checklist',
      Status: 'Current status',
    },
  };
}
