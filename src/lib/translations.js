import i18n from 'sveltekit-i18n';

const supportedLanguagesSsr = [{
  lang: 'pt-br',
}, {
  lang: 'pt-br',
}];

const defaultLocale = 'pt-br';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  fallbackLocale: defaultLocale,
  loaders: [
    {
      locale: 'pt-br',
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
      locale: 'pt-br',
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
      locale: 'pt-br',
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
      locale: 'pt-br',
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
      locale: 'pt-br',
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
      locale: 'pt-br',
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
      locale: 'pt-br',
      key: 'education',
      loader: async () => (
        await import('./locale/en-us/education/index.js')
      ).default,
    },
    {
      locale: 'pt-br',
      key: 'experience',
      loader: async () => (
        await import('./locale/en-us/experience/index')
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
