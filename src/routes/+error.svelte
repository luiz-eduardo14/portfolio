<script>
  import { t, locale } from '$lib/translations';
  import { page } from '$app/stores';
	import { base } from '$app/paths';

  export let status = $page.status;

  // if (status === 404) {
  //   location.href = `${base}/${locale}/404`;
  // }
</script>

<div class="content">
  <h1>{$t('error.shit.happens')} ({status})</h1>
  <p>{JSON.stringify($page.error)}
  <br>
  <br>
  {$locale} – {$t(`lang.${$locale}`)}
</div>