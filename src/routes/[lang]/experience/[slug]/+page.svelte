<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { locale, t } from '$lib/translations';
	import {
		computeExactDuration,
		getMonthName
	} from '$lib/utils/helpers';
	import { title } from '@data/experience';

	import type { Experience } from '$lib/types';

	import Banner from '$lib/components/Banner/Banner.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';

	export let data: { experience?: Experience };

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

	// const months = getTimeDiff(experience.period.from, experience.period.to);

	$: computedTitle = data.experience ? `${$t(`experience.${data.experience.slug}.title`)} - ${$t('nav.experience')}` : title;
	export let timeDiffFormatted;
	if (data.experience) {
		const exactDuration = localeTimeExpression(computeExactDuration(data.experience.period.from, data.experience.period.to));
		const from = `${$t(`time.${getMonthName(
			data.experience.period.from.getMonth()
		)}`)} ${data.experience.period.from.getFullYear()}`;
		const to = data.experience.period.to
			? `${$t(`time.${getMonthName(
				data.experience.period?.to?.getMonth() ?? 0
			)}`)} ${data.experience.period.to?.getFullYear() ?? 0}`
			: $t('time.Present');

		const period = `${from} - ${to}`;
		timeDiffFormatted = period;
	}

</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.experience === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load experience data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.experience.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{$t(`experience.${data.experience.slug}.name`)}</MainTitle>
					</div>
					<p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center">
						{data.experience.company} · {data.experience.location} · {data.experience.type}
					</p>
					<p class="font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center">
						{timeDiffFormatted}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
						{#each data.experience.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.experience.skills as item}
							<Chip
								classes="inline-flex flex-row items-center justify-center"
								href={`${base}/${$locale}/skills/${item.slug}`}
							>
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<span class="text-[0.9em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					<Markdown
						content={$t(`experience.${data.experience.slug}.description`)}
					/>
					<!-- {#if data.experience.description}
						<Markdown
							content={data.experience.description ?? 'This place is yet to be filled...'}
						/>
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description...</p>
						</div>
					{/if} -->
				</div>
			</div>
		</div>
	{/if}
</div>
