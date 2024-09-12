<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { locale, t } from '$lib/translations';
	import type { Project } from '$lib/types';
	import { computeExactDuration, getMonthName } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;

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

	$: period = localeTimeExpression(computeExactDuration(project.period.from, project.period.to));
	$: from = {
		month: getMonthName(project.period.from.getMonth()),
		year: project.period.from.getFullYear()
	};
	$: to = project.period.to
		? {
				month: getMonthName(project.period.to.getMonth()),
				year: project.period.to.getFullYear()
		  }
		: null;
</script>

<Card color={project.color} href={`${base}/${$locale}/projects/${project.slug}`}>
	<CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<p>{project.type}</p>
		</div>
		<CardDivider />
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-time" classes="text-1.25em" />
			<p>{period}</p>
		</div>
		<CardDivider />
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{project.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{$t(`time.${from.month}`)} {from.year}</Chip>
		{#if from.month !== to?.month && from.year !== to?.year}
			<Chip>{$t(`time.${to?.month ?? 'now'}`)}</Chip>
		{/if}
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each project.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
				href={tech.description ? `${base}/${$locale}/skills/${tech.slug}` : undefined}
			/>
		{/each}
	</div>
</Card>
