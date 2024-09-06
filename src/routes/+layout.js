import { setLocale, setRoute } from '$lib/translations';

export const prerender = true;

/** @type { import('@sveltejs/kit').Load } */
export const load = async ({ url, params }) => {
  const { pathname } = url;
  const { lang } = params;

  const route = pathname.replace(new RegExp(`^/${lang}`), '');

  await setLocale(lang);
  await setRoute(route);

  return { route, lang };
};