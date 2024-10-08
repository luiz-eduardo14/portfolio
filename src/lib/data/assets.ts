import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.svg'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.svg'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	Senac: a('senac.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	RadarSaude: a('radarsaude.jpeg'),
	SpringBatch: a('spring-batch.png'),
	SpringBoot: a('spring-boot.png'),
	SpringData: a('spring-data.png'),
	SpringSecurity: a('spring-security.png'),
	TailwindCss: a('tailwind.svg'),
	ReactNative: a('react-native.svg'),
	Puppeteer: a('puppeteer-light.svg', 'puppeteer-dark.svg'),
	NestJs: a('nestjs.svg'),
	MyBatis: a('mybatis.svg'),
	Kafka: a('kafka-light.svg', 'kafka-dark.svg'),
	Jwt: a('jwt.svg'),
	Junit: a('junit.svg'),
	Jest: a('jest-light.svg', 'jest-dark.svg'),
	Hibernate: a('hibernate.svg'),
	Grafana: a('grafana.svg'),
	K6: a('k6.svg'),
	JetpackCompose: a('jetpack-compose.png'),
	Tokio: a('tokio-light.svg', 'tokio-dark.svg'),
	ReactRouter: a('react-router-light.svg', 'react-router-dark.svg'),
	ReactNavigation: a('react-navigation.png'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
