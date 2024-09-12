<script lang="ts">
	import { base } from '$app/paths';
	import { groupByCategory } from '@data/skills';
	import { locale } from '$lib/translations';
	import { getAssetURL } from '$lib/data/assets';
	import { t } from '$lib/translations';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	let result = groupByCategory('');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		result = groupByCategory(query.trim().toLowerCase());
	};
	export let title;
	title = $t('nav.skills');
</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">{$t('general.not-found-search')}</p>
		</div>
	{:else}
		<div class="col mt-5 gap-7">
			{#each result as group (group.category.slug)}
				<div class="col gap-5 mb-7">
					<div class="row items-center gap-5">
						<div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
						<p class="text-[var(--main-text)]">{$t(`categories.${group.category.name}`)}</p>
						<div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 ">
						{#each group.items as skill (skill.slug)}
							<Card
								classes={[...(skill.description ?['cursor-pointer decoration-none'] : ['cursor-not-allowed decoration-none'])]}
								tiltDegree={1}
								href={skill.description ?`${base}/${$locale}/skills/${skill.slug}` : undefined}
								bgImg={getAssetURL(skill.logo)}
								color={skill.color}
							>
								<p class="text-[var(--tertiary-text)]">{skill.name}</p>
							</Card>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
