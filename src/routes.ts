import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  ReleaseDate = '/release-date',
  PreRegistration = '/pre-registration',
  Gameplay = '/gameplay',
  Characters = '/characters',
  Platforms = '/platforms',
  DualHeroSystem = '/guides/dual-hero-system',
  ExplorationTerritory = '/guides/exploration-and-territory',
  StorySetting = '/guides/story-and-setting',
  FreeToPlayStatus = '/guides/free-to-play-and-gacha-status',
  CompareMobile = '/guides/sea-of-sword-vs-langrisser-mobile',
  SystemRequirements = '/system-requirements',
  Download = '/download',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers: Routes[] = [];
export const protectedRoutes: Routes[] = [];
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
