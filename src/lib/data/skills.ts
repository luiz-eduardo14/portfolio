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
	defineSkillCategory({ name: 'soft-skills', slug: 'soft' }),
	defineSkillCategory({ name: 'message-brokers', slug: 'msg-broker' })
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
		slug: 'nestjs',
		color: 'red',
		description: 'nestjs.description',
		logo: Assets.NestJs,
		name: 'Nestjs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring-boot',
		color: 'green',
		description: 'spring-boot.description',
		logo: Assets.SpringBoot,
		name: 'Spring boot',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring-security',
		color: 'green',
		description: 'spring-security.description',
		logo: Assets.SpringSecurity,
		name: 'Spring security',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring-batch',
		color: 'green',
		description: 'spring-batch.description',
		logo: Assets.SpringBatch,
		name: 'Spring batch',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: 'tailwind.description',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'framework'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: 'react-native.description',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'framework'
	}),
	defineSkill({
		slug: 'jetpack-compose',
		color: 'green',
		description: 'jetpack-compose.description',
		logo: Assets.JetpackCompose,
		name: 'Jetpack Compose',
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
		slug: 'puppeteer',
		color: 'purple',
		description: 'puppeteer.description',
		logo: Assets.Puppeteer,
		name: 'Puppeteer',
		category: 'library'
	}),
	defineSkill({
		slug: 'hibernate',
		color: 'gray',
		description: 'hibernate.description',
		logo: Assets.Hibernate,
		name: 'Hibernate',
		category: 'library'
	}),
	defineSkill({
		slug: 'mybatis',
		color: 'red',
		description: 'mybatis.description',
		logo: Assets.MyBatis,
		name: 'MyBatis',
		category: 'library'
	}),
	defineSkill({
		slug: 'tokio',
		color: 'white',
		description: 'tokio.description',
		logo: Assets.Tokio,
		name: 'Tokio',
		category: 'library'
	}),
	defineSkill({
		slug: 'slqx',
		color: 'blue',
		description: 'slqx.description',
		logo: Assets.Unknown,
		name: 'Sqlx',
		category: 'library'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'docker.description',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'grafana',
		color: 'orange',
		description: 'grafana.description',
		logo: Assets.Grafana,
		name: 'Grafana',
		category: 'devops'
	}),
	defineSkill({
		slug: 'rabbitmq',
		color: 'orange',
		description: 'rabbitmq.description',
		logo: Assets.RabbitMQ,
		name: 'RabbitMQ',
		category: 'msg-broker'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'white',
		description: 'kafka.description',
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'msg-broker'
	}),
	defineSkill({
		slug: 'junit',
		color: 'green',
		description: 'junit.description',
		logo: Assets.Junit,
		name: 'Junit',
		category: 'test'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		description: 'jest.description',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'K6',
		color: 'purple',
		description: 'k6.description',
		logo: Assets.K6,
		name: 'K6',
		category: 'test'
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
