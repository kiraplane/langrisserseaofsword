# Langrisser: Sea of Sword Wiki — PRD and Implementation Plan

Checked: 2026-07-23

## 1. Product decision

Build an English-first guide and status hub for **Langrisser: Sea of Sword**, the newly announced free-to-play tactical RPG listed as Steam App `4808030`.

The game is still in global pre-registration and has no announced release date. Search supply is therefore dominated by the official site, Steam, announcement news, two official videos, and early community questions. The launch site should be a source-backed early-game hub, not a pretend mature wiki.

Launch recommendation:

- 14 English core URLs before legal pages.
- Exact-title homepage and guide hub.
- Status pages for release date, pre-registration, platforms, PC requirements, and official download channels.
- System explainers for dual heroes, exploration, territory management, destructible battlefields, story, and the current free-to-play/gacha evidence boundary.
- No codes, tier list, reroll, builds, walkthrough, or character database until the game and its systems are publicly playable and verifiable.
- English only at launch. Japanese, Korean, and Traditional Chinese are later opportunities after the English core proves demand.

## 2. Approved identity

| Field | Value |
| --- | --- |
| Game | Langrisser: Sea of Sword |
| Official English spelling | Singular `Sword` |
| Site | Langrisser: Sea of Sword Wiki |
| Canonical URL | `https://www.langrisserseaofsword.wiki` |
| Platform focus | Steam, with official iOS and Android status coverage |
| Steam App | `4808030` |
| Developer | Black Jack Studio |
| Publisher | HongKong GameTree Limited |
| Official site | `https://ll.game-tree.com/` |
| Official English YouTube | `https://www.youtube.com/@LangrisserSeaofswordEN` |
| Official Discord | `https://discord.gg/Wukgzve6kb` |
| Official X | `https://x.com/LLSeaofswordEN` |
| Official Facebook | `https://www.facebook.com/LangrisserSeaofSword` |
| Official Reddit | `https://www.reddit.com/r/LangrisserSeaofSword/` |
| Current release status | Coming Soon; date not announced |
| Current Steam model | Free To Play |
| Current Steam OS | Windows |

Entity boundary:

- Do not merge this game with Langrisser Mobile or the older mobile product branded Langrisser SEA.
- Do not confuse it with the unrelated game **Sword of the Sea**.
- The plural phrase “Sea of Swords” appears in some media slugs and headlines, but page titles and facts must use the official singular title.
- Leon, Elwin, Sherry, the Nameless protagonist, and Eta are the only named/identified character facts used at launch. Do not infer a full roster, classes, rarity, stats, or release roles.
- Steam confirms Free To Play, but official sources checked on 2026-07-23 do not describe a summon/gacha system. The site must label “is it gacha?” as unconfirmed rather than converting community assumptions into fact.

## 3. Source ledger

Primary:

1. Steam App `4808030`: identity, developer/publisher, genres, single-player status, Windows requirements, screenshots, gameplay systems, returning characters, Free To Play state, and release status.
2. Official global site: pre-registration flow, official links, English title, official branding, and the two official YouTube videos.
3. Official YouTube channel:
   - `bcJ7phaqj4c` — first gameplay trailer.
   - `qfzDmEOcaLo` — concept teaser.

Secondary cross-checks:

1. Gematsu announcement and gameplay-detail pages.
2. Pocket Gamer announcement and dual-hero coverage.
3. Inven Global system explainer.
4. Noisy Pixel gameplay report.
5. Reddit threads only for current player questions such as “is it gacha?”, “where is pre-registration?”, and “does this replace Langrisser Mobile?”; never as confirmation of unreleased systems.

## 4. Keyword matrix

| Keyword | Intent | Route | Priority | Status | Evidence / decision |
| --- | --- | --- | --- | --- | --- |
| langrisser sea of sword | Find the exact game | `/` | P0 | keep | Official entity term |
| langrisser sea of sword wiki | Find structured information | `/` | P0 | keep | No exact dedicated wiki found |
| langrisser sea of sword guide | Browse current help | `/guides` | P0 | keep | Thin early guide supply |
| langrisser sea of sword release date | Check launch timing | `/release-date` | P0 | keep | Steam says To be announced |
| langrisser sea of sword pre registration | Register safely | `/pre-registration` | P0 | keep | Official site currently centers this action |
| langrisser sea of sword steam | Find the PC listing | `/platforms` | P0 | keep | Official Steam App `4808030` |
| langrisser sea of sword platforms | Check PC/mobile support | `/platforms` | P0 | keep | Steam, iOS, and Android confirmed |
| langrisser sea of sword system requirements | Check PC fit | `/system-requirements` | P0 | keep | Full minimum/recommended Steam tables exist |
| langrisser sea of sword gameplay | Understand the game | `/gameplay` | P0 | keep | Official gameplay trailer and Steam detail |
| langrisser sea of sword dual heroes | Understand squad building | `/guides/dual-hero-system` | P0 | keep | Headline new combat system |
| langrisser sea of sword hero unity skills | Understand pair bonuses | `/guides/dual-hero-system` | P1 | keep | Official Steam terminology |
| langrisser sea of sword exploration | Understand world movement | `/guides/exploration-and-territory` | P1 | keep | Official free-exploration system |
| langrisser sea of sword territory management | Understand progression | `/guides/exploration-and-territory` | P1 | keep | Official camp-to-fortress description |
| langrisser sea of sword destructible terrain | Understand battle maps | `/guides/exploration-and-territory` | P1 | keep | Official walls, bridges, height examples |
| langrisser sea of sword characters | Find confirmed cast | `/characters` | P0 | keep | Named cast is small but official |
| langrisser sea of sword Leon Elwin Sherry | Check returning heroes | `/characters` | P1 | keep | Steam confirms all three |
| langrisser sea of sword story | Understand the setting | `/guides/story-and-setting` | P1 | keep | Nameless, Eta, empire, choice and resistance confirmed |
| langrisser sea of sword free to play | Check pricing model | `/guides/free-to-play-and-gacha-status` | P0 | keep | Steam lists Free To Play |
| is langrisser sea of sword gacha | Check monetization | `/guides/free-to-play-and-gacha-status` | P1 | keep | Visible community question; official answer remains incomplete |
| langrisser sea of sword download | Find a safe client | `/download` | P0 | keep | No playable global client yet; official channels only |
| langrisser sea of sword vs langrisser mobile | Distinguish the products | `/guides/sea-of-sword-vs-langrisser-mobile` | P1 | keep | Strong entity-confusion and community concern |
| langrisser sea of sword pre registration rewards | Check milestones/rewards | `/pre-registration` | P2 | watch | No public reward table verified |
| langrisser sea of sword beta | Find a test | `/release-date` | P2 | watch | No global beta schedule verified |
| langrisser sea of sword steam deck | Check handheld support | `/platforms` | P2 | watch | No Deck rating/status verified |
| langrisser sea of sword console | Check console release | `/platforms` | P2 | watch | No console platform announced |
| langrisser sea of sword codes | Redeem rewards | none | P3 | watch | No released game or verified code system |
| langrisser sea of sword tier list | Rank heroes | none | P3 | watch | No playable roster, stats, or meta |
| langrisser sea of sword reroll | Optimize first summons | none | P3 | watch | Summon and reroll systems not confirmed |
| langrisser sea of swords | Resolve plural spelling | `/` | P2 | keep | Common media variation; canonicalize to official singular |
| langrisser sea | Find the old mobile product | none | P3 | ignore | Different entity |
| sword of the sea | Find another Steam game | none | P3 | ignore | Unrelated entity |
| ラングリッサー 剣の海 攻略 | Japanese help | future locale | P2 | localize_later | Official Japanese title exists |
| 랑그릿사 검의 바다 공략 | Korean help | future locale | P2 | localize_later | Official Korean title exists |
| 夢戰 劍之海 攻略 | Traditional Chinese help | future locale | P2 | localize_later | Official Traditional Chinese title exists |

Google autocomplete was almost empty beyond the head term on 2026-07-23, which is consistent with a game announced only days earlier. The page plan therefore relies on official-system nouns, visible result clusters, and real community questions instead of pretending mature search volume exists.

## 5. Competitor and SERP benchmark

### Dedicated wiki supply

No exact dedicated English Wiki or guide site was found. Existing Langrisser Fandom pages describe earlier games and must not be treated as Sea of Sword data.

### Current result leaders

| Source | What it does well | Gap this site should fill |
| --- | --- | --- |
| Official site | Strong branding, pre-registration, official social links | Single promotional page; almost no searchable system answers |
| Steam | Rich official mechanics, requirements, screenshots, platform facts | Long store description; limited question-first navigation |
| Gematsu | Clean entity page, news chronology, trailer collection | News-first rather than evergreen decision paths |
| Pocket Gamer | Two-article topic hub and concise mobile framing | Uses pluralized slug and lacks a complete fact hub |
| Inven Global | Detailed system explanation and Mobile comparison context | Article is long and not organized around exact English searches |
| Noisy Pixel | Clear free-to-play and combat summary | No durable route network or source-status handling |

Pages to match:

- release status
- pre-registration
- gameplay systems
- character confirmations
- platforms and requirements
- official videos and links

Ways to improve:

- exact query-to-route alignment
- a compact homepage information hub
- explicit “confirmed / not announced” boundaries
- clear old-game and plural-title disambiguation
- stronger internal links between release, platform, system, and character decisions
- `WebSite`, `Organization`, `VideoGame`, `VideoObject`, `ItemList`, `Article`, and `BreadcrumbList` schema

Sitemap note: media-site sitemaps cover thousands of unrelated news URLs and are not meaningful route-count benchmarks for this early entity. Page breadth follows the thin-launch rule and the audited same-operator `.wiki` hub pattern rather than copying media archives.

## 6. Launch information architecture

Core English routes:

1. `/`
2. `/guides`
3. `/release-date`
4. `/pre-registration`
5. `/gameplay`
6. `/characters`
7. `/platforms`
8. `/system-requirements`
9. `/download`
10. `/guides/dual-hero-system`
11. `/guides/exploration-and-territory`
12. `/guides/story-and-setting`
13. `/guides/free-to-play-and-gacha-status`
14. `/guides/sea-of-sword-vs-langrisser-mobile`

Legal/support routes:

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

Internal linking:

- Navbar: Guides, Release, Gameplay, Characters, Platforms.
- Homepage hero: Guides, Release status, Pre-register, Steam.
- Homepage “Start here”: release, pre-registration, gameplay, characters.
- Homepage system hub: dual heroes, exploration/territory, story, monetization status, Mobile comparison.
- Every article: parent hub plus 3–4 next decisions with explicit short labels.
- Desktop sticky wiki sidebar with grouped counts and active-group auto-open.
- Mobile expandable wiki menu.

## 7. Content and video strategy

Use the official gameplay video `bcJ7phaqj4c` for:

- homepage trust media
- gameplay overview
- dual-hero system
- exploration and territory
- characters

Use the official concept teaser `qfzDmEOcaLo` for:

- story and setting
- release/pre-registration context where a video is useful

Status/safety pages such as system requirements and download use official site artwork or Steam screenshots instead of unrelated videos.

All articles are original decision-first summaries. Videos support the facts and visuals; article copy must not narrate or spin a transcript.

## 8. Visual direction

Use official art rather than Gurei template branding:

- deep navy/sea-black background
- warm parchment text
- antique gold primary action
- sea-glass teal secondary action
- restrained red accent from the official sword/scarf artwork
- official transparent logo in navigation
- official square character art for icons
- official seascape for the homepage hero
- Steam screenshots for system and character covers

The homepage must keep the hero compact enough to expose the next navigation band on desktop and mobile.

## 9. Technical migration

- Rename source namespaces from `gurei` to `langrisserseaofsword`.
- Replace all Gurei routes, data, components, messages, metadata, email URLs, sitemap entries, Worker settings, assets, and docs.
- Keep only English public content at launch even if locale infrastructure remains in place.
- Preserve Cloudflare `keep_vars: true`.
- Remove the inherited Gurei GA measurement ID before the first target build.
- Do not add Adsterra code or any `ADSTERRA_*` variable.
- Add only the new GA4 measurement ID after the target property is created.
- Validate long related labels in the 272px sidebar.

## 10. Validation and launch

Local:

1. Secret and template-residue scan.
2. `pnpm lint`.
3. `pnpm exec tsc --noEmit`.
4. `pnpm next:build`.
5. `pnpm build`.
6. Browser QA for desktop, mobile, long article links, sitemap, robots, manifest, and executable GA script count.

Launch:

1. Create the `langrisserseaofsword` GitHub repository after secret scan.
2. Push validated `main`.
3. Deploy Cloudflare Worker `langrisserseaofsword`.
4. Bind apex and `www`, with `www` canonical.
5. Attempt Cloudflare GitHub automatic builds.
6. Create/reuse GA4 property and web stream.
7. Create GSC Domain Property `sc-domain:langrisserseaofsword.wiki`, verify by apex TXT, and submit `https://www.langrisserseaofsword.wiki/sitemap.xml`.
8. Register exactly two core links in Shipmanager after implemented route verification.
