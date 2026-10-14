# Guía de contribución

Gracias por contribuir a Marcvspt Web, el sitio personal y blog técnico de Marcvs Pt. Esta guía describe cómo preparar tus cambios y escribir mensajes de commit consistentes.

## Preparar una contribución

1. Consulta [README.md](README.md) para configurar el proyecto, [package.json](package.json) para los requisitos de Node.js y scripts disponibles y [AGENTS.md](AGENTS.md) para conocer sus convenciones técnicas.
2. Si colaboras desde un fork, crea una rama para tu cambio y mantén cada contribución enfocada en un objetivo.
3. Implementa el cambio siguiendo la estructura, los componentes y los estilos existentes.
4. Para cambios de código, configuración o contenido publicado, ejecuta `pnpm build`. Si modificas la interfaz o el contenido, revisa también el resultado con `pnpm preview` en móvil y escritorio, incluyendo navegación por teclado. Los cambios únicamente de documentación no requieren una compilación.
5. Abre un pull request que explique qué cambia, por qué y cómo lo verificaste. Incluye capturas si modificas la interfaz y enlaza el issue relacionado cuando exista.

Usa pnpm y conserva `pnpm-lock.yaml` y `pnpm-workspace.yaml` coherentes con las dependencias. No edites salidas generadas en `dist/`, `.astro/`, `.netlify/` ni dependencias en `node_modules/`. No incluyas archivos `.env`, credenciales ni datos personales en commits, capturas o registros.

Cuando trabajes con un agente, el propietario ejecuta las instalaciones y los comandos del proyecto; el agente prepara los cambios e indica los comandos necesarios, según [AGENTS.md](AGENTS.md). Indica siempre qué comprobaste y qué quedó pendiente. Actualmente no hay scripts de test, lint ni check en `package.json`; la compilación no sustituye esas comprobaciones.

## Convenciones del proyecto

- Mantén la generación estática de Astro y la compatibilidad con el adaptador Netlify configurado. El contenido se publica al generar y desplegar de nuevo el sitio.
- Los artículos viven en `src/data/blog/` y su esquema está en `src/content.config.ts`. Usa nombres descriptivos en minúsculas y separados por guiones; el nombre determina la URL del artículo.
- Cada artículo requiere `title`, `description`, `publishedAt`, `readTimeMinutes`, `category` e `image`. Usa fechas `YYYY-MM-DD` entre comillas y minutos como entero positivo (`readTimeMinutes: 5`); `updatedAt`, `tags` y `featured` son opcionales.
- Usa `draft: true` mientras preparas el artículo. Los borradores quedan fuera de portada, catálogo, rutas, RSS y sitemap, y no tienen página de previsualización. Omitir `draft` publica el artículo; los archivos cuyo nombre empieza por `_` no entran en la colección.
- Guarda las imágenes en `public/img/` y usa rutas públicas desde `/img/` en el frontmatter. Revisa portadas, enlaces y bloques de código al editar contenido técnico.
- Reutiliza `src/lib/blog/content.ts` para seleccionar publicados y ordenar fechas; `src/lib/blog/presentation.ts` para construir URL y formatear fechas y lectura. Los tipos derivan de la colección en `src/lib/types/blog.ts`. El dominio se define en `site` de `astro.config.mjs`; evita duplicarlo en los datos del sitio.
- Centraliza textos ajenos al Markdown en `TEXTS_GENERAL` de `src/lib/texts.ts`. Configuración e idioma en `src/lib/site.ts`, navegación en `src/lib/navigation.ts`, enlaces en `src/lib/links.ts` y perfil en `src/lib/profile.ts`. Los enlaces usan `id`, `label`, `href`, y los metadatos `title`, `description`. Usa alias con extensión real explícita, layouts y componentes compartidos, Tailwind CSS 4 y Typography para los artículos.
- Conserva las interacciones durante la navegación con `ClientRouter`: inicializa los listeners de página en `astro:page-load` y límpialos antes del reemplazo.

## Qué comprobar según el cambio

- **Artículos:** revisa frontmatter, portada, Markdown, enlaces, fechas y aparición en portada y catálogo. Comprueba la exclusión de borradores y el comportamiento de destacados.
- **Buscador y catálogo:** combina búsqueda, categorías, orden y vista de lista o cuadrícula; revisa el estado sin resultados y el regreso desde un artículo.
- **Interfaz:** revisa inicio, página personal, catálogo y artículo en móvil y escritorio. Comprueba menú móvil, cierre con Escape y navegación por teclado.
- **RSS y SEO:** tras el build, revisa `/rss.xml`, `/robots.txt`, `/sitemap-index.xml`, sus XML referenciados, metadatos y canónicas. Los borradores deben permanecer excluidos.

Actualiza [README.md](README.md) si cambian la configuración o las instrucciones del blog, y [AGENTS.md](AGENTS.md) si cambian las convenciones, la arquitectura o el flujo de trabajo.

## Mensajes de commit

Usa un prefijo con inicial mayúscula, seguido de dos puntos, un espacio y una descripción breve en español:

```text
Prefijo: descripción del cambio
```

Conservamos `Fix:` para corregir errores y `Feature:` para añadir funcionalidad. Usa los siguientes prefijos según el propósito principal del cambio:

| Prefijo | Cuándo usarlo | Ejemplo |
| --- | --- | --- |
| `Fix:` | Corregir un error de comportamiento o presentación. | `Fix: corrige la búsqueda por categoría` |
| `Feature:` | Añadir una funcionalidad. | `Feature: agrega un filtro al catálogo del blog` |
| `Refactor:` | Reorganizar código sin cambiar su comportamiento. | `Refactor: centraliza las URL de artículos` |
| `Style:` | Ajustar el formato del código, como espacios o indentación. | `Style: unifica la indentación de componentes` |
| `UI:` | Modificar el diseño o la presentación visual. | `UI: ajusta el espaciado del encabezado` |
| `Docs:` | Añadir o actualizar documentación. | `Docs: agrega la guía de contribución` |
| `Test:` | Añadir o modificar pruebas. | `Test: cubre la exclusión de borradores` |
| `Perf:` | Mejorar el rendimiento. | `Perf: reduce el tamaño de las imágenes` |
| `Build:` | Modificar dependencias o configuración de compilación. | `Build: actualiza las dependencias de Astro` |
| `CI:` | Modificar automatizaciones de integración o despliegue. | `CI: agrega la validación de producción` |
| `Chore:` | Realizar mantenimiento que no encaje en los anteriores. | `Chore: actualiza los archivos ignorados` |
| `Revert:` | Deshacer un cambio anterior. | `Revert: revierte el cambio del menú` |

Puedes indicar el área entre paréntesis cuando ayude a identificar el cambio:

```text
Feature(blog): agrega un filtro de artículos
Fix(search): corrige el estado sin resultados
Docs(readme): actualiza los requisitos de Node
```

- Escribe descripciones concretas, como «corrige la validación del correo», en lugar de «varios cambios».
- Usa verbos como «agrega», «corrige», «actualiza» o «elimina» y evita el punto final en el título.
- Usa `Style:` para formato del código y `UI:` para cambios visuales. Si corriges un defecto visual, usa `Fix:`.
- Separa cambios independientes en commits distintos. Si un cambio necesita varios archivos, pueden formar parte del mismo commit.
- Para explicar una decisión o un cambio incompatible, añade detalles en el cuerpo del commit después de una línea en blanco.

Estos prefijos son la convención del proyecto. Mantén `Fix:` y `Feature:` en lugar de alternarlos con `fix:` y `feat:`.
