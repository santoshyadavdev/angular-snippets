import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Basic Blog Template',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  site: import.meta.env.SITE,
  items: import.meta.glob('./posts/**.mdx'),
});