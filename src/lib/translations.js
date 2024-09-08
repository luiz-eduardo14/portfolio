import i18n from 'sveltekit-i18n';

const supportedLanguagesSsr = [{
  lang: 'pt',
}, {
  lang: 'en',
}];

const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  fallbackLocale: defaultLocale,
  loaders: [
    {
      locale: 'en',
      key: 'home',
      loader: async () => (
        await import('./locale/en/home.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'home',
      loader: async () => (
        await import('./locale/pt/home.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'nav',
      loader: async () => (
        await import('./locale/en/nav.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'nav',
      loader: async () => (
        await import('./locale/pt/nav.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'categories',
      loader: async () => (
        await import('./locale/en/categories.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'categories',
      loader: async () => (
        await import('./locale/pt/categories.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'general',
      loader: async () => (
        await import('./locale/en/general.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'general',
      loader: async () => (
        await import('./locale/pt/general.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'time',
      loader: async () => (
        await import('./locale/en/time.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'time',
      loader: async () => (
        await import('./locale/pt/time.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'skills',
      loader: async () => (
        await import('./locale/pt/skills/index')
      ).default,
    },
    {
      locale: 'en',
      key: 'skills',
      loader: async () => (
        await import('./locale/en/skills/index')
      ).default,
    },
    {
      locale: 'pt',
      key: 'education',
      loader: async () => (
        await import('./locale/pt/education/index.js')
      ).default,
    },
    {
      locale: 'en',
      key: 'education',
      loader: async () => (
        await import('./locale/en/education/index.js')
      ).default,
    },
    {
      locale: 'en',
      key: 'experience',
      loader: async () => (
        await import('./locale/en/experience/index')
      ).default,
    },
    {
      locale: 'pt',
      key: 'experience',
      loader: async () => (
        await import('./locale/pt/experience/index')
      ).default,
    },
  ],
});

const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
} = new i18n(config);

export {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
  defaultLocale,
  supportedLanguagesSsr
};
