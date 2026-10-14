# Marcvspt Web

Sitio personal y blog técnico de **Marcvs Pt**, dedicado a ciberseguridad, redes, Linux, análisis forense e infraestructura. Construido con Astro y publicado como sitio estático.

**Sitio:** [www.marcvspt.tech](https://www.marcvspt.tech) · **Licencia:** [GPL-3.0-only](LICENSE)

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| Astro 7 | Páginas, componentes, colecciones de contenido y generación estática |
| TypeScript | Tipos de datos y lógica del sitio |
| Tailwind CSS 4 | Estilos, utilidades y animaciones compartidas |
| `@tailwindcss/typography` | Presentación del contenido Markdown con `prose` y `prose-invert` |
| `@tailwindcss/vite` | Integración de Tailwind con Vite |
| `@astrojs/rss` | Feed de artículos publicados |
| `@astrojs/sitemap` | Sitemap generado durante el build |
| `@astrojs/netlify` | Adaptador para el destino de despliegue configurado: Netlify |

Las versiones concretas están en [package.json](package.json). La configuración de Astro usa `output: 'static'`.

## Desarrollo local

### Requisitos

- Node.js **24 o superior**.
- `pnpm` disponible en el entorno.

Ejecuta los comandos desde la raíz del repositorio:

```sh
pnpm install
pnpm run dev
```

El servidor de desarrollo usa normalmente `http://localhost:4321`; consulta la dirección que muestre la terminal.

### Comandos

| Comando | Propósito |
| --- | --- |
| `pnpm install` | Instalar las dependencias del proyecto |
| `pnpm run dev` | Iniciar el servidor de desarrollo |
| `pnpm run build` | Generar la salida de producción en `dist/` |
| `pnpm run preview` | Revisar localmente el último build; requiere generarlo primero |
| `pnpm run astro --help` | Consultar los comandos de la CLI de Astro |

**Trabajo con agentes:** el propietario ejecuta todos los comandos de pnpm y las instalaciones. Los agentes indican qué ejecutar y para qué, sin usar otras herramientas para eludir esa regla. Las instrucciones completas están en [AGENTS.md](AGENTS.md).

## Estructura del proyecto

```text
.
├── public/                  # Archivos públicos servidos sin transformación
│   ├── favicon.svg
│   └── img/                 # Imágenes del sitio y de los artículos
├── src/
│   ├── assets/              # SVG e iconos importados por los componentes
│   ├── components/          # Componentes reutilizables
│   │   ├── BlogPosts.astro  # Recientes y destacados de la portada
│   │   └── PostCard.astro   # Tarjetas de recientes, destacados y catálogo
│   ├── data/blog/           # Artículos en Markdown
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/               # Rutas del sitio
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── robots.txt.ts
│   │   └── rss.xml.ts
│   ├── lib/
│   │   ├── site.ts          # Marca y configuración regional
│   │   ├── navigation.ts    # Páginas y orden de navegación
│   │   ├── links.ts         # Redes, recursos externos y licencia
│   │   ├── profile.ts       # Habilidades y experiencia
│   │   ├── texts.ts         # Textos generales, fuera del Markdown
│   │   ├── types/           # Contratos de sitio, perfil y blog
│   │   ├── blog/
│   │   │   ├── content.ts   # Artículos publicados y datos de tarjetas
│   │   │   └── presentation.ts # URL y formato de fechas y lectura
│   │   └── ui/blog-search.ts # Búsqueda, filtros, orden y vista del catálogo
│   ├── styles/global.css    # Tailwind, Typography y estilos compartidos
│   └── content.config.ts   # Colección y esquema del blog
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── pnpm-workspace.yaml
├── AGENTS.md
└── README.md
```

El árbol resume los archivos principales. `dist/`, `.astro/` y `node_modules/` son directorios generados y no deben editarse manualmente.

## Textos del sitio

Los textos ajenos al Markdown se centralizan en `src/lib/texts.ts`, dentro de `TEXTS_GENERAL`, agrupados por sección. Incluye textos de interfaz, accesibilidad, metadatos, datos personales y mensajes del navegador. Para cambiarlos o añadirlos, edita ese catálogo e impórtalo mediante `@/lib/texts.ts`. Los textos con parámetros usan funciones, como `TEXTS_GENERAL.post.readMoreLabel(title)` y `TEXTS_GENERAL.post.readTime(minutes)`.

Las URL e identificadores viven en `src/lib/navigation.ts` y `src/lib/links.ts`; las habilidades y experiencia, en `src/lib/profile.ts`. Los enlaces usan el contrato `id`, `label`, `href`; los metadatos de página usan `title`, `description`. Los iconos sociales se seleccionan mediante un `id` estable, independiente de su etiqueta. Los porcentajes son números (`percentage`), y el símbolo `%` se añade al renderizar. La experiencia usa `occupation` y `href`.

`SITE_LOCALE` en `src/lib/site.ts` reúne el idioma del HTML y RSS y la configuración regional de fechas y búsqueda. Las fechas editoriales se muestran en UTC para conservar su día. Todavía no hay selección de idioma ni rutas por idioma. El contenido y frontmatter de los artículos siguen en Markdown y quedan fuera del catálogo. Los tipos del blog derivan de la colección, según el patrón de [colecciones de Astro](https://docs.astro.build/en/guides/content-collections/).

## Crear y publicar un artículo

1. Crea un archivo `.md` en `src/data/blog/`, por ejemplo `configurar-firewall-linux.md`.
2. Usa un nombre descriptivo en minúsculas, con guiones y sin conectores innecesarios. Para un archivo en la raíz de la colección, ese nombre corresponde al slug: `/blog/configurar-firewall-linux/`.
3. Añade el frontmatter y escribe el contenido debajo:

```markdown
---
title: 'Configurar un firewall en Linux'
description: 'Reglas básicas para controlar el tráfico de entrada y salida.'
publishedAt: '2026-10-01'
readTimeMinutes: 5
category: 'Linux'
tags: ['Linux', 'Redes', 'Seguridad']
image: '/img/blog/linux/configurar-firewall-linux/portada.webp'
featured: false
draft: true
---

## Introducción

Contenido del artículo en Markdown.
```

### Frontmatter

El esquema se define en [src/content.config.ts](src/content.config.ts).

| Campo | Tipo | Obligatorio | Uso o valor predeterminado |
| --- | --- | --- | --- |
| `title` | Texto | Sí | Título del artículo |
| `description` | Texto | Sí | Descripción breve para tarjetas, metadatos y RSS |
| `publishedAt` | Fecha | Sí | Fecha de publicación; usa `YYYY-MM-DD` entre comillas |
| `updatedAt` | Fecha | No | Fecha de actualización mostrada en el artículo |
| `readTimeMinutes` | Entero positivo | Sí | Tiempo de lectura manual en minutos, por ejemplo `5` |
| `category` | Texto | Sí | Categoría usada en tarjetas y filtros |
| `tags` | Lista de textos | No | Etiquetas; por defecto `[]` |
| `image` | Texto | Sí | Ruta pública de la imagen de portada |
| `featured` | Booleano | No | Destacar en la portada; por defecto `false` |
| `draft` | Booleano | No | Excluir de la publicación; por defecto `false` |

Guarda la portada del ejemplo en `public/img/blog/linux/configurar-firewall-linux/portada.webp`. En el frontmatter, la URL empieza en `/img/`, sin el prefijo `public/`.

### Borradores y publicación

- Usa `draft: true` mientras preparas el artículo. Los borradores no aparecen en la portada, el catálogo, las rutas de artículos, el RSS ni el sitemap; tampoco tienen una página de previsualización en desarrollo.
- Cambia a `draft: false` cuando esté listo. Si omites el campo, el artículo se considera publicado.
- Los archivos cuyo nombre empieza por `_` quedan fuera de la colección por el patrón del loader.
- Usa `featured: true` para incluirlo entre los destacados. La portada muestra hasta tres artículos recientes y hasta tres destacados, ordenados por fecha de publicación.
- Para una actualización, puedes añadir `updatedAt: '2026-10-02'`. El orden del blog y la fecha de publicación del RSS siguen usando `publishedAt`.

Publicar o actualizar contenido requiere generar y desplegar de nuevo el sitio.

## Configuración y convenciones

### Datos y dominio

- Edita `src/lib/texts.ts` para copy, `src/lib/site.ts` para configuración regional, `src/lib/navigation.ts` para rutas y orden del menú, `src/lib/links.ts` para enlaces, y `src/lib/profile.ts` para porcentajes y enlaces de experiencia.
- Cambia el dominio únicamente en la propiedad `site` de `astro.config.mjs`. Las canónicas usan `Astro.site`, y los endpoints de RSS y robots obtienen el dominio del contexto de Astro. Mantén esta propiedad configurada para generar también el sitemap; `SITE_DATA` contiene el nombre y la descripción, sin duplicar el dominio.
- `src/lib/blog/content.ts` centraliza el filtro de borradores, el orden por fecha de publicación y los datos de tarjetas. `src/lib/blog/presentation.ts` construye URL y formatea fechas y tiempos de lectura; las fechas visibles se muestran en español de México usando UTC. El catálogo ordena y calcula promedios directamente desde `readTimeMinutes`, sin extraer números de textos.

### Imports, estilos y navegación

Usa los alias definidos en `tsconfig.json`: `@/pages/`, `@/components/`, `@/layouts/`, `@/lib/`, `@/assets/` y `@/styles/`. Incluye la extensión real (`.ts`, `.astro`, `.svg`, `.css`) e importa el archivo concreto, sin barrels ni reexportaciones de conveniencia. Solo existen los patrones configurados; `@/` no es un alias genérico para cualquier archivo. `astro.config.mjs` usa rutas relativas compatibles con Node.

Los estilos globales se definen en `src/styles/global.css` mediante Tailwind CSS 4 (`@import`, `@theme` y `@plugin`). El contenido de los artículos utiliza Tailwind Typography; el recorte de las tarjetas usa `line-clamp-3`.

El layout incluye `ClientRouter`. El menú y el buscador (`src/lib/ui/blog-search.ts`) se inicializan con `astro:page-load` y limpian sus eventos antes de reemplazar la página. El buscador conserva categoría, búsqueda, orden y vista durante la navegación dentro de la sesión de la página.

## RSS, sitemap y SEO

| Ruta | Origen | Comportamiento |
| --- | --- | --- |
| `/rss.xml` | `src/pages/rss.xml.ts` | Feed en español de México con artículos publicados, ordenados por fecha |
| `/sitemap-index.xml` | Integración `@astrojs/sitemap` | Índice de los archivos de sitemap generados durante el build |
| `/robots.txt` | `src/pages/robots.txt.ts` | Permite el rastreo y anuncia la URL del índice del sitemap |

El índice referencia archivos como `/sitemap-0.xml`. Las rutas de los artículos se generan con `getStaticPaths()` y excluyen borradores, por lo que estos tampoco se incluyen en el sitemap.

`BaseLayout.astro` añade el enlace al sitemap y genera por defecto una URL canónica para cada página, incluidos los artículos, a partir del dominio y la ruta, sin parámetros de búsqueda. También permite indicar una canónica explícita mediante la prop `canonical`.

Para modificar estas salidas, cambia los archivos de origen o la configuración y vuelve a generar el sitio. No edites los XML ni `robots.txt` dentro de `dist/`.

## Build y despliegue

El destino configurado es **Netlify**, con `@astrojs/netlify` y salida estática. Para generar y revisar la versión de producción:

```sh
pnpm run build
pnpm run preview
```

En la configuración del proyecto en Netlify, usa:

| Ajuste | Valor |
| --- | --- |
| Comando de build | `pnpm run build` |
| Directorio de publicación | `dist` |
| Node.js | Compatible con `engines.node` de `package.json` |

El preview sirve para revisar el build local; el despliegue se realiza desde el flujo configurado en Netlify.

### Validación manual

Después del build, comprueba en el preview:

- Inicio, página personal, catálogo y artículos publicados.
- Menú móvil al navegar entre páginas, cierre con Escape y estado del botón.
- Búsqueda combinada con categorías, orden y alternancia entre lista y cuadrícula; regreso al catálogo tras abrir un artículo y estado sin resultados.
- Fechas, etiquetas, destacados y exclusión de borradores.
- `/rss.xml`, `/robots.txt`, `/sitemap-index.xml` y los XML referenciados por el índice.
- Metadatos y URL canónicas en el HTML de las páginas y artículos.

Estas comprobaciones las ejecuta el propietario. Generar el build no sustituye la revisión de las interacciones en el navegador.

## Colaboración y mantenimiento

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para preparar contribuciones al sitio o al blog y seguir la convención de mensajes de commit.

Consulta [AGENTS.md](AGENTS.md) antes de trabajar con un agente. Mantén este README y las instrucciones de agentes coherentes con el código. Cuando cambien de forma importante la arquitectura, tecnologías, alias, despliegue o flujo de trabajo, actualiza también `AGENTS.md` en la misma tarea.

## Licencia

Este proyecto se distribuye bajo [GNU General Public License v3.0](LICENSE), con identificador `GPL-3.0-only`.
