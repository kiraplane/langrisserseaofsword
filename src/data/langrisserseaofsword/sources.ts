import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-08-03';

export const siteFacts = {
  siteName: 'Langrisser: Sea of Sword Wiki',
  domain: 'https://www.langrisserseaofsword.wiki',
  canonicalHost: 'www.langrisserseaofsword.wiki',
  gameName: 'Langrisser: Sea of Sword',
  creator: 'Black Jack Studio',
  publishers: ['HongKong GameTree Limited'],
  publisher: 'HongKong GameTree Limited',
  officialSteamUrl:
    'https://store.steampowered.com/app/4808030/Langrisser_Sea_of_Sword/',
  officialCommunityUrl: 'https://steamcommunity.com/app/4808030/',
  officialWebsiteUrl: 'https://ll.game-tree.com/',
  officialDiscordUrl: 'https://discord.gg/Wukgzve6kb',
  officialYouTubeUrl: 'https://www.youtube.com/@LangrisserSeaofswordEN',
  officialXUrl: 'https://x.com/LLSeaofswordEN',
  officialFacebookUrl: 'https://www.facebook.com/LangrisserSeaofSword',
  officialRedditUrl: 'https://www.reddit.com/r/LangrisserSeaofSword/',
  officialTikTokUrl: 'https://www.tiktok.com/@langrisserseaofsworden',
  officialSupportEmail: 'Langrisser@game-trees.com',
  supportEmail: 'hello@langrisserseaofsword.wiki',
  releaseDate: 'To be announced',
  steamAppId: '4808030',
  officialCoverImage: '/langrisserseaofsword/hero.jpg',
  officialIconImage: '/langrisserseaofsword/icon.jpg',
  officialLogoImage: '/langrisserseaofsword/logo.png',
  officialHeroImage: '/langrisserseaofsword/hero.jpg',
  officialScreenshot: '/langrisserseaofsword/screenshots/5.jpg',
  officialTrailerId: 'bcJ7phaqj4c',
  officialTrailerPublishedAt: '2026-07-22',
  officialTeaserId: 'qfzDmEOcaLo',
  officialTeaserPublishedAt: '2026-07-15',
} as const;

export const siteDescription =
  'Langrisser: Sea of Sword Wiki for release status, pre-registration, dual-hero combat, characters, platforms and official PC requirements.';

export const gameFacts: GameFact[] = [
  {
    label: 'Release status',
    value: 'Coming Soon on Steam; no release date has been announced.',
  },
  {
    label: 'Combat shift',
    value:
      'One squad can field two heroes and mix the troop types led by both.',
  },
  {
    label: 'World structure',
    value:
      'Free exploration replaces the series’ isolated linear-stage framework.',
  },
  {
    label: 'Battlefields',
    value:
      'Elevation, destructible walls, bridges and terrain can change the route to victory.',
  },
  {
    label: 'Platforms',
    value: 'Steam for Windows plus official iOS and Android releases.',
  },
  {
    label: 'Current model',
    value:
      'Steam lists Free To Play; detailed monetization and summon systems are not yet confirmed.',
  },
];

export const confirmedCharacters = [
  {
    name: 'The Nameless',
    role: 'Player protagonist',
    status:
      'A memory-fragmented lead drawn into the empire’s factional struggle.',
  },
  {
    name: 'Eta',
    role: 'New companion',
    status: 'The mysterious white-haired girl who travels with the Nameless.',
  },
  {
    name: 'Leon',
    role: 'Returning hero',
    status: 'Officially confirmed to return in a renewed form.',
  },
  {
    name: 'Elwin',
    role: 'Returning hero',
    status: 'Officially confirmed to return in a renewed form.',
  },
  {
    name: 'Sherry',
    role: 'Returning hero',
    status: 'Officially confirmed to return in a renewed form.',
  },
] as const;

export const pcRequirements = {
  minimum: [
    ['OS', 'Windows 10'],
    ['Processor', 'Intel i5-9400F / AMD Ryzen 5 3500X'],
    ['Memory', '8 GB RAM'],
    ['Graphics', 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 5600 XT'],
    ['DirectX', 'Version 11'],
    ['Network', 'Broadband internet connection'],
    ['Storage', '12 GB available space'],
  ],
  recommended: [
    ['OS', 'Windows 10'],
    ['Processor', 'Intel i5-12400F / AMD Ryzen 5 5600'],
    ['Memory', '16 GB RAM'],
    ['Graphics', 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 6700 XT'],
    ['DirectX', 'Version 11'],
    ['Network', 'Broadband internet connection'],
    ['Storage', '16 GB available space'],
  ],
} as const;

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Langrisser: Sea of Sword Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary identity, platform, requirements, systems and media record.',
  },
  {
    type: 'official',
    label: 'Official global pre-registration site',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official links, branding and global pre-registration flow.',
  },
  {
    type: 'youtube',
    label: 'Official first gameplay trailer',
    url: `https://www.youtube.com/watch?v=${siteFacts.officialTrailerId}`,
    checkedAt,
    confidence: 'high',
    note: 'Official visual reference for combat, exploration and characters.',
  },
  {
    type: 'youtube',
    label: 'Official concept teaser',
    url: `https://www.youtube.com/watch?v=${siteFacts.officialTeaserId}`,
    checkedAt,
    confidence: 'high',
    note: 'Official story, setting and announcement reference.',
  },
  {
    type: 'press',
    label: 'Gematsu gameplay details',
    url: 'https://www.gematsu.com/2026/07/langrisser-sea-of-sword-first-gameplay-trailer-details-and-screenshots',
    checkedAt,
    confidence: 'medium',
    note: 'Secondary mirror of the Steam system announcement and trailer set.',
  },
  {
    type: 'press',
    label: 'Gematsu announcement',
    url: 'https://www.gematsu.com/2026/07/langrisser-sea-of-sword-announced-for-pc-ios-android-and-more',
    checkedAt,
    confidence: 'medium',
    note: 'Cross-check for announcement timing and official platforms.',
  },
  {
    type: 'press',
    label: 'Pocket Gamer dual-hero coverage',
    url: 'https://www.pocketgamer.com/langrisser-sea-of-swords/steam-description/',
    checkedAt,
    confidence: 'medium',
    note: 'Early search-result competitor and dual-hero summary.',
  },
  {
    type: 'press',
    label: 'Inven Global system explainer',
    url: 'https://www.invenglobal.com/articles/24027/breaking-the-mold-the-new-continent-of-langrisser-sea-of-swords',
    checkedAt,
    confidence: 'medium',
    note: 'Secondary comparison with Langrisser Mobile and exploration systems.',
  },
  {
    type: 'press',
    label: 'Noisy Pixel gameplay report',
    url: 'https://noisypixel.net/langrisser-sea-of-sword-first-gameplay-trailer/',
    checkedAt,
    confidence: 'medium',
    note: 'Cross-check for free-to-play and combat-system framing.',
  },
  {
    type: 'community',
    label: 'Current Langrisser community questions',
    url: 'https://www.reddit.com/r/langrisser/',
    checkedAt,
    confidence: 'watch',
    note: 'Question discovery only; speculation is never promoted to fact.',
  },
  {
    type: 'search',
    label: 'Current exact-title web result set',
    url: 'https://www.google.com/search?q=Langrisser%3A+Sea+of+Sword',
    checkedAt,
    confidence: 'medium',
    note: 'No mature exact-title English wiki was found at launch.',
  },
];

const item = (
  keyword: string,
  intent: string,
  route: string,
  priority: KeywordMatrixItem['priority'],
  status: KeywordMatrixItem['status'],
  evidence: string,
  notes: string
): KeywordMatrixItem => ({
  keyword,
  intent,
  route,
  priority,
  status,
  evidence,
  notes,
});

export const keywordMatrix: KeywordMatrixItem[] = [
  item(
    'langrisser sea of sword',
    'Find the exact game.',
    '/',
    'P0',
    'keep',
    'Official entity term.',
    'Homepage head term.'
  ),
  item(
    'langrisser sea of sword wiki',
    'Find structured information.',
    '/',
    'P0',
    'keep',
    'No dedicated exact-title wiki found.',
    'Homepage wiki intent.'
  ),
  item(
    'langrisser sea of sword guide',
    'Browse current help.',
    '/guides',
    'P0',
    'keep',
    'Thin early guide supply.',
    'Guide hub.'
  ),
  item(
    'langrisser sea of sword release date',
    'Check launch timing.',
    '/release-date',
    'P0',
    'keep',
    'Steam says To be announced.',
    'Status page.'
  ),
  item(
    'langrisser sea of sword pre registration',
    'Register safely.',
    '/pre-registration',
    'P0',
    'keep',
    'Official site centers pre-registration.',
    'Official flow and privacy checklist.'
  ),
  item(
    'langrisser sea of sword gameplay',
    'Understand the game.',
    '/gameplay',
    'P0',
    'keep',
    'Official gameplay trailer and Steam detail.',
    'High-level system overview.'
  ),
  item(
    'langrisser sea of sword characters',
    'See the confirmed cast.',
    '/characters',
    'P0',
    'keep',
    'Five named or identified characters confirmed.',
    'No speculative roster.'
  ),
  item(
    'langrisser sea of sword platforms',
    'Check PC and mobile support.',
    '/platforms',
    'P0',
    'keep',
    'Steam, iOS and Android confirmed.',
    'Platform status page.'
  ),
  item(
    'langrisser sea of sword steam',
    'Find the PC listing.',
    '/platforms',
    'P0',
    'keep',
    'Steam App 4808030 is live.',
    'Merged with platforms.'
  ),
  item(
    'langrisser sea of sword system requirements',
    'Check PC fit.',
    '/system-requirements',
    'P0',
    'keep',
    'Official minimum and recommended tables.',
    'Hardware page.'
  ),
  item(
    'langrisser sea of sword download',
    'Find the official client.',
    '/download',
    'P0',
    'keep',
    'No playable global client yet.',
    'Safe channel/status page.'
  ),
  item(
    'langrisser sea of sword dual heroes',
    'Understand squad building.',
    '/guides/dual-hero-system',
    'P0',
    'keep',
    'Headline official combat system.',
    'Main and secondary hero logic.'
  ),
  item(
    'langrisser sea of sword hero unity skills',
    'Understand pair bonuses.',
    '/guides/dual-hero-system',
    'P1',
    'keep',
    'Official Steam terminology.',
    'Merged with dual heroes.'
  ),
  item(
    'langrisser sea of sword exploration',
    'Understand world movement.',
    '/guides/exploration-and-territory',
    'P1',
    'keep',
    'Official free-exploration system.',
    'World-system guide.'
  ),
  item(
    'langrisser sea of sword territory management',
    'Understand progression.',
    '/guides/exploration-and-territory',
    'P1',
    'keep',
    'Official camp-to-fortress description.',
    'Merged with exploration.'
  ),
  item(
    'langrisser sea of sword destructible terrain',
    'Understand battle maps.',
    '/guides/exploration-and-territory',
    'P1',
    'keep',
    'Official wall, bridge and height examples.',
    'Merged with exploration.'
  ),
  item(
    'langrisser sea of sword story',
    'Understand the setting.',
    '/guides/story-and-setting',
    'P1',
    'keep',
    'Official Nameless and Eta synopsis.',
    'Spoiler-light story page.'
  ),
  item(
    'langrisser sea of sword free to play',
    'Check the business model.',
    '/guides/free-to-play-and-gacha-status',
    'P0',
    'keep',
    'Steam lists Free To Play.',
    'Separate confirmed model from unknown systems.'
  ),
  item(
    'is langrisser sea of sword gacha',
    'Check monetization.',
    '/guides/free-to-play-and-gacha-status',
    'P1',
    'keep',
    'Visible community question; official answer incomplete.',
    'Current status, not speculation.'
  ),
  item(
    'langrisser sea of sword vs langrisser mobile',
    'Distinguish the products.',
    '/guides/sea-of-sword-vs-langrisser-mobile',
    'P1',
    'keep',
    'Strong entity confusion and community concern.',
    'Comparison without shutdown speculation.'
  ),
  item(
    'langrisser sea of sword pre registration rewards',
    'Check milestone rewards.',
    '/pre-registration',
    'P2',
    'watch',
    'No public reward table verified.',
    'Update only from official announcement.'
  ),
  item(
    'langrisser sea of sword beta',
    'Find a test.',
    '/release-date',
    'P2',
    'watch',
    'No global beta schedule verified.',
    'Track on release status.'
  ),
  item(
    'langrisser sea of sword steam deck',
    'Check handheld support.',
    '/platforms',
    'P2',
    'watch',
    'No Deck rating verified.',
    'No dedicated page yet.'
  ),
  item(
    'langrisser sea of sword console',
    'Check console support.',
    '/platforms',
    'P2',
    'watch',
    'No console release announced.',
    'No dedicated page yet.'
  ),
  item(
    'langrisser sea of sword codes',
    'Redeem rewards.',
    'none',
    'P3',
    'watch',
    'No released game or verified code system.',
    'No filler page.'
  ),
  item(
    'langrisser sea of sword tier list',
    'Rank heroes.',
    'none',
    'P3',
    'watch',
    'No playable roster or meta.',
    'No filler page.'
  ),
  item(
    'langrisser sea of sword reroll',
    'Optimize first summons.',
    'none',
    'P3',
    'watch',
    'Summon and reroll systems are unconfirmed.',
    'No filler page.'
  ),
  item(
    'langrisser sea of swords',
    'Resolve plural spelling.',
    '/',
    'P2',
    'keep',
    'Common media variation.',
    'Canonicalize to official singular title.'
  ),
  item(
    'langrisser sea',
    'Find the old mobile product.',
    'none',
    'P3',
    'ignore',
    'Different entity.',
    'Never merge with Sea of Sword.'
  ),
  item(
    'sword of the sea',
    'Find an unrelated Steam game.',
    'none',
    'P3',
    'ignore',
    'Different entity.',
    'Explicit disambiguation.'
  ),
  item(
    'ラングリッサー 剣の海 攻略',
    'Japanese guide.',
    '/guides',
    'P2',
    'localize_later',
    'Official Japanese title.',
    'English core first.'
  ),
  item(
    '랑그릿사 검의 바다 공략',
    'Korean guide.',
    '/guides',
    'P2',
    'localize_later',
    'Official Korean title.',
    'English core first.'
  ),
  item(
    '夢戰 劍之海 攻略',
    'Traditional Chinese guide.',
    '/guides',
    'P2',
    'localize_later',
    'Official Traditional Chinese title.',
    'English core first.'
  ),
];
