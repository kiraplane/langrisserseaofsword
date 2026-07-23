# Langrisser: Sea of Sword Wiki 网站开发需求

## 项目标识

- 游戏名称：Langrisser: Sea of Sword
- 网站名称：Langrisser: Sea of Sword Wiki
- 平台：Steam
- 规范域名：https://www.langrisserseaofsword.wiki
- 本地项目目录名：`langrisserseaofsword`
- GitHub 仓库名：`langrisserseaofsword`
- Cloudflare Worker 项目名：`langrisserseaofsword`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/4808030/Langrisser_Sea_of_Sword/
- Steam App ID：`4808030`
- 开发者：Black Jack Studio
- 发行商：HongKong GameTree Limited
- Steam 链接的官方站点：https://ll.game-tree.com/
- 当前发行状态：尚未公布发布日期；Steam 标记为即将推出（Coming Soon）
- 当前商业模式：Steam 标记为免费游玩（Free To Play）
- 当前 Steam 平台：Windows
- 官方定位：Langrisser 系列的下一代奇幻战术 RPG。现阶段官方站点以全球预注册为核心，完整玩法、角色、系统与上线信息仍需在开发阶段按最新官方资料复核。

身份边界：本项目只描述 Steam App `4808030` 的 **Langrisser: Sea of Sword**。官方英文标题使用单数 `Sword`。不得把 Langrisser Mobile、名为 Langrisser SEA 的旧移动端产品、历代 Langrisser 作品、无关的 Steam 游戏 Sword of the Sea，或源模板 Gurei 的开发者、发行商、商店链接、玩法、成就和素材当作本作事实。

## 核心种子关键词

- `langrisser sea of sword`
- `langrisser sea of sword wiki`
- `langrisser sea of sword guide`
- `langrisser sea of sword steam`
- `langrisser sea of sword release date`
- `langrisser sea of sword pre registration`
- `langrisser sea of sword gameplay`
- `langrisser sea of sword characters`
- `langrisser sea of sword heroes`
- `langrisser sea of sword system requirements`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再将候选词标记为 `keep`、`ignore`、`watch` 或 `localize_later`，并据此决定实际页面、实体命名和路由。游戏仍处于预注册阶段，不预设 `codes`、`tier list`、`reroll`、角色数据库或可游玩攻略页面。

## 目标文件与命名空间

- 计划 PRD：`docs/langrisser-sea-of-sword-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/langrisserseaofsword/`
- 目标 App Router 路由组：`src/app/[locale]/(langrisserseaofsword)/`
- 目标组件命名空间：`src/components/langrisserseaofsword/`
- 目标静态资源命名空间：`public/langrisserseaofsword/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 与官方站点、可靠新闻/竞品和官方或高质量 YouTube 视频，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 Langrisser: Sea of Sword 的英文信息与攻略站，按游戏当前预注册阶段和资料厚度决定首发页面数量，不为凑数制造空页面。
3. 根据已核验需求决定是否建设 release date、pre-registration、Steam、gameplay、story、characters、heroes、combat systems、platforms、system requirements、news 或其他页面；在游戏实际开放前不得伪造 walkthrough、build、tier list、codes 或角色数值。
4. 首页、分类枢纽、详情页、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用本作专属内容与元数据，并对发布日期、平台、商业模式和预注册状态等易变信息标注核验时间。
5. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA；未请求广告，因此确认后移除一切继承的 Adsterra 配置与文件。
6. 验证完成后创建并推送 GitHub 仓库 `langrisserseaofsword`，部署同名 Cloudflare Worker，绑定 `langrisserseaofsword.wiki` 与 `www.langrisserseaofsword.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建和 GA4。
7. 创建并验证 GSC Domain Property `sc-domain:langrisserseaofsword.wiki`，通过 Cloudflare apex DNS TXT 验证，提交完整 sitemap，并同步 GA-GTM 注册信息。
8. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为模板栏目。
