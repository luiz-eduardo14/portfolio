<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { t } from '$lib/translations';
	import type { Experience } from '$lib/types';
	import { computeExactDuration, getMonthName } from '$lib/utils/helpers';
	import { locale } from '$lib/translations';
	import Card from '../Card/Card.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import UIcon from '../Icon/UIcon.svelte';

	export let experience: Experience;
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
	const exactDuration = localeTimeExpression(computeExactDuration(experience.period.from, experience.period.to));

	const from = `${$t(`time.${getMonthName(
		experience.period.from.getMonth()
	)}`)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${$t(`time.${getMonthName(
			experience.period.to.getMonth()
		)}`)} ${experience.period.to.getFullYear()}`
		: $t('time.Present');

	const period = `${from} - ${to}`;

	$: info = [
		{ label: experience.company, icon: 'i-carbon-building' },
		{ label: experience.location, icon: 'i-carbon-location' },
		{ label: $t(`experience.contractType.${experience.contract}`), icon: 'i-carbon-hourglass' }
	] as const;
</script>

<Card
	margin="0px 0px 20px 0px"
	tiltDegree={2}
	href={`${base}/${$locale}/experience/${experience.slug}`}
	color={experience.color}
>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<CardLogo src={getAssetURL(experience.logo)} alt={experience.company} size={55} />
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<div class="col">
				<h3
					class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
				>
					<CardTitle title={$t(`experience.${experience.slug}.name`)} />
				</h3>
				<div class="row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300">
					{#each info as item}
						<Chip>
							<UIcon icon={item.icon} />
							<span class="m-l-1">{item.label}</span>
						</Chip>
					{/each}
				</div>
			</div>
			<div class="text-[var(--text)] text-[0.9em]">
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-calendar" classes="text-1.25em" />
					{period}
				</div>
				<CardDivider />
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-time" classes="text-1.25em" />
					{exactDuration}
				</div>
				<CardDivider />
			</div>
			<div class="experience-description text-[0.9em]">{$t(`experience.${experience.slug}.shortDescription`)}</div>
			<div class="flex flex-row flex-wrap mt-5">
				{#each experience.skills as skill}
					<ChipIcon
						logo={getAssetURL(skill.logo)}
						name={skill.name}
						href={skill.description ? `${base}/${$locale}/skills/${skill.slug}` : undefined}
					/>
				{/each}
			</div>
		</div>
	</div>
</Card>
