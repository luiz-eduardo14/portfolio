import { defaultLocale, locales, setLocale, setRoute } from '$lib/translations';

const baseProd = '/portfolio';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const { url, request } = event;
  let { pathname } = url;

  if (pathname.startsWith(baseProd)) pathname = pathname.slice(baseProd.length);

  // Get defined locales
  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  // Try to get locale from `pathname`.
  let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

  // If route locale is not supported
  if (!locale) {
    // Get user preferred locale
    locale = request.headers.get('accept-language')?.split(',').shift()?.toLowerCase().split('-').shift() || defaultLocale;

    pathname = pathname.replaceAll('/undefined', '');

    // Set default locale if user preferred locale does not match
    if (!supportedLocales.includes(locale)) locale = defaultLocale;
    // 301 redirect
    return new Response(undefined, { headers: { 'location': `/${locale}${pathname}` }, status: 301 });
  }

  // Add html `lang` attribute
  return resolve({ ...event, locals: { lang: locale } }, {
    transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
  });
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event }) => {
  const { locals } = event;
  const { lang } = locals;

  await setLocale(lang);
  await setRoute('error');

  return locals;
};