# Marcvspt Web

Sitio personal y blog técnico construido con [Astro](https://astro.build/) para compartir contenido sobre ciberseguridad, redes, forense e infraestructura.

- **URL:** [https://www.marcvspt.tech](https://www.marcvspt.tech)
- **Framework:** Astro 6
- **Estilos:** Tailwind CSS 4
- **Adaptador:** Netlify

## Desplegar para desarrollo

1. Instala dependencias:

```sh
pnpm install
```

2. Inicia el servidor de desarrollo:

```sh
pnpm run dev #http://localhost:4321
```

## Estructura del proyecto

```text
src/
├── content.config.ts
├── components/
│   ├── BlogPosts.astro
│   ├── CardExperience.astro
│   ├── CardWithIcon.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   └── TimeLineCard.astro
├── data/
│   └── blog/
│       └── [todos-los-posts].md
├── icons/
│   ├── coffee.svg
│   ├── control.svg
│   ├── email.svg
│   ├── github.svg
│   ├── hackthebox.svg
│   ├── link.svg
│   ├── linkedin.svg
│   └── x.svg
├── layouts/
│   ├── BlogPostLayout.astro
│   └── BaseLayout.astro
├── pages/
│   ├── about.astro
│   ├── index.astro
│   ├── rss.xml.ts
│   └── blog/
│       ├── [...slug].astro
│       └── index.astro
├── scripts/
│   └── data.ts
└── styles/
    └── global.css
```

## Crear un post

1. Crea un archivo `.md` dentro de `src/data/blog/`.
2. Usa un nombre de archivo descriptivo: será el slug de la URL (no uses conectores como *de*, *con*, *y*, etc).
3. Agrega el frontmatter requerido por la colección de contenido:

```yaml
---
title: 'Titulo relativamente corto'
excerpt: 'Descripcion concisa'
date: '2000-01-01'
readTime: '1 min'
category: 'Categoria'
tags: [Crear, Un, Post, Nuevo, Con, Etiquetas]
image: '/img/blog/categoria/mi-post/imagen.webp'
featured: false
draft: false
---
```

Notas:

- `featured` y `draft` aceptan solo `true` o `false`.
- `draft` no publicará el *post*
- `image` debe apuntar a una imagen dentro de `public/img/blog/`.
- La colección carga contenido con patrón `**/[^_]*.{md,mdx}`, por lo que archivos que inicien con `_` no se publican.

## Publicación

El proyecto está configurado para salida estática (`output: static`) y usa el adaptador de Netlify.

## Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler Icons](https://tabler.io/icons)
- [Flowbite](https://flowbite.com/docs/getting-started/introduction/)
- [Heroicons](https://heroicons.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub Copilot](https://github.com/copilot/)

## Licencia

Este proyecto se distribuye bajo licencia [GNU General Public License v3.0](LICENSE).
