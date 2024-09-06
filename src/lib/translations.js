import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  fallbackLocale: 'en-us',
  loaders: [
    {
      locale: 'en-us',
      key: 'home',
      loader: async () => (
        await import('./locale/en-us/home.json')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'home',
      loader: async () => (
        await import('./locale/pt-br/home.json')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'nav',
      loader: async () => (
        await import('./locale/en-us/nav.json')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'nav',
      loader: async () => (
        await import('./locale/pt-br/nav.json')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'categories',
      loader: async () => (
        await import('./locale/en-us/categories.json')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'categories',
      loader: async () => (
        await import('./locale/pt-br/categories.json')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'general',
      loader: async () => (
        await import('./locale/en-us/general.json')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'general',
      loader: async () => (
        await import('./locale/pt-br/general.json')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'time',
      loader: async () => (
        await import('./locale/en-us/time.json')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'time',
      loader: async () => (
        await import('./locale/pt-br/time.json')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'skills',
      loader: async () => (
        await import('./locale/pt-br/skills/index')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'skills',
      loader: async () => (
        await import('./locale/en-us/skills/index')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'education',
      loader: async () => (
        await import('./locale/pt-br/education/index.js')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'education',
      loader: async () => (
        await import('./locale/en-us/education/index.js')
      ).default,
    },
    {
      locale: 'en-us',
      key: 'experience',
      loader: async () => (
        await import('./locale/en-us/experience/index')
      ).default,
    },
  ],
});

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);
