import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import type { Skill, SkillCategory } from '../types';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'programming-languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'libraries', slug: 'library' }),
	defineSkillCategory({ name: 'languages', slug: 'lang' }),
	defineSkillCategory({ name: 'databases', slug: 'db' }),
	defineSkillCategory({ name: 'orms', slug: 'orm' }),
	defineSkillCategory({ name: 'security', slug: 'security' }),
	defineSkillCategory({ name: 'devops', slug: 'devops' }),
	defineSkillCategory({ name: 'testing', slug: 'test' }),
	defineSkillCategory({ name: 'dev-tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'markup-and-style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'design', slug: 'design' }),
	defineSkillCategory({ name: 'soft-skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'java.description',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'purple',
		description: 'kotlin.description',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'javascript.description',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'typescript.description',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rust',
		color: 'orange',
		description: 'rust.description',
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'html.description',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'framework'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'react.description',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'css.description',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'html.description',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
