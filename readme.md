# Angular Snippets

A website to find and share code snippets for Angular.

## How to add snippets

Follow the below steps to add a snippet to the website.

- Go to pages -> snippets folder.
- add a new mdx file with the name of the snippet.
- add the content in the format below.

```mdx
---
title: Tile of the snippet
description: description of the snippet
pubDate: (Dare) Feb 20, 2022
contributedBy: "@TwitterHandle"
---

import BlogImage from "@components/BlogImage.astro";
import SourceMap from "@images/source-map.jpg";

Content of the snippet

We accept mdx syntax here.

You can include code snippets like this.

"sourceMap": {
"hidden": true,
}

and images like this.

<BlogImage src={ImagePath} alt="hidden source map for production" />
```

## Tech Stack 🛠️

- Static Site Generator: [Astro](https://astro.build/)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- Markdown: [MDX](https://mdxjs.com/)
- Package Manager: [pnpm](https://pnpm.io/)

## Developer Notes 📝

Here are some commands that you can run to get started with the project. You can also check all the commands in the [`package.json`](https://github.com/lancerossdev/basicblog/blob/main/package.json)

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Build the project
pnpm build

# Serve the built project
pnpm preview
```

## License ⚖️

This repository has [MIT License](https://github.com/santoshyadavdev/angular-snipptes/blob/main/license).
