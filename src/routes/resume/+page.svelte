<script>
	import { data } from '@data/resume';
	import { t } from '$lib/translations';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	export let title;
	title = $t('nav.resume');
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
