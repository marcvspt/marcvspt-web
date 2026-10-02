# Instrucciones para agentes

Estas instrucciones se aplican a todo el repositorio.

## Ejecución de comandos y dependencias

- El propietario ejecuta todos los comandos de `pnpm`. No ejecutes `pnpm install`, `pnpm add`, `pnpm update`, `pnpm remove`, `pnpm run`, `pnpm build`, `pnpm exec`, `pnpm dlx` ni otros comandos de pnpm.
- Cuando hagan falta desarrollo, build, preview, comprobaciones o cambios de dependencias, indica el comando exacto, para qué sirve y desde qué directorio debe ejecutarse. Espera los resultados del propietario si necesitas esa validación para continuar.
- No eludas esta regla usando npm, yarn, bun, npx, ejecutables directos o scripts equivalentes para realizar las tareas reservadas al propietario. No instales ni actualices herramientas o dependencias por tu cuenta.
- Puedes explorar archivos, editar código y documentación, y realizar comprobaciones de solo lectura como `git diff --check`.
- Al entregar cambios, distingue las comprobaciones realizadas de las pendientes. No afirmes que el build o las pruebas pasaron si no se ejecutaron; indica los comandos que debe ejecutar el propietario.

## Contexto del proyecto

- Sitio personal y blog técnico en español, construido con Astro 7, TypeScript, Tailwind CSS 4 y `@tailwindcss/typography`. Consulta `package.json` para las versiones concretas y mantén los cambios compatibles con ellas.
- El destino de despliegue configurado es Netlify, con `@astrojs/netlify` y salida estática (`output: 'static'`) en `astro.config.mjs`. Mantén la compatibilidad con ese entorno; no cambies el adaptador, el proveedor ni el modo de salida salvo que el alcance solicitado lo requiera.
- Sigue las convenciones de Astro: componentes `.astro`, rutas basadas en archivos y colecciones de contenido. Conserva el funcionamiento de los eventos durante la navegación con `ClientRouter` y limpia los listeners cuando se reemplaza la página.
- Prioriza el SSR de Astro cuando sea viable y aporte valor, por ejemplo para datos actualizados por petición, autenticación o contenido personalizado. Favorece resolver los datos y generar el HTML en Astro, manteniendo en el cliente la lógica que necesite interacción con el navegador.
- Para contenido que no depende de la petición, conserva la generación estática cuando sea suficiente. El proyecto actualmente usa `output: 'static'`: el renderizado durante el build no es SSR por petición. Si una funcionalidad requiere SSR, adapta las rutas y la configuración necesarias dentro de su alcance, mantén la compatibilidad con Netlify y documenta el cambio en README y AGENTS.md; esta preferencia no implica migrar todo el sitio a SSR.
- Usa Tailwind CSS 4 para los estilos y su configuración existente mediante `@tailwindcss/vite`, `@import`, `@theme` y `@plugin`. Para el contenido Markdown, conserva `@tailwindcss/typography` y las clases `prose` / `prose-invert`; evita duplicar utilidades disponibles o introducir configuraciones de otras versiones de Tailwind.
- `src/pages/` define las rutas; `src/components/` contiene componentes reutilizables y `src/layouts/` las plantillas.
- La colección `blog` se define en `src/content.config.ts` y carga artículos desde `src/data/blog/`. Respeta el esquema del frontmatter y el filtro de borradores `draft`.
- Las imágenes públicas se guardan en `public/`; los estilos globales, en `src/styles/global.css`.
- Debes usar los alias definidos en `tsconfig.json` para los imports internos de `src/`, por ejemplo `@/components/`, `@/layouts/`, `@/scripts/`, `@/assets/` y `@/styles/`. No asumas que existe un alias genérico para cualquier ruta: usa los patrones configurados. En archivos que ejecuta Node fuera de Astro, como `astro.config.mjs`, usa rutas relativas compatibles con ese entorno. Respeta el estilo de los archivos que modifiques.

## Blog, RSS y sitemap

- El dominio se define una sola vez en `src/scripts/site.js` (`SITE_URL`). La configuración de Astro y `SITE_DATA.url` lo consumen; modifica esa fuente cuando cambie el dominio.
- El sitemap usa `@astrojs/sitemap`; `src/pages/robots.txt.ts` y `src/layouts/BaseLayout.astro` apuntan a `/sitemap-index.xml`.
- El RSS se genera en `src/pages/rss.xml.ts` con `@astrojs/rss` y se publica en `/rss.xml`. Mantén su título, descripción, idioma, fechas y enlaces coherentes con los datos del sitio y los artículos publicados.
- Reutiliza `getPublishedPosts`, `getPublishedPostCards` y `getPostUrl` de `src/scripts/blog.ts` según corresponda. Conserva el filtro de `draft` y la coherencia de las URL entre portada, catálogo, artículos, RSS, canónicas y sitemap; no dupliques estas reglas en cada consumidor.

## Mantenimiento de las instrucciones y documentación

- No edites salidas generadas en `dist/`, `.astro/` ni dependencias en `node_modules/`.
- Actualiza el README cuando cambien la configuración, el flujo de trabajo o las instrucciones para publicar contenido.
- Debes actualizar este `AGENTS.md` en la misma tarea cuando haya cambios importantes en arquitectura, tecnologías, dependencias relevantes, estructura, alias, despliegue, comandos, flujo de trabajo, RSS, sitemap o reglas del proyecto. Revisa las instrucciones existentes, corrige las que queden obsoletas y documenta las nuevas convenciones para que los siguientes agentes trabajen con información vigente.
- Mantén `AGENTS.md` y README coherentes con el código y la configuración reales; no documentes funcionalidades o validaciones que no existan o no se hayan realizado.
- Mantén los cambios dentro del alcance solicitado y conserva el trabajo existente del propietario.
