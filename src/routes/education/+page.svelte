<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { items } from '@data/education';
	import type { Education } from '$lib/types';
	import { computeExactDuration } from '$lib/utils';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import { t } from '$lib/translations';

	let search = '';

	let result: Array<Education> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.degree.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.location.toLowerCase().includes(s) ||
				it.name.toLowerCase().includes(s) ||
				it.organization.toLowerCase().includes(s) ||
				it.subjects.some((it) => it.toLowerCase().includes(s))
			);
		});
	};
	function localeTimeExpression(duration: string): string {
			return duration
					.replace('years', $t('time.years'))
					.replace('year', $t('time.year'))
					.replace('months', $t('time.months'))
					.replace('month', $t('time.month'))
					.replace('weeks', $t('time.weeks'))
					.replace('week', $t('time.week'))
					.replace('days', $t('time.days'))
					.replace('day', $t('time.day'))
					.replace('and', $t('general.and'));
	};
	export let title;
	title = $t('nav.education');
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">{$t('general.not-found-search')}</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each result as education, index (education.slug)}
				<div
					class={`flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[10px]`}
				>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" />
					</div>
					<div class="col flex-1 items-stretch">
						<Card>
							<div class="flex-1 col gap-2 items-stretch">
								<img
									src={getAssetURL(education.logo)}
									alt={education.organization}
									height="50"
									width="50"
									class="mb-5"
								/>
								<div class="text-[1.3em]">{education.degree}</div>
								<div>{education.organization}</div>
								<div class="col text-[0.9em]">
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-location" />
										{$t(`education.location.${education.location}`)}
									</div>
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-time" />
										{localeTimeExpression(computeExactDuration(education.period.from, education.period.to))}
									</div>
									<CardDivider />
								</div>
								<div class="row flex-wrap gap-1">
									{#each education.subjects as subject}
										<Chip>{subject}</Chip>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>
