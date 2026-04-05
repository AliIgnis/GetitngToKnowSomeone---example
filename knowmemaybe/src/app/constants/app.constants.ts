// ─── Owner Identity ─────────────────────────────────────────
export const OWNER_ALIAS = 'Noor Kaneki';
export const OWNER_EMAIL = 'Mahnoornavid@outlook.com';

// ─── Site Config ────────────────────────────────────────────
export const SITE_NAME = 'KnowMeMaybe';
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'de'] as const;
export const LANGUAGE_STORAGE_KEY = 'knowmemaybe-lang';

// ─── Layout ─────────────────────────────────────────────────
export const NAVBAR_HEIGHT_PX = 72;
export const MAX_CONTENT_WIDTH_PX = 1000;

// ─── Getting to Know Steps ──────────────────────────────────
export const TOTAL_GETTING_TO_KNOW_STEPS = 6;

// ─── Fun Facts ──────────────────────────────────────────────
export const TOTAL_FUN_FACTS = 6;

// ─── Date Ideas ─────────────────────────────────────────────
export const TOTAL_DATE_IDEAS = 6;

// ─── Rating ─────────────────────────────────────────────────
export const MAX_HEART_RATING = 5;

// ─── Questions Section ──────────────────────────────────────
export const QUESTION_DEPTH_LEVELS = ['light', 'medium', 'deep'] as const;
export const QUESTIONS_PER_DEPTH_LEVEL = 4;

// ─── Theme ──────────────────────────────────────────────────
export const THEME_STORAGE_KEY = 'knowmemaybe-theme';
export const THEME_LIGHT = 'light' as const;
export const THEME_DARK = 'dark' as const;

// ─── Email ──────────────────────────────────────────────────
export const EMAIL_SUBJECT_EN = 'Hey — I got your link 💌';
export const EMAIL_SUBJECT_DE = 'Hey — ich hab deinen Link bekommen 💌';

// ─── Vibe Tag Colors ────────────────────────────────────────
export const VIBE_COLORS: Record<string, string> = {
  Chill: '#E8A0BF',
  Creative: '#B39DDB',
  Intimate: '#C06E94',
  Fun: '#F0C27A',
  Thoughtful: '#81B3D2',
  Romantic: '#E85A8A',
};

// ─── Question Depth Level Colors ────────────────────────────
export const DEPTH_LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  light: { bg: 'var(--km-primary-light)', text: 'var(--km-text)' },
  medium: { bg: 'var(--km-primary)', text: 'var(--km-text)' },
  deep: { bg: 'var(--km-accent)', text: '#FFFFFF' },
};

// ─── About Me Trait Icons ───────────────────────────────────
export const TRAIT_ICONS: string[] = ['🎭', '🧠', '🌪️', '🏃‍♀️', '📖', '😎'];

// ─── About Me Total Traits ──────────────────────────────────
export const TOTAL_TRAITS = 6;
