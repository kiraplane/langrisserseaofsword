import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-08-10';

const gameplayVideo: GuideVideo = {
  id: 'bcJ7phaqj4c',
  title:
    'Langrisser: Sea of Sword - First Gameplay Trailer | Wishlist Now on Steam',
  channel: 'Langrisser: Sea of Sword',
  url: 'https://www.youtube.com/watch?v=bcJ7phaqj4c',
  thumbnailUrl: '/langrisserseaofsword/guides/gameplay.jpg',
  publishedAt: '2026-07-22',
  checkedAt,
};

const conceptTeaser: GuideVideo = {
  id: 'qfzDmEOcaLo',
  title:
    'Langrisser: Sea of Sword Concept Teaser Trailer — A New Langrisser Saga Begins',
  channel: 'Langrisser: Sea of Sword',
  url: 'https://www.youtube.com/watch?v=qfzDmEOcaLo',
  thumbnailUrl: '/langrisserseaofsword/guides/teaser.jpg',
  publishedAt: '2026-07-15',
  checkedAt,
};

export const guides: Guide[] = [
  {
    slug: 'release-date',
    path: '/release-date',
    title: 'Langrisser: Sea of Sword Release Date Status',
    seoTitle: 'Langrisser: Sea of Sword Release Date & Launch Status',
    seoDescription:
      'The Langrisser: Sea of Sword release date is not announced. Track the confirmed Steam, iOS, Android and pre-registration status.',
    summary:
      'No release date has been announced. The game is Coming Soon on Steam, with global pre-registration open for the planned PC, iOS and Android launch.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/langrisserseaofsword/guides/teaser.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Steam App 4808030 and the official global site are the authority. No beta date, launch window or console date was verified.',
    videoSearchQueries: [
      'Langrisser Sea of Sword release date',
      'Langrisser Sea of Sword announcement',
    ],
    video: conceptTeaser,
    tags: ['Release date', 'Coming Soon', 'Status'],
    relatedRoutes: [
      '/pre-registration',
      '/platforms',
      '/gameplay',
      '/download',
    ],
    body: [
      {
        heading: 'The release date is still unannounced',
        paragraphs: [
          'Langrisser: Sea of Sword does not have a public release date or launch window as of July 23, 2026. Steam lists the game as Coming Soon and displays “To be announced” where a date would normally appear. The official global site is accepting pre-registration, but it does not add a month, quarter or year that would narrow the launch.',
          'Treat any specific date circulating outside the official channels as a rumor until the Steam listing, official site or verified social accounts publish the same information. A pre-registration form proves that launch marketing has started; it does not prove that a client, beta or final build is ready.',
        ],
      },
      {
        heading: 'What is confirmed for launch',
        paragraphs: [
          'The confirmed platform set is PC through Steam plus iOS and Android. Black Jack Studio describes the project as a global release, and the English official site, English trailer channel and Steam page are already live. Steam App 4808030 can be wishlisted now even though it cannot be installed.',
          'The current Steam record also identifies the game as Free To Play and single-player. Those labels can still be refined before launch, but they are stronger evidence than assumptions based on Langrisser Mobile. No PlayStation, Xbox, Nintendo Switch, macOS or Linux version has been announced.',
        ],
        bullets: [
          'Steam: wishlist available; client not released.',
          'Official site: global pre-registration available.',
          'iOS and Android: announced, but store pages and dates may vary by region.',
          'Release date: not announced.',
          'Global beta or test schedule: not announced.',
        ],
      },
      {
        heading: 'How to verify a real date announcement',
        paragraphs: [
          'Start with the Steam release field. A real PC date should replace “To be announced” on App 4808030 and normally be followed by an official post. Then compare the date with the official English X account, Discord announcements and the global site. Matching information across those surfaces is a stronger signal than a screenshot without a source link.',
          'Watch the time zone when a date finally appears. Steam may show a local calendar date while a global server opens at one shared time. Mobile storefronts can also roll out by region. This page will separate the advertised date, preload availability and actual server opening instead of compressing them into one vague launch claim.',
        ],
      },
      {
        heading: 'What to do while the date is pending',
        paragraphs: [
          'Use the Steam wishlist if PC is your priority and complete pre-registration only through the official site. Follow one official update channel rather than submitting details to countdown or APK pages. The official Discord is useful for announcements, while Steam remains the clearest authority for Windows requirements and client availability.',
          'There is no need to prepare reroll targets, launch tier lists or redeem codes yet. None of those systems has been publicly documented. The useful preparation is simpler: confirm your platform, review the current PC requirements, learn the headline combat systems and keep account credentials separate from unofficial download sites.',
        ],
      },
    ],
    faq: [
      {
        question: 'When does Langrisser: Sea of Sword release?',
        answer:
          'No date or launch window has been announced. Steam currently shows Coming Soon and To be announced.',
      },
      {
        question: 'Is there a Langrisser: Sea of Sword beta date?',
        answer:
          'No global beta or test schedule was verified as of July 23, 2026.',
      },
      {
        question: 'Can I wishlist it on Steam?',
        answer:
          'Yes. Use Steam App 4808030, which is the official Windows listing.',
      },
    ],
  },
  {
    slug: 'pre-registration',
    path: '/pre-registration',
    title: 'Langrisser: Sea of Sword Pre-Registration Guide',
    seoTitle: 'Langrisser: Sea of Sword Pre-Registration Guide',
    seoDescription:
      'Pre-register for Langrisser: Sea of Sword through the official global site, wishlist the Steam app and avoid fake reward or download pages.',
    summary:
      'Pre-registration is open on the official global site. Steam players should also wishlist App 4808030; neither action is a game download.',
    category: 'Start',
    difficulty: 'Checklist',
    coverImageUrl: '/langrisserseaofsword/guides/teaser.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Official site HTML and pre-registration terms checked directly. No public reward milestone table was found.',
    videoSearchQueries: [
      'Langrisser Sea of Sword pre registration',
      'Langrisser Sea of Sword official site',
    ],
    tags: ['Pre-registration', 'Official site', 'Steam'],
    relatedRoutes: [
      '/release-date',
      '/platforms',
      '/download',
      '/guides/free-to-play-and-gacha-status',
    ],
    body: [
      {
        heading: 'Use the official global registration page',
        paragraphs: [
          'Open the official Langrisser: Sea of Sword site at ll.game-tree.com and choose the pre-register action. The English flow accepts an email address, asks you to accept the event terms and sends important launch or game updates after registration. The site can select a different contact flow by region, so the exact form may not look identical for every visitor.',
          'Check the domain before entering any contact information. The official page links directly to Steam App 4808030 and the verified English social channels. A page that asks for a Steam password, payment card, emulator install or APK download is not the normal pre-registration flow described by the publisher.',
        ],
      },
      {
        heading: 'Steam wishlist and pre-registration are separate',
        paragraphs: [
          'Adding the game to your Steam wishlist follows App 4808030 inside Steam and helps you receive storefront release notifications. Registering on the official site gives GameTree permission to contact you under the event terms. Doing one does not automatically complete the other.',
          'PC players can reasonably use both: wishlist through Steam, then register on the official site if they want publisher notifications. Mobile players should use the official site until regional App Store or Google Play listings are linked. Avoid searching for unofficial pre-install packages while the client remains unreleased.',
        ],
        bullets: [
          'Official site: submit the regional form and retain the success confirmation.',
          'Steam: wishlist App 4808030 from the verified store page.',
          'Discord/X: follow the official accounts for announcement context.',
          'Never provide a Steam password to a third-party registration page.',
        ],
      },
      {
        heading: 'No reward milestone table is confirmed yet',
        paragraphs: [
          'The public English pre-registration page checked on July 23, 2026 does not display a verified milestone ladder, launch currency total, free hero or code list. That may change as the campaign develops, but copying rewards from another region, Langrisser Mobile or an unrelated gacha launch would create false expectations.',
          'If rewards are announced, verify the exact region, eligibility period and delivery method. A global reward may be automatic at launch, while a regional event could require a matching account or store. This page will keep reward details out until an official announcement supplies those conditions.',
        ],
      },
      {
        heading: 'What happens after you register',
        paragraphs: [
          'The official terms say registration details can be used for game announcements, events, customer support, service communication and marketing. Register only if that notification tradeoff is acceptable, and use an email address you control. You do not need to share a password with this wiki or any guide site.',
          'A successful registration is not early access and does not reserve a character name, server slot or beta invitation unless a later official notice says so. Keep the confirmation, follow the release-status page and wait for a storefront client. That is the safest path from registration to launch.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I pre-register for Langrisser: Sea of Sword?',
        answer:
          'Use the official global site at ll.game-tree.com. Steam players can also wishlist App 4808030.',
      },
      {
        question: 'Are pre-registration rewards confirmed?',
        answer:
          'No public English reward milestone table was verified on July 23, 2026.',
      },
      {
        question: 'Does pre-registration download the game?',
        answer:
          'No. It registers for updates. The Steam and mobile clients are not publicly released yet.',
      },
    ],
  },
  {
    slug: 'gameplay',
    path: '/gameplay',
    title: 'Langrisser: Sea of Sword Gameplay Explained',
    seoTitle: 'Langrisser: Sea of Sword Gameplay & Combat Systems',
    seoDescription:
      'See how Langrisser: Sea of Sword combines dual heroes, mixed troops, free exploration, territory growth and destructible tactical maps.',
    summary:
      'The new tactical RPG pairs two heroes in one squad, opens the world to exploration and turns elevation, walls and bridges into battle decisions.',
    category: 'Systems',
    difficulty: 'Beginner',
    coverImageUrl: '/langrisserseaofsword/guides/gameplay.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Based on the live Steam description and official first gameplay trailer. Avoids inferring unannounced live-service systems.',
    videoSearchQueries: [
      'Langrisser Sea of Sword gameplay',
      'Langrisser Sea of Sword combat',
      'Langrisser Sea of Sword first gameplay trailer',
    ],
    video: gameplayVideo,
    tags: ['Gameplay', 'Tactical RPG', 'Overview'],
    relatedRoutes: [
      '/guides/dual-hero-system',
      '/guides/exploration-and-territory',
      '/characters',
      '/guides/story-and-setting',
    ],
    body: [
      {
        heading: 'A tactical RPG built around squads, not lone heroes',
        paragraphs: [
          'Langrisser: Sea of Sword keeps the series idea of heroes commanding troops, then expands one squad to include a main hero, a secondary hero and two troop types. The pair is not just a visual party. Switching which hero leads changes skill forms and the squad’s tactical role, while the soldiers attached to both heroes can be mixed into a new formation.',
          'The result points toward planning at two levels. Before battle, the hero pair and troop mix determine the tools you bring. During battle, lead-position changes determine which version of those tools is active. Specific pairs can also trigger Hero Unity Skills, so compatibility may matter as much as individual strength once full data is available.',
        ],
      },
      {
        heading: 'The world is no longer a line of isolated stages',
        paragraphs: [
          'Sea of Sword moves beyond a sequence of disconnected tactical maps. The Nameless can explore forests, towns, royal cities and caves, speak with NPCs, gather materials and encounter light environmental puzzles. Hidden story events and regional changes are meant to make the spaces between battles part of progression.',
          'Exploration also connects to territory management. The official description starts that system with a camp in the mud and ends with a fortress controlling a region. Exact timers, resources and upgrade trees have not been published, so the important confirmed idea is the loop: explore, gather, develop territory and return to tactical conflict with a stronger base.',
        ],
      },
      {
        heading: 'Battlefields become tactical resources',
        paragraphs: [
          'Elevation can create an advantage, but height is only one part of the map logic. Walls, fortifications, bridges and other objects can be destroyed. The official examples include opening a breach in a fortified city and cutting a stone bridge to remove enemy forces and stop an advance.',
          'That changes how a player should read a map. The visible route to an objective may not be the only route, and an environmental action can matter more than direct damage. A defensive formation can be bypassed, a choke point can be removed, or high ground can reshape the order of engagement. Exact damage rules and action costs remain unannounced.',
        ],
      },
      {
        heading: 'What the current footage does not confirm',
        paragraphs: [
          'The official material confirms tactical combat, exploration, story choices, territory growth, returning heroes, single-player Steam support and the free-to-play label. It does not yet explain summons, stamina, PvP, co-op, autoplay, rerolls, rarity, equipment farming, endgame or seasonal resets.',
          'Do not import those systems from Langrisser Mobile simply because the developer is related and the new game is free to play. Sea of Sword already changes core movement and squad structure. Until a system appears in an official page, client or developer announcement, it belongs on a watch list rather than in a launch guide.',
        ],
      },
      {
        heading: 'The useful pre-launch mental model',
        paragraphs: [
          'Think of each squad as a flexible package: two heroes, two troop sources and at least two lead states. Think of each map as an objective space where terrain can be altered rather than a flat grid that only measures attack range. Outside combat, expect exploration and territory development to supply context and progression.',
          'That model is enough to understand why Sea of Sword differs without pretending to know an optimal build. At launch, real strategy will depend on skill values, troop affinities, movement rules, resource costs and encounter objectives. Those details should be tested in the live client before any tier list or “best team” page is published.',
        ],
      },
    ],
    faq: [
      {
        question: 'What type of game is Langrisser: Sea of Sword?',
        answer:
          'It is a free-to-play fantasy tactical RPG with single-player support, dual-hero squads, exploration and territory management.',
      },
      {
        question: 'Does it use turn-based tactical combat?',
        answer:
          'The official material presents grid-based tactical battles with heroes leading troops, battlefield positioning and terrain interactions.',
      },
      {
        question: 'Is there multiplayer?',
        answer:
          'Steam currently lists single-player. No PvP, co-op or other multiplayer mode was verified.',
      },
    ],
  },
  {
    slug: 'characters',
    path: '/characters',
    title: 'Langrisser: Sea of Sword Characters Confirmed So Far',
    seoTitle: 'Langrisser: Sea of Sword Characters & Returning Heroes',
    seoDescription:
      'Meet the confirmed Langrisser: Sea of Sword cast: the Nameless, Eta, Leon, Elwin and Sherry, with clear limits on unrevealed roles.',
    summary:
      'The confirmed cast currently includes the Nameless protagonist, Eta and returning heroes Leon, Elwin and Sherry. Full roles and stats remain unrevealed.',
    category: 'Characters',
    difficulty: 'Status',
    coverImageUrl: '/langrisserseaofsword/screenshots/3.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Only characters named by the Steam description or identified by the official story are included.',
    videoSearchQueries: [
      'Langrisser Sea of Sword characters',
      'Langrisser Sea of Sword Leon Elwin Sherry',
    ],
    video: gameplayVideo,
    tags: ['Characters', 'Returning heroes', 'Roster status'],
    relatedRoutes: [
      '/guides/story-and-setting',
      '/guides/dual-hero-system',
      '/gameplay',
      '/guides/sea-of-sword-vs-langrisser-mobile',
    ],
    body: [
      {
        heading: 'The confirmed cast is deliberately small',
        paragraphs: [
          'Five names or identities are safe to use at this stage: the Nameless protagonist, the white-haired companion Eta, and returning Langrisser heroes Leon, Elwin and Sherry. The Steam page says other familiar friends will return, but it does not provide a complete roster.',
          'That boundary matters because early trailers contain many visible designs without supplying searchable names, classes or playable status. A character appearing in art is not automatically a launch unit, and a familiar costume does not prove the exact version, rarity or skill set that will ship.',
        ],
        bullets: [
          'The Nameless — player protagonist searching for lost memories.',
          'Eta — the mysterious white-haired girl traveling with the Nameless.',
          'Leon — returning hero, renewed role not yet detailed.',
          'Elwin — returning hero, renewed role not yet detailed.',
          'Sherry — returning hero, renewed role not yet detailed.',
        ],
      },
      {
        heading: 'The Nameless and Eta anchor the new story',
        paragraphs: [
          'The Nameless enters the story with fractured memories and travels into the rigid order of a vast empire. The character is positioned less as a conventional chosen hero and more as someone navigating power, survival and uncertain choices. The official material has not supplied a customizable name, class tree or voice-cast detail for the English release.',
          'Eta is the named white-haired companion connected to that journey. Her exact combat role, relationship to the sword and place in the faction conflict are still being held back. The safest description is companion and central story figure; claims about rarity, element, weapon or romance would be speculation.',
        ],
      },
      {
        heading: 'Leon, Elwin and Sherry return in new forms',
        paragraphs: [
          'The three legacy heroes are explicitly named in the Steam description. Their return connects Sea of Sword to the wider series, but the developer also says their new appearances and roles remain a mystery. That means older game data cannot be pasted into this roster.',
          'A returning name may gain a different story position, skill form or pairing logic under the dual-hero system. Build advice must wait for the live version. For now, their value is confirmation that Sea of Sword is a new Langrisser chapter rather than an unrelated strategy RPG using only the brand.',
        ],
      },
      {
        heading: 'Why there is no tier list yet',
        paragraphs: [
          'A meaningful tier list requires a playable roster, skill numbers, troop compatibility, investment costs and content that tests different roles. None of that is publicly complete. Ranking five names from trailer visibility would measure marketing exposure, not performance.',
          'The same rule applies to reroll targets and best pairs. Hero Unity Skills make pair context important, but no full pairing table exists. This page will expand character-by-character only when official profiles or the live client provide enough evidence to explain a decision rather than repeat a name.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the main character in Langrisser: Sea of Sword?',
        answer:
          'The player follows the Nameless, a protagonist searching for lost memories, alongside a white-haired girl named Eta.',
      },
      {
        question: 'Which old Langrisser characters return?',
        answer:
          'Leon, Elwin and Sherry are explicitly confirmed. More familiar characters are teased but not named.',
      },
      {
        question: 'Is there a character tier list?',
        answer:
          'No reliable tier list is possible before the roster, skills and live content are available.',
      },
    ],
  },
  {
    slug: 'platforms',
    path: '/platforms',
    title: 'Langrisser: Sea of Sword Platforms and Steam Status',
    seoTitle: 'Langrisser: Sea of Sword Platforms: Steam, iOS & Android',
    seoDescription:
      'Langrisser: Sea of Sword is confirmed for Windows via Steam, iOS and Android. Check console, Mac, Linux, Deck and cross-save status.',
    summary:
      'Windows through Steam, iOS and Android are confirmed. Console, Mac, Linux, Steam Deck and cross-save support have not been announced.',
    category: 'Platforms',
    difficulty: 'Status',
    coverImageUrl: '/langrisserseaofsword/screenshots/1.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Steam platform flags and official global announcement checked. Unknown platforms remain explicitly unconfirmed.',
    videoSearchQueries: [
      'Langrisser Sea of Sword platforms',
      'Langrisser Sea of Sword Steam',
    ],
    tags: ['Steam', 'iOS', 'Android'],
    relatedRoutes: [
      '/system-requirements',
      '/download',
      '/release-date',
      '/pre-registration',
    ],
    body: [
      {
        heading: 'Confirmed platforms',
        paragraphs: [
          'Langrisser: Sea of Sword is confirmed for Windows PC through Steam, iOS and Android. The Steam listing is already live as App 4808030, while the global official site handles pre-registration for the wider release. No platform has a public launch date.',
          'Steam currently marks the game as single-player and Free To Play. The listing supports English, Japanese, Simplified Chinese, Traditional Chinese and Korean interfaces; Japanese and Simplified Chinese are shown with full audio support in the current language table.',
        ],
        bullets: [
          'Windows PC — confirmed through Steam App 4808030.',
          'iOS — confirmed; regional store timing not announced.',
          'Android — confirmed; regional store timing not announced.',
        ],
      },
      {
        heading: 'Console, Mac and Linux are not announced',
        paragraphs: [
          'There is no confirmed PlayStation, Xbox or Nintendo Switch version. Steam’s current platform flags list Windows but not macOS or Linux. Do not treat “PC and more” from an early announcement as a promise for a particular console.',
          'The platform list can expand later, especially after the release date is known, but a wishlist page or fan request is not an announcement. This page will add a platform only when an official store, publisher post or developer statement identifies it.',
        ],
      },
      {
        heading: 'Steam Deck status is unknown',
        paragraphs: [
          'Steam does not currently provide a Deck compatibility rating for the unreleased game. A Windows client and controller-friendly tactical interface do not automatically mean Verified or Playable status. Network requirements and any launcher behavior can also affect compatibility.',
          'Wait for Valve’s compatibility result or a developer confirmation after a testable build exists. Avoid pages that promise a Proton fix, custom launcher or performance profile before the client can be examined.',
        ],
      },
      {
        heading: 'Cross-save and regional accounts need confirmation',
        paragraphs: [
          'The global multi-platform plan makes cross-save an obvious player question, but no account-linking or shared-progress policy was verified. Mobile and Steam could share a server, use separate regional services or require a publisher account; the current material does not settle that.',
          'Choose pre-registration contact details you control and wait for the official account guide before binding a platform. Do not purchase or trade accounts based on assumptions about server transfer, region switching or cross-progression.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Langrisser: Sea of Sword on Steam?',
        answer:
          'Yes. The official Windows listing is Steam App 4808030 and can be wishlisted.',
      },
      {
        question: 'Is it coming to iOS and Android?',
        answer:
          'Yes. Both mobile platforms are announced, but regional store dates are not available.',
      },
      {
        question: 'Is it coming to console?',
        answer:
          'No PlayStation, Xbox or Nintendo Switch release has been announced.',
      },
      {
        question: 'Will it have cross-save?',
        answer:
          'Cross-save and account-linking details have not been confirmed.',
      },
    ],
  },
  {
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Langrisser: Sea of Sword PC System Requirements',
    seoTitle: 'Langrisser: Sea of Sword System Requirements for PC',
    seoDescription:
      'Check official Langrisser: Sea of Sword minimum and recommended PC specs, including Windows 10, RAM, GPU, storage and network.',
    summary:
      'Steam lists Windows 10, 8 GB RAM and 12 GB storage as the minimum, with 16 GB RAM and 16 GB storage recommended.',
    category: 'Platforms',
    difficulty: 'Checklist',
    coverImageUrl: '/langrisserseaofsword/screenshots/6.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Requirements transcribed from the live English Steam App 4808030 table on the checked date.',
    videoSearchQueries: ['Langrisser Sea of Sword system requirements'],
    tags: ['PC requirements', 'Windows 10', 'Storage'],
    relatedRoutes: ['/platforms', '/download', '/release-date', '/gameplay'],
    body: [
      {
        heading: 'Official minimum PC requirements',
        paragraphs: [
          'The minimum Steam table targets Windows 10 with an Intel i5-9400F or AMD Ryzen 5 3500X, 8 GB of RAM and a DirectX 11 graphics card. The listed GPU floor is an NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 5600 XT.',
          'Steam also requires a broadband internet connection and 12 GB of available storage at minimum. The network line matters even though the store marks the game single-player; it may reflect account services, updates or other online requirements that have not been fully documented.',
        ],
        bullets: [
          'OS: Windows 10',
          'CPU: Intel i5-9400F / AMD Ryzen 5 3500X',
          'RAM: 8 GB',
          'GPU: GTX 1050 Ti / Radeon RX 5600 XT',
          'DirectX: Version 11',
          'Network: Broadband internet connection',
          'Storage: 12 GB available',
        ],
      },
      {
        heading: 'Official recommended PC requirements',
        paragraphs: [
          'The recommended table moves to an Intel i5-12400F or AMD Ryzen 5 5600, 16 GB of RAM and an NVIDIA GeForce RTX 2060 or AMD Radeon RX 6700 XT. DirectX 11 and Windows 10 remain the listed baseline.',
          'Recommended storage rises to 16 GB. Keep additional free space for unpacking and updates rather than planning to fill a drive to the exact store number. The final client size can change before launch, so recheck Steam when preload becomes available.',
        ],
        bullets: [
          'OS: Windows 10',
          'CPU: Intel i5-12400F / AMD Ryzen 5 5600',
          'RAM: 16 GB',
          'GPU: RTX 2060 / Radeon RX 6700 XT',
          'DirectX: Version 11',
          'Network: Broadband internet connection',
          'Storage: 16 GB available',
        ],
      },
      {
        heading: 'How to compare your PC',
        paragraphs: [
          'Match the processor and graphics card separately. Having enough RAM does not compensate for a GPU below the target, and an older high-core-count CPU is not automatically equivalent to the listed models. Laptop versions can also perform differently from desktop parts with the same family name.',
          'If your hardware sits between minimum and recommended, wait for the final client and test the real tactical battles rather than judging only a menu or opening scene. Large unit formations, spell effects and destructible environments are more useful performance checks than an empty exploration area.',
        ],
      },
      {
        heading: 'What the table does not promise',
        paragraphs: [
          'The current requirements do not state a target resolution, frame rate, graphics preset, controller profile or Steam Deck result. They also do not confirm ultrawide, cloud gaming or macOS support. Treat the table as a hardware gate, not a performance guarantee.',
          'Do not download unofficial benchmark clients or “optimized” executables. The only reliable test will be the official Steam build or an officially distributed beta. Recheck this page and App 4808030 near launch because requirements can be revised.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much RAM does Langrisser: Sea of Sword need?',
        answer: 'Steam lists 8 GB minimum and 16 GB recommended.',
      },
      {
        question: 'How much storage does it need?',
        answer:
          'Steam lists 12 GB minimum and 16 GB recommended, but extra update space is sensible.',
      },
      {
        question: 'Does it support Windows 11?',
        answer:
          'The table names Windows 10. Windows 11 is not separately listed, so confirm the final client near launch.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Langrisser: Sea of Sword Official Download Status',
    seoTitle: 'Langrisser: Sea of Sword Download: Official PC & Mobile',
    seoDescription:
      'Langrisser: Sea of Sword is not downloadable yet. Use the official Steam wishlist and global pre-registration page—never fake APKs.',
    summary:
      'There is no public global client to download yet. Wishlist the official Steam app or pre-register on the publisher site and avoid APK or launcher mirrors.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: '/langrisserseaofsword/hero.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Safe-install page based on current Coming Soon state and official store links.',
    videoSearchQueries: ['Langrisser Sea of Sword download'],
    tags: ['Download status', 'Steam', 'Safety'],
    relatedRoutes: [
      '/pre-registration',
      '/platforms',
      '/system-requirements',
      '/release-date',
    ],
    body: [
      {
        heading: 'The official client is not released',
        paragraphs: [
          'Langrisser: Sea of Sword cannot be downloaded from the public Steam listing as of July 23, 2026. App 4808030 is in Coming Soon status, so the available PC action is Wishlist. The official global site offers pre-registration rather than a Windows installer.',
          'iOS and Android are confirmed platforms, but the global site does not currently provide public store-client links for every region. A file claiming to be the launch APK, PC setup or cracked beta before the publisher links it should be treated as unsafe.',
        ],
      },
      {
        heading: 'Use only the verified platform path',
        paragraphs: [
          'For Windows, begin inside Steam and verify the title, App ID, developer and publisher. The page should identify Black Jack Studio and HongKong GameTree Limited. When the game releases, Steam will handle installation and updates through that same record.',
          'For mobile, follow the store buttons added by the official site or an official account. Search results can surface old Langrisser SEA or Langrisser Mobile clients, which are different products. Check the full title before installing.',
        ],
        bullets: [
          'PC: Steam App 4808030.',
          'Global registration: ll.game-tree.com.',
          'Mobile: wait for official regional App Store or Google Play links.',
          'Never sideload a pre-release APK from a guide or mirror.',
        ],
      },
      {
        heading: 'Why unofficial launchers are a bad shortcut',
        paragraphs: [
          'An unofficial package can steal account credentials, replace update files or install a different Langrisser product under a familiar name. Even a clean file may lock you to an unsupported region or prevent normal updates. A pre-release “private server” cannot guarantee that progress will transfer to the global game.',
          'This site does not provide APKs, modified clients, scripts, cracks or bypass instructions. The safe choice is to wait for the same official pages already used for the announcement and pre-registration.',
        ],
      },
      {
        heading: 'What to check on launch day',
        paragraphs: [
          'Confirm that the Steam page has changed from Coming Soon to an install action and that the publisher has announced server availability. Mobile players should compare the developer/publisher identity, region and app title before tapping install.',
          'Read account and cross-save instructions before binding a login. Cross-platform progression has not been confirmed, so do not assume a mobile guest account will automatically appear on Steam. Keep recovery details and registration emails under your control.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I download Langrisser: Sea of Sword now?',
        answer:
          'No public global client is available. Steam is wishlist-only and the official site is taking pre-registrations.',
      },
      {
        question: 'Is there an official APK?',
        answer:
          'No global APK link was verified. Wait for the official site or regional Google Play listing.',
      },
      {
        question: 'What is the official Steam App ID?',
        answer: 'The official Steam App ID is 4808030.',
      },
    ],
  },
  {
    slug: 'dual-hero-system',
    path: '/guides/dual-hero-system',
    title: 'Langrisser: Sea of Sword Dual-Hero System Guide',
    seoTitle: 'Langrisser: Sea of Sword Dual Heroes & Unity Skills',
    seoDescription:
      'Understand main and secondary heroes, mixed troop types, lead switching and Hero Unity Skills in Langrisser: Sea of Sword.',
    summary:
      'Each squad can combine two heroes and their troop types, switch the lead role during battle and unlock pair-specific Hero Unity Skills.',
    category: 'Systems',
    difficulty: 'System guide',
    coverImageUrl: '/langrisserseaofsword/guides/gameplay.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Official system overview only. No unverified pair list, cooldown or damage formula is presented.',
    videoSearchQueries: [
      'Langrisser Sea of Sword dual heroes',
      'Langrisser Sea of Sword Hero Unity Skills',
    ],
    video: gameplayVideo,
    tags: ['Dual heroes', 'Troops', 'Unity Skills'],
    relatedRoutes: [
      '/gameplay',
      '/characters',
      '/guides/exploration-and-territory',
      '/guides/free-to-play-and-gacha-status',
    ],
    body: [
      {
        heading: 'One squad now starts with a pair',
        paragraphs: [
          'A Sea of Sword squad can bring two heroes into battle rather than placing one hero above one troop type. You choose a main hero and a secondary hero, and both contribute to the squad. That is the central change to the classic hero-and-soldier structure.',
          'The pair should be read as a tactical package. One hero can lead the current action while the second changes what the squad can become. Their troop types are combined into a mixed formation, so the pre-battle choice affects both hero skills and the soldiers taking the field.',
        ],
      },
      {
        heading: 'Lead switching changes skill form and role',
        paragraphs: [
          'The main and secondary positions are not permanent labels. The official description says heroes can switch flexibly on the battlefield, and changing positions changes their skill forms and tactical roles. A pair may therefore cover two jobs without replacing the whole squad.',
          'The useful planning question is not simply “which hero is stronger?” It is “what does this pair do in each lead state?” One state might be better for approach, defense or control, while the other may be better for damage or a different troop interaction. Exact examples must wait for complete skills.',
        ],
      },
      {
        heading: 'Mixed troops add another compatibility layer',
        paragraphs: [
          'The troop types led by both heroes can be combined into a new squad, and the official page says troop types can be changed freely. That makes hero pairing and soldier composition connected decisions. A strong hero pair may still need the right formation for the map and objective.',
          'Flying, infantry and cavalry units are all confirmed to return, but the full affinity and counter table is not public. Do not reuse old-game values. The live system may preserve familiar relationships while changing numbers, formation rules or how mixed soldiers receive bonuses.',
        ],
      },
      {
        heading: 'Hero Unity Skills reward specific pairs',
        paragraphs: [
          'Certain hero combinations activate exclusive Hero Unity Skills. This is the clearest evidence that pair synergy will matter beyond covering two roles. It also means future pair guides need to explain the condition, effect, opportunity cost and content where the skill matters.',
          'No complete pair list, activation cost, cooldown or upgrade system has been published. A trailer frame is not enough to rank pairings. Until the client exposes the data, the correct status is confirmed mechanic, unknown meta.',
        ],
      },
      {
        heading: 'A decision framework for launch',
        paragraphs: [
          'When the game becomes playable, test a pair in a fixed order. First identify both lead-state skills. Then record the two troop types, the switch cost or restriction, any Unity Skill and the map problem the pair solves. Finally compare investment requirements before calling the combination beginner-friendly.',
          'Stop at function before chasing rarity. A pair that covers movement and survival may be more useful for exploration than a high-damage pairing, while a siege map could favor range, mobility or terrain interaction. The dual-hero system is designed to create situational choices, so one universal ranking is unlikely to answer every mode.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can two heroes fight in one squad?',
        answer:
          'Yes. One is main and one is secondary, and they can switch positions during battle.',
      },
      {
        question: 'What changes when heroes switch?',
        answer:
          'Their skill forms and tactical roles change. Exact costs and restrictions are not yet published.',
      },
      {
        question: 'What are Hero Unity Skills?',
        answer:
          'They are exclusive skills activated by certain hero pairings. The full pairing list is not available.',
      },
    ],
  },
  {
    slug: 'exploration-and-territory',
    path: '/guides/exploration-and-territory',
    title: 'Langrisser: Sea of Sword Exploration and Territory Guide',
    seoTitle: 'Langrisser: Sea of Sword Exploration, Territory & Terrain',
    seoDescription:
      'Explore towns, forests and caves, grow a territory, solve light puzzles and use destructible terrain in Langrisser: Sea of Sword.',
    summary:
      'Free exploration connects towns, forests and caves to materials, hidden stories, territory growth and tactical maps where terrain can be destroyed.',
    category: 'Exploration',
    difficulty: 'System guide',
    coverImageUrl: '/langrisserseaofsword/screenshots/1.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Official exploration, territory and battlefield examples. No invented resource tables or upgrade timers.',
    videoSearchQueries: [
      'Langrisser Sea of Sword exploration',
      'Langrisser Sea of Sword territory management',
      'Langrisser Sea of Sword destructible terrain',
    ],
    video: gameplayVideo,
    tags: ['Exploration', 'Territory', 'Destructible maps'],
    relatedRoutes: [
      '/gameplay',
      '/guides/dual-hero-system',
      '/guides/story-and-setting',
      '/characters',
    ],
    body: [
      {
        heading: 'Free exploration replaces a rigid stage chain',
        paragraphs: [
          'Sea of Sword is designed as a continuous world rather than a menu that jumps only between isolated tactical stages. The Nameless can move through forests, towns, royal cities and caves, turning travel and discovery into part of the strategy RPG loop.',
          'The official scope includes NPC interaction, material gathering, light puzzle mechanics, terrain-shifting elements, hidden story details and unexpected encounters. This does not prove a fully open world with no boundaries; it confirms that exploration spaces now connect the battles and can change as progress advances.',
        ],
      },
      {
        heading: 'Explore with a purpose',
        paragraphs: [
          'The useful exploration loop will be to identify why an area matters before clearing every corner. NPCs can expose stories or opportunities, materials can support territory growth, and environmental details can lead to puzzles or encounters. A region may also change with story progress, so returning later can be more valuable than forcing completion on the first visit.',
          'At launch, track three things: unresolved environmental interactions, NPCs whose dialogue changes and material nodes tied to a known upgrade. That produces a practical map without claiming that every decorative path hides a reward.',
        ],
      },
      {
        heading: 'Your territory grows from camp to fortress',
        paragraphs: [
          'The player eventually unlocks a territory and develops it from a muddy camp into a fortress that can control a region. That makes management a progression pillar rather than a purely cosmetic home base.',
          'The resource names, build slots, timers and reset rules are not public. Avoid treating systems from Langrisser Mobile or other strategy RPGs as a template. Once the client launches, the first guide should separate permanent territory upgrades from temporary regional or event progress.',
        ],
      },
      {
        heading: 'Destructible terrain changes battle routes',
        paragraphs: [
          'Battlefield objects can be destroyed, and elevation can decide an engagement. The official examples include breaching Caladrim’s walls and fortifications, then cutting a stone bridge above a waterfall to remove forces and block their advance.',
          'Those examples suggest a map-reading order: locate the objective, mark elevation, inspect destructible objects, identify alternate approaches and only then place squads. An environmental action can create a path, remove a threat or change where the enemy can travel. It should be evaluated like a skill, with a cost and a tactical result.',
        ],
      },
      {
        heading: 'Keep exploration and combat evidence separate',
        paragraphs: [
          'A screenshot can show a village, bridge or formation without explaining the rule behind it. Use official text and the live client to determine whether an object is interactive, whether destruction is scripted and whether terrain changes persist after battle.',
          'The same discipline applies to hidden stories. This site will document triggers only after they can be reproduced, and it will keep spoilers behind clear headings. The launch guide should help players make decisions, not convert every trailer frame into a fabricated collectible map.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Langrisser: Sea of Sword open world?',
        answer:
          'It has free exploration across connected locations, but the official material does not define it as a fully unrestricted open world.',
      },
      {
        question: 'Can you build a base?',
        answer:
          'You unlock a territory that grows from a camp into a regional fortress. Detailed construction rules are not announced.',
      },
      {
        question: 'Can terrain be destroyed?',
        answer:
          'Yes. Walls, fortifications, bridges and other battlefield objects can create or remove tactical routes.',
      },
    ],
  },
  {
    slug: 'story-and-setting',
    path: '/guides/story-and-setting',
    title: 'Langrisser: Sea of Sword Story and Setting',
    seoTitle: 'Langrisser: Sea of Sword Story, Nameless & Eta',
    seoDescription:
      'A spoiler-light guide to the Nameless, Eta, the mist-shrouded empire, factional conflict and returning Langrisser heroes.',
    summary:
      'The Nameless and Eta cross a mist-shrouded world shaped by an empire, competing factions and choices that frame survival rather than simple heroism.',
    category: 'Story',
    difficulty: 'Beginner',
    coverImageUrl: '/langrisserseaofsword/guides/teaser.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Spoiler-light synthesis of the official synopsis and concept teaser.',
    videoSearchQueries: [
      'Langrisser Sea of Sword story',
      'Langrisser Sea of Sword Nameless Eta',
    ],
    video: conceptTeaser,
    tags: ['Story', 'Nameless', 'Eta'],
    relatedRoutes: [
      '/characters',
      '/gameplay',
      '/guides/exploration-and-territory',
      '/guides/sea-of-sword-vs-langrisser-mobile',
    ],
    body: [
      {
        heading: 'A new saga built around memory and choice',
        paragraphs: [
          'Langrisser: Sea of Sword follows the Nameless, a figure trying to recover shattered memories. The journey begins beside Eta, a mysterious white-haired girl, and moves through a continent shaped by mist, political pressure and competing powers.',
          'The story is positioned as an ensemble drama of forgetting, choice and resistance. It steps away from a simple light-versus-dark expedition and emphasizes the cost of survival inside factional conflict. Player choices are described as capable of changing fate, but the exact branch structure and number of endings remain unannounced.',
        ],
      },
      {
        heading: 'The empire is a pressure system, not just scenery',
        paragraphs: [
          'The pair enters the cold order of a vast empire and becomes entangled in ambition between factions. That framing connects the personal memory mystery to a wider struggle over nations and territory. The political setting also gives exploration and base development a narrative reason to matter.',
          'Do not assume every faction from an earlier Langrisser title returns unchanged. Sea of Sword is a new story on an unknown continent. Familiar heroes can appear in renewed forms while the current conflict develops its own roles and alliances.',
        ],
      },
      {
        heading: 'Returning heroes do not make this a remake',
        paragraphs: [
          'Leon, Elwin and Sherry are confirmed to return, along with other familiar friends that have not been named. Their presence links the new game to the series, but the developer is deliberately withholding their new appearances and narrative functions.',
          'That makes older biographies useful for franchise context but unreliable for current plot claims. This site will not paste prior allegiances, endings or skill identities into Sea of Sword until the new game confirms them.',
        ],
      },
      {
        heading: 'Exploration supports the narrative',
        paragraphs: [
          'Towns, forests, caves and royal cities are places to explore rather than static backdrops between stages. NPC conversations, material gathering, hidden events and regional change give the story room to appear outside a mission briefing.',
          'Territory growth from a camp to a fortress may also reflect the Nameless gaining political weight. That is an inference about how the systems could connect, not a confirmed plot path. The confirmed fact is that management and exploration sit beside tactical battles in the same progression structure.',
        ],
      },
      {
        heading: 'Music and art reinforce the new tone',
        paragraphs: [
          'Composer Yasunori Nishiki is creating the original score. The hand-drawn visual direction favors a restrained fantasy look, with character art and environments designed to feel tangible rather than chasing realism.',
          'Those choices help separate the game’s identity from a direct mobile sequel. The safest story preparation is to understand the new protagonist, Eta and the empire. A full chronology should wait until official profiles or the released client provide primary evidence.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the Nameless?',
        answer:
          'The Nameless is the player protagonist, searching for lost memories while navigating factional conflict.',
      },
      {
        question: 'Who is Eta?',
        answer:
          'Eta is the mysterious white-haired girl who accompanies the Nameless. Her full role is not yet revealed.',
      },
      {
        question: 'Is Sea of Sword a remake?',
        answer:
          'No. It is presented as a new Langrisser story, even though familiar heroes return in renewed forms.',
      },
    ],
  },
  {
    slug: 'free-to-play-and-gacha-status',
    path: '/guides/free-to-play-and-gacha-status',
    title: 'Is Langrisser: Sea of Sword Free to Play or Gacha?',
    seoTitle: 'Is Langrisser: Sea of Sword Free to Play or Gacha?',
    seoDescription:
      'Steam confirms Langrisser: Sea of Sword is free to play. Gacha, summons, rerolls and monetization details are not officially confirmed yet.',
    summary:
      'Steam confirms Free To Play. Official sources checked so far do not explain summons, gacha, rerolls, stamina or launch monetization.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/langrisserseaofsword/icon.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Official Steam classification answers pricing; community questions reveal gacha intent but do not confirm the mechanic.',
    videoSearchQueries: [
      'is Langrisser Sea of Sword gacha',
      'Langrisser Sea of Sword free to play',
    ],
    tags: ['Free To Play', 'Gacha status', 'Monetization'],
    relatedRoutes: [
      '/pre-registration',
      '/characters',
      '/guides/sea-of-sword-vs-langrisser-mobile',
      '/release-date',
    ],
    body: [
      {
        heading: 'Free to play is confirmed',
        paragraphs: [
          'Steam classifies Langrisser: Sea of Sword as Free To Play. That is the strongest available answer to whether the PC client will require an upfront purchase. The store does not show a price package and the genre list includes Free To Play.',
          'Free to play describes access price, not every monetization system inside the game. It does not by itself confirm hero summons, paid currency, a battle pass, cosmetic sales or energy. Those details need separate official evidence.',
        ],
      },
      {
        heading: 'Gacha is not officially confirmed',
        paragraphs: [
          'The developer’s history, mobile release plan and returning-hero focus have caused players to ask whether Sea of Sword is a gacha game. That is a reasonable question, but the official site and Steam description checked on July 23, 2026 do not name a summon, banner, pull, pity or rarity system.',
          'Community expectation is not a substitute for a product description. The accurate status is therefore: free-to-play confirmed, gacha mechanics unconfirmed. If the publisher later documents recruitment or summoning, this page can explain the actual rules and costs.',
        ],
      },
      {
        heading: 'Why there is no reroll or tier list guide',
        paragraphs: [
          'A reroll guide requires a repeatable account-opening loop, a summon source, launch rewards, target characters and a clear stopping rule. None of those pieces is public. Writing a route now would send players through invented steps.',
          'A tier list has the same problem. The full roster, rarity, skill numbers, pair interactions, troop affinities, investment costs and launch content are unknown. Trailer visibility is not a power ranking. Both keywords remain on watch rather than becoming empty pages.',
        ],
      },
      {
        heading: 'What would count as confirmation',
        paragraphs: [
          'Look for an official system page, developer video, store description or live client that names recruitment, currency, probabilities and guarantees. A real monetization guide should state price regions, pity behavior, duplicate handling and whether progression is possible without purchases.',
          'Until then, do not buy accounts, pre-order currency or trust “free pulls” codes. Pre-registration currently provides notification access, not a verified reward inventory. Keep the official store identity and account security ahead of launch speculation.',
        ],
      },
      {
        heading: 'A practical launch-day check',
        paragraphs: [
          'When the client opens, check the tutorial, shop and recruitment menus before spending. Separate permanent account progression from limited banners and confirm whether the same account works across Steam and mobile. Record exact labels rather than translating assumptions from Langrisser Mobile.',
          'Stop before payment if regional pricing, account binding or refund policy is unclear. A free-to-play tactical RPG can be enjoyable under many models, but useful advice depends on the real costs and limits—not on guessing the label early.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Langrisser: Sea of Sword free to play?',
        answer: 'Yes. Steam currently classifies the game as Free To Play.',
      },
      {
        question: 'Is it a gacha game?',
        answer:
          'Official sources have not yet described a gacha or summon system, so the mechanic remains unconfirmed.',
      },
      {
        question: 'Can I reroll at launch?',
        answer:
          'No reroll process can be verified because account creation, summons and launch rewards are not public.',
      },
    ],
  },
  {
    slug: 'sea-of-sword-vs-langrisser-mobile',
    path: '/guides/sea-of-sword-vs-langrisser-mobile',
    title: 'Langrisser: Sea of Sword vs Langrisser Mobile',
    seoTitle: 'Langrisser: Sea of Sword vs Langrisser Mobile',
    seoDescription:
      'Compare Sea of Sword with Langrisser Mobile: new story, dual-hero squads, free exploration, territory growth and separate service status.',
    summary:
      'Sea of Sword is a separate new title with a new story, dual-hero squads and free exploration. It is not proof that Langrisser Mobile is ending.',
    category: 'Comparison',
    difficulty: 'Beginner',
    coverImageUrl: '/langrisserseaofsword/screenshots/5.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Official new-game facts plus community questions. No unsupported end-of-service prediction.',
    videoSearchQueries: [
      'Langrisser Sea of Sword vs Langrisser Mobile',
      'Langrisser Sea of Sword new game',
    ],
    video: gameplayVideo,
    tags: ['Langrisser Mobile', 'Comparison', 'New game'],
    relatedRoutes: [
      '/gameplay',
      '/guides/dual-hero-system',
      '/guides/story-and-setting',
      '/guides/free-to-play-and-gacha-status',
    ],
    body: [
      {
        heading: 'Sea of Sword is a separate new title',
        paragraphs: [
          'Langrisser: Sea of Sword has its own Steam App, official global site, social accounts, story setup and release campaign. It is not an update package or renamed server for Langrisser Mobile. The official positioning calls it the latest evolution of the series and a new saga.',
          'Black Jack Studio’s connection to Langrisser Mobile explains shared experience with hero-and-troop combat, but it does not make the two products interchangeable. Use Sea of Sword sources for Sea of Sword facts and Mobile sources for the existing game.',
        ],
      },
      {
        heading: 'The world structure changes first',
        paragraphs: [
          'Langrisser Mobile is commonly experienced through staged progression and established mobile systems. Sea of Sword explicitly moves beyond a rigid chain of isolated stages into free exploration across towns, forests, cities and caves.',
          'NPC interaction, materials, puzzles, hidden events and regional change fill the space between battles. Territory development adds a camp-to-fortress management loop. These are not minor interface changes; they reshape how story, travel and progression are organized.',
        ],
      },
      {
        heading: 'Combat expands to dual-hero squads',
        paragraphs: [
          'Sea of Sword preserves heroes leading troops but places two heroes and two troop types inside one squad. Main and secondary positions can switch during battle, changing skill forms and tactical roles. Some pairings activate Hero Unity Skills.',
          'That structure makes pair synergy and lead-state flexibility core decisions. Older Mobile tier placements cannot be copied directly because the new system may change roles, troops, values and team constraints even when a familiar character returns.',
        ],
      },
      {
        heading: 'A new story uses familiar faces',
        paragraphs: [
          'The Nameless and Eta lead a new conflict on an unknown, mist-shrouded continent. The themes center on memory, choice, resistance and factional power. Leon, Elwin and Sherry return in renewed forms, but their exact roles are deliberately unrevealed.',
          'Returning heroes connect the franchise without turning the story into a recap. A player can follow Sea of Sword as a new chapter while long-time fans recognize parts of the wider cast.',
        ],
      },
      {
        heading: 'Sea of Sword does not confirm Mobile shutdown',
        paragraphs: [
          'Community discussion naturally asks whether the new game will replace Langrisser Mobile. No official source checked for this guide announces a Mobile end-of-service plan. A new title from the same studio is not enough evidence to predict closure.',
          'Keep service decisions separate. Follow each game’s own official announcements, avoid moving money or abandoning an account based on rumor, and wait for explicit operational notices. This page will not publish a shutdown claim without a dated primary source.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Sea of Sword a Langrisser Mobile update?',
        answer:
          'No. It is a separate new game with its own Steam App, official site and story.',
      },
      {
        question: 'What is the biggest gameplay difference?',
        answer:
          'Sea of Sword adds dual-hero squads and free exploration with territory growth and destructible battlefields.',
      },
      {
        question: 'Is Langrisser Mobile shutting down?',
        answer:
          'No official shutdown announcement was verified. The new game alone does not prove an end-of-service plan.',
      },
    ],
  },
];

export const featuredGuides = [
  'release-date',
  'pre-registration',
  'gameplay',
  'dual-hero-system',
  'characters',
  'free-to-play-and-gacha-status',
]
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
