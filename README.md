# Angular Snippets

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/olierxleben"><img src="https://avatars.githubusercontent.com/u/1403225?v=4?s=100" width="100px;" alt="Oliver Erxleben"/><br /><sub><b>Oliver Erxleben</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=olierxleben" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/9kubczas4"><img src="https://avatars.githubusercontent.com/u/43759569?v=4?s=100" width="100px;" alt="Paweł Kubiak"/><br /><sub><b>Paweł Kubiak</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=9kubczas4" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/santoshyadavdev"><img src="https://avatars.githubusercontent.com/u/11923975?v=4?s=100" width="100px;" alt="Santosh Yadav"/><br /><sub><b>Santosh Yadav</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=SantoshYadavDev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Nicoss54"><img src="https://avatars.githubusercontent.com/u/24563545?v=4?s=100" width="100px;" alt="Nicolas Frizzarin"/><br /><sub><b>Nicolas Frizzarin</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=Nicoss54" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://trellis.org"><img src="https://avatars.githubusercontent.com/u/9469090?v=4?s=100" width="100px;" alt="Jay Bell"/><br /><sub><b>Jay Bell</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=yharaskrik" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wasylb"><img src="https://avatars.githubusercontent.com/u/43531815?v=4?s=100" width="100px;" alt="Bartosz Wasilew"/><br /><sub><b>Bartosz Wasilew</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=wasylb" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://goetzrobin.github.io"><img src="https://avatars.githubusercontent.com/u/35136007?v=4?s=100" width="100px;" alt="Robin Goetz"/><br /><sub><b>Robin Goetz</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=goetzrobin" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://nartc.me"><img src="https://avatars.githubusercontent.com/u/25516557?v=4?s=100" width="100px;" alt="Chau Tran"/><br /><sub><b>Chau Tran</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=nartc" title="Code">💻</a> <a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=nartc" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.hien.page"><img src="https://avatars.githubusercontent.com/u/8808535?v=4?s=100" width="100px;" alt="Pham Huu Hien"/><br /><sub><b>Pham Huu Hien</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=phhien203" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nelsonguti.dev/"><img src="https://avatars.githubusercontent.com/u/62297014?v=4?s=100" width="100px;" alt="Nelson Gutierrez"/><br /><sub><b>Nelson Gutierrez</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=nelsongutidev" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lucioaimar"><img src="https://avatars.githubusercontent.com/u/64326713?v=4?s=100" width="100px;" alt="Lucio Aimar"/><br /><sub><b>Lucio Aimar</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=lucioaimar" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/deepakrudrapaul"><img src="https://avatars.githubusercontent.com/u/25549935?v=4?s=100" width="100px;" alt="Deepak Rudra Paul"/><br /><sub><b>Deepak Rudra Paul</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=deepakrudrapaul" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rubenperegrina"><img src="https://avatars.githubusercontent.com/u/23550574?v=4?s=100" width="100px;" alt="Rubén Peregrina"/><br /><sub><b>Rubén Peregrina</b></sub></a><br /><a href="https://github.com/santoshyadavdev/angular-snippets/commits?author=rubenperegrina" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License ⚖️

This repository has [MIT License](https://github.com/santoshyadavdev/angular-snipptes/blob/main/license).
