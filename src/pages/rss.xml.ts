import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Angular Snippets",
    description: "Find and share Angualr Snippets.",
    site: import.meta.env.SITE,
    items: import.meta.glob("./snippets/**.mdx"),
  });
