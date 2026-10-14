# Instrucciones para agentes

Estas instrucciones se aplican a todo el repositorio.

## Contribuciones y mensajes de commit

- Seguir [CONTRIBUTING.md](CONTRIBUTING.md) para preparar contribuciones y redactar commits.
- Usar prefijos con inicial mayúscula, como `Fix:`, `Feature:` y `Docs:`, seguidos de una descripción breve en español. El ámbito es opcional: `Fix(search): corrige el estado sin resultados`. Conservar `Fix:` y `Feature:` en lugar de `fix:` y `feat:`.

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
- Para contenido que no depende de la petición, conserva la generación estática cuando sea suficiente. El proyecto actualmente usa `output: 'static'`: el renderizado durante el build no es SSR por petición. Si una funcionalidad requiere SSR, adapta las rutas y la configuración necesarias dentro de su alcance, mantén la compatibilidad con Netlify y documenta el cambio en `README.md` y `AGENTS.md`; esta preferencia no implica migrar todo el sitio a SSR.
- Usa Tailwind CSS 4 para los estilos y su configuración existente mediante `@tailwindcss/vite`, `@import`, `@theme` y `@plugin`. Para el contenido Markdown, conserva `@tailwindcss/typography` y las clases `prose` / `prose-invert`; evita duplicar utilidades disponibles o introducir configuraciones de otras versiones de Tailwind.
- `src/pages/` define las rutas; `src/components/` contiene componentes reutilizables y `src/layouts/` las plantillas.
- La colección `blog` se define en `src/content.config.ts` y carga artículos desde `src/data/blog/`. Respeta el esquema del frontmatter y el filtro de borradores `draft`.
- Las imágenes públicas se guardan en `public/`; los estilos globales, en `src/styles/global.css`.
- Centraliza los textos ajenos al Markdown en `src/lib/texts.ts`, dentro de `TEXTS_GENERAL`, agrupados por sección e importados mediante `@/lib/texts.ts`. Incluye interfaz, accesibilidad, metadatos, datos personales y mensajes; usa funciones para textos con parámetros. El contenido y frontmatter de los artículos permanecen en Markdown. No selecciones iconos ni comportamiento por etiquetas traducibles: los enlaces sociales usan `SocialLinkItem.id`.
- Configuración de marca e idioma en `src/lib/site.ts` (`SITE_DATA`, `SITE_LOCALE`); páginas y orden de navegación en `src/lib/navigation.ts` (`SITE_PAGES`, `MAIN_NAVIGATION`); enlaces sociales, externos, del header y de licencia en `src/lib/links.ts`; habilidades y experiencia en `src/lib/profile.ts`. Importar cada módulo directamente. Los enlaces usan `id`, `label`, `href`; los metadatos usan `title`, `description`. Tipos separados en `src/lib/types/site.ts`, `profile.ts` y `blog.ts`; estos últimos derivan de la colección. Porcentajes numéricos en `percentage`; experiencia con `occupation` y `href`. No hay selección de idioma ni rutas internacionalizadas.
- Debes usar los alias definidos en `tsconfig.json` para los imports internos de `src/`: `@/pages/`, `@/components/`, `@/layouts/`, `@/lib/`, `@/assets/` y `@/styles/`. Usa la extensión real explícita e importa el archivo concreto, sin barrels ni reexportaciones de conveniencia. No existen `@/scripts/`, `@/sections/` ni un alias genérico. En archivos que ejecuta Node fuera de Astro, como `astro.config.mjs`, usa rutas relativas compatibles con ese entorno. Respeta el estilo de los archivos que modifiques.

## Coherencia de la UI

- Mantén una UI coherente entre todas las secciones de la aplicación: inicio, página personal, catálogo, artículos y cualquier sección nueva. Respeta la paleta, tipografía, jerarquía de títulos, espaciados, anchos de contenido, bordes, iconografía y animaciones existentes.
- Reutiliza los layouts, componentes y estilos compartidos para elementos equivalentes, como navegación, tarjetas, botones, enlaces y etiquetas. Si necesitas una variante, intégrala en el patrón existente y evita crear estilos aislados que rompan la coherencia visual.
- Mantén consistentes los estados de interacción (hover, foco, activo, deshabilitado), los mensajes y el comportamiento en móvil y escritorio. Conserva la accesibilidad y la navegación por teclado al modificar la UI.
- Al cambiar un componente compartido, considera su efecto en todas las secciones que lo usan y señala al propietario qué vistas debe comprobar visualmente.

## Blog, RSS y sitemap

- El dominio se define una sola vez en la propiedad `site` de `astro.config.mjs`. Los componentes usan `Astro.site` y los endpoints usan `context.site` (o `site` al desestructurar el contexto); no dupliques el dominio en `SITE_DATA`. Mantén `site` configurado para generar canónicas, RSS y sitemap.
- El sitemap usa `@astrojs/sitemap`; `src/pages/robots.txt.ts` y `src/layouts/BaseLayout.astro` apuntan a `/sitemap-index.xml`.
- El RSS se genera en `src/pages/rss.xml.ts` con `@astrojs/rss` y se publica en `/rss.xml`. Mantén su título, descripción, idioma, fechas y enlaces coherentes con los datos del sitio y los artículos publicados.
- Reutiliza `getPublishedPosts` y `getPublishedPostCards` de `src/lib/blog/content.ts` para publicados y tarjetas; `getPostUrl`, `formatPostDate` y `formatReadTime` de `src/lib/blog/presentation.ts` para URL y presentación. `SITE_LOCALE` configura idioma del HTML, RSS, fechas y búsqueda; las fechas editoriales se muestran en UTC. El navegador usa `src/lib/ui/blog-search.ts`, conservando estado y limpieza de listeners en las transiciones.
- El frontmatter usa `title`, `description`, `publishedAt`, `readTimeMinutes`, `category` e `image`; `updatedAt` es opcional. Las fechas se escriben como `YYYY-MM-DD` entre comillas y el esquema las convierte en `Date`. `readTimeMinutes` es un entero positivo: no guardar unidades ni textos y no volver a parsear una cadena de lectura. Formatear con `formatReadTime`; promedios y orden usan el número directamente. Mantener `publishedAt` para orden y RSS, y `updatedAt` para actualización visible. Conservar el filtro de `draft` y las URL existentes entre portada, catálogo, artículos, RSS, canónicas y sitemap.

## Mantenimiento de las instrucciones y documentación

- No edites salidas generadas en `dist/`, `.astro/` ni dependencias en `node_modules/`.
- Actualiza el `README.md` cuando cambien la configuración, el flujo de trabajo o las instrucciones para publicar contenido.
- Debes actualizar este `AGENTS.md` en la misma tarea cuando haya cambios importantes en arquitectura, tecnologías, dependencias relevantes, estructura, alias, despliegue, comandos, flujo de trabajo, RSS, sitemap o reglas del proyecto. Revisa las instrucciones existentes, corrige las que queden obsoletas y documenta las nuevas convenciones para que los siguientes agentes trabajen con información vigente.
- Mantén `AGENTS.md` y `README.md` coherentes con el código y la configuración reales; no documentes funcionalidades o validaciones que no existan o no se hayan realizado.
- Mantén los cambios dentro del alcance solicitado y conserva el trabajo existente del propietario.
