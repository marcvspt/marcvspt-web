# Marcvspt Web

Sitio personal y blog técnico construido con [Astro](https://astro.build/) para compartir contenido sobre ciberseguridad, redes, forense e infraestructura.

- **URL:** [https://www.marcvspt.tech](https://www.marcvspt.tech)
- **Framework:** Astro 7 (`7.3.5` en `package.json`)
- **Estilos:** Tailwind CSS 4
- **Adaptador:** Netlify

## Desplegar para desarrollo

Los comandos de pnpm los ejecuta manualmente el propietario del proyecto. Los agentes deben indicar el comando necesario y su propósito, sin ejecutarlo ni instalar dependencias por otro medio. Consulta las instrucciones de colaboración en [AGENTS.md](AGENTS.md).

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
├── assets/
│   ├── coffee.svg
│   ├── control.svg
│   ├── email.svg
│   ├── github.svg
│   ├── hackthebox.svg
│   ├── link.svg
│   ├── linkedin.svg
│   └── x.svg
├── components/
│   ├── BlogPosts.astro
│   ├── CardExperience.astro
│   ├── CardWithIcon.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── PostCard.astro
│   └── TimeLineCard.astro
├── data/
│   └── blog/
│       ├── analisis-vmem.md
│       ├── arreglar-error-404-torbrowser-launcher.md
│       ├── arreglar-error-xlrd.biffh.XLRDError-Excel-xlsx-file-not-supported.md
│       ├── certificado-ssl-autofirmado-apache2-nginx.md
│       ├── desplegar-proyecto-astro-dokploy.md
│       ├── instalar-librewolf-parrot-derivados-debian.md
│       ├── instalar-qtile-pip3-derivados-debian.md
│       ├── middleware-sqli.md
│       ├── writeup-maquina-pc-hackthebox.md
│       └── writeup-maquina-sandworm-hackthebox.md
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogPostLayout.astro
├── pages/
│   ├── about.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── index.astro
│   ├── robots.txt.ts
│   └── rss.xml.ts
├── scripts/
│   ├── blog-search.ts
│   ├── blog.ts
│   ├── data.ts
│   ├── site.js
│   └── types.ts
├── styles/
|    └── global.css
└── content.config.ts
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
- `updated` es una fecha opcional (por ejemplo, `updated: '2026-10-01'`) que muestra cuándo se actualizó el artículo.
- `draft` no publicará el *post*
- `image` debe apuntar a una imagen dentro de `public/img/blog/`.
- La colección carga contenido con patrón `**/[^_]*.{md,mdx}`, por lo que archivos que inicien con `_` no se publican.

## Publicación

El proyecto está configurado para salida estática (`output: static`) y usa el adaptador de Netlify.

Para generar la salida de producción y revisarla localmente, ejecuta manualmente:

```sh
pnpm run build
pnpm run preview
```

### Sitemap y robots.txt

La integración `@astrojs/sitemap` ya está declarada como dependencia y habilitada en `astro.config.mjs` con `integrations: [sitemap()]`. La opción `site` toma `SITE_URL` de `src/scripts/site.js`, cuyo valor es `https://www.marcvspt.tech/`.

- El sitemap se genera durante el build estático. El índice se publica en `/sitemap-index.xml` y referencia los archivos de sitemap generados, como `/sitemap-0.xml`.
- Las rutas de los artículos publicados se generan en `src/pages/blog/[...slug].astro` mediante `getStaticPaths()`. Los artículos con `draft: true` quedan fuera de esas rutas y, por tanto, del sitemap.
- `src/pages/robots.txt.ts` genera `/robots.txt`, permite el rastreo y anuncia `https://www.marcvspt.tech/sitemap-index.xml` usando la URL `site` de Astro.
- `src/layouts/BaseLayout.astro` incluye `<link rel="sitemap" href="/sitemap-index.xml" />` en el encabezado HTML.

Después de ejecutar `pnpm run build`, comprueba los XML del sitemap y `robots.txt` en `dist/`. Con `pnpm run preview`, revisa `/sitemap-index.xml`, los XML que referencia y `/robots.txt`. No edites los archivos generados: modifica la configuración o las rutas de origen y vuelve a generar el sitio.

Si cambia el dominio, actualiza únicamente `SITE_URL` en `src/scripts/site.js`. La configuración de Astro y los datos del sitio usan esa fuente para mantener coherentes el sitemap, el RSS y las URL canónicas. `BaseLayout.astro` genera por defecto la URL canónica de cada página, incluidos los artículos, sin parámetros de búsqueda.

### Organización del blog

- `src/scripts/blog.ts` centraliza los artículos publicados, su orden por fecha, las URL de artículos, las fechas en español de México (UTC) y la conversión del tiempo de lectura a minutos.
- `src/components/PostCard.astro` comparte las tarjetas de recientes, destacados y catálogo, conservando las imágenes existentes.
- `src/scripts/blog-search.ts` controla búsqueda, categoría, orden y vista. Conserva el estado durante la navegación con Astro y limpia los eventos antes de reemplazar la página.
- Las animaciones compartidas se definen en `src/styles/global.css`; el recorte de texto usa la utilidad `line-clamp-3` de Tailwind.

Para validar cambios, ejecuta `pnpm run build` y `pnpm run preview`. Comprueba el menú móvil al navegar entre páginas; combina búsqueda, categorías y orden; alterna lista y cuadrícula y vuelve al blog después de abrir un artículo. Revisa también las URL canónicas, el RSS, el sitemap y el estado sin resultados. Estas comprobaciones las realiza manualmente el propietario.

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
