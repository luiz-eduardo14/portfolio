<script lang="ts">
	import { filterItemsByQuery, type ItemOrSkill } from '$lib/utils/helpers';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { locale } from '$lib/translations';
	import * as experiences from '@data/experience';
	import * as projects from '@data/projects';
	import * as skills from '@data/skills';
	import { t } from '$lib/translations';

	import type { Icon, Item, Skill } from '$lib/types';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	type SearchResultItem = {
		icon: Icon;
		name: string;
		data: Item | Skill;
		to: string;
	};

	let query = '';
	let mounted = false;
	let result: Array<SearchResultItem> = [];

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		query = searchParams.get('q') ?? '';
		mounted = true;
	});

	$: {
		result = [];

		// filter
		result.push(
			...filterItemsByQuery(projects.items, query).map<SearchResultItem>((data) => ({
				data,
				icon: 'i-carbon-cube',
				name: data.name,
				to: `projects/${data.slug}`
			}))
		);

		result.push(
			...filterItemsByQuery(
				skills.items as unknown as Array<ItemOrSkill>,
				query
			).map<SearchResultItem>((data) => ({
				data,
				icon: 'i-carbon-software-resource-cluster',
				name: data.name,
				to: `skills/${data.slug}`
			}))
		);

		result.push(
			...filterItemsByQuery(experiences.items, query).map<SearchResultItem>((data) => ({
				data,
				icon: 'i-carbon-development',
				name: `${data.name} @ ${data.company}`,
				to: `experience/${data.slug}`
			}))
		);
	}
	export let title;
	title = $t('general.Search');
</script>

<SearchPage {title} on:search={(e) => (query = e.detail.search)}>
	<div class="flex flex-col items-stretch gap-10 p-2" />
	{#if !query}
		<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
			<UIcon icon="i-carbon-search-locate-mirror" classes="text-2em" />
			<span> {$t('general.not-found-search')}</span>
		</div>
	{:else}
		<div>
			{#if result.length === 0}
				<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
					<UIcon icon="i-carbon-cube" classes="text-2em" />
					<span> Oops ! nothing to show ! </span>
				</div>
			{:else}
				<div class="flex flex-row flex-wrap gap-1">
					{#each result as item}
						<Chip href={`${base}/${$locale}/${item.to}`} classes="flex flex-row items-center gap-2">
							<UIcon icon={item.icon} />
							<span>{item.name}</span>
						</Chip>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</SearchPage>
