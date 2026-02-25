# Repositorio de mi web

## Ejecutar en desarrollo

```sh
pnpm run dev
```

## Crear un post

1. Para crear un post debemos crear un nuevo archivo `.md` en la carpeta [`src/content/blog`](src/content/blog/) donde el nombre será el *slug*.

2. Incluir los siguientes datos en el *frontmatter* al inicio del post

```yaml
id: 1
title: 'Título relativamente corto'
excerpt: 'Descripción concisa'
date: '2000-01-01'
readTime: '1 min'
category: 'Blog'
tags: [Crear, Un, Post, Nuevo]
image: '/path/or/url/img.webp'
featured: true
```

El atributo `featured` es para hacerlo destacado y `id` debe seguir el orden de acuerdo al ultimo post

## Creditos

- Componentes utilizados:
  - [Tabler Icons](https://tabler.io/icons)
  - [Flowbite tailwind](https://flowbite.com/docs/getting-started/introduction/)
  - [Svgl](https://svgl.app/)
  - [Heroicons](https://heroicons.com/)

- Otros:
  - Portfolio desarrollado por [midudev](https://x.com/midudev). Puedes ver su versión en [porfolio.dev](https://porfolio.dev)
  - [v0](https://v0.app)
  - [Claude](https://claude.ai)

## Licencia

Este proyecto está licenciado bajo los términos de la **[GNU General Public License v3.0](./LICENSE)**.
