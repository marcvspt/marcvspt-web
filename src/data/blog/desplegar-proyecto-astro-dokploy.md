---
title: 'Desplegar proyecto de Astro en Dokploy'
excerpt: 'Despliega tu proyecto de Astro con Server Side Rendering (SSR) o Static Site Generation (SSG) utilizando la plataforma de Dokploy.'
date: '2026-03-29'
readTime: '12 min'
category: 'Infraestructura'
tags: [Astro, Dokploy, Cloud, VPS, Infraestructura, Deploy, Railpack, SSR, SSG]
image: '/img/blog/infraestructura/astro-dokploy/astro-dokploy.webp'
featured: true
---

> En este post, no se enseñará como iniciarlizar un VPS, como instalar/desplegar Dokploy y tampoco configurar los Providers, se centrará unicamente en la configuración y datos a tener en cuenta para el despliegue de Astro

## ¿Qué es Dokploy?

[**Dokploy**](https://dokploy.com/) es una plataforma self-hosted para desplegar aplicaciones en tu propio **VPS** con una experiencia parecida a servicios como **Netlify**, **Vercel**, **Railway** o **Render**, pero bajo tu control. Te permite conectar repositorios de **Git**, configurar variables de entorno, dominios, SSL y automatizar despliegues.

Una alternativa a esta plataforma es [Coolify](https://coolify.io/).

## ¿Qué es Astro?

[**Astro**](https://astro.build/) es un framework moderno para construir sitios web rápidos. Puedes generar páginas estáticas o ejecutar renderizado en servidor, según lo que necesites.

### Server Side Rendering

**Server Side Rendering (SSR)** es una técnica de renderizado web donde el **HTML** de una página se genera en el servidor en el momento en que se recibe cada petición, en lugar de enviarse código **JavaScript** al navegador para que lo construya. Esto significa que el cliente recibe directamente **HTML** listo para renderizar.

Esto es especialmente útil cuando necesitas:

1. Contenido dinámico o personalizado por usuario.
2. Integración con APIs privadas que no deben exponerse al cliente.
3. Mejor indexación SEO, ya que los bots reciben HTML completo.
4. Control más fino sobre el comportamiento del servidor.

En contraste con **Static Site Generation (SSG)**, donde las páginas se generan en tiempo de build y se sirven como archivos estáticos, **SSR** responde con contenido "*fresco*" en cada request.

En **Astro**, puedes habilitar **SSR** configurando la salida del proyecto a `server` y añadiendo un adaptador de servidor.

## Despliegue con Dokploy + Railpack

> En este punto ya deberas tener tu VPS o servidor local con Dokploy además de la configuración inicial y la conexión con tu Provider (GitHub, GitLab, etc).

Una vez creamos el proyecto y el servicio dentro del proyecto de **Dokploy**, deberemos elegir el *Provider* donde tengamos el proyecto y su configuración, luego, deberemos elegir en *Build Type* la opción de **Railpack**.

![Elegir el provider donde tengamos el proyecto](/img/blog/infraestructura/astro-dokploy/dokploy-provider.webp)

![Elegir el Build Type de Railpack](/img/blog/infraestructura/astro-dokploy/dokploy-build-type.webp)

### Configuración para SSE

1. En el proyecto de **Astro**, instala el [**adaptador de Node.js**](https://docs.astro.build/en/guides/integrations-guide/node/). Si usas **pnpm** ejecuta `pnpm astro add node`

![Instalación de adaptador de nodejs](/img/blog/infraestructura/astro-dokploy/adaptador-nodejs.webp)

Se necesita cambiar el archivo `astro.config.mjs` para usar el adaptador.

```js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
	output: 'server',

	adaptador: node({
		mode: 'standalone'
	}),
});
```

Ahora que ya hemos integrado el **adaptador de Node.js** necesitamos decirle al servidor donde estará el punto de entrada de nuestra aplicación luego de que se construya el proyecto. **Railpack** lo que hace es ejecutar el script `pnpm run start`, por lo que se tiene que colocar lo siguiente en nuestro `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "start": "node ./dist/server/entry.mjs",
    "preview": "astro preview",
    "astro": "astro"
  },
}
```

![Script en package.json para que funcione el adaptador de Node.js](/img/blog/infraestructura/astro-dokploy/script-start.webp)

2. Necesitamos configurar la sección de host sobre el que será publicado el aplicativo ya que por defecto solo esta puesto para **localhost**

- **Opción 1 (Usaremos esta):** Podemos forzar a nuestra app de **Astro** que use el IP que queramos desde las variables de entorno de **Dokploy**, si usamos `0.0.0.0` tomará todas las interfaces del entorno de ejecución (contendor o servidor):

![Host sobre los que se publicará la aplicación de Astro](/img/blog/infraestructura/astro-dokploy/host-publicacion-dokploy-env.webp)

- **Opción 2:** Podemos hacerlo desde `astro.config.mjs` de la siguiente forma añadieron la opción de `server`. Esto publicará el aplicativo por todas las interfaces del entorno (es decir, con todas las IPs que tenga la máquina/contenedor):

![alt text](/img/blog/infraestructura/astro-dokploy/host-publicacion-astro.webp)

3. En **Dokploy**, para muchos despliegues el puerto interno esperado por defecto es el `3000`, al usar el **adapatdor de Node.js** debemos indicarle que puerto deberá utilizar y si no se indica se usa el mismo del entorno de desarrollo de **Astro** por defecto `4321`.

- **Opción 1 (Usaremos esta):** Podemos forzar a nuestra app de **Astro** que use el puerto por defecto del contenedor donde se ejecutará en **Dokploy** desde las variables de entorno del servicio:

![Puerto por defecto de Dokploy configurado en las variables de entorno para forzar a Astro SSR a usarlo](/img/blog/infraestructura/astro-dokploy/puerto-dokploy-env-ssr.webp)

> Esta es la opción que yo uso y la que se usará en este proyecto

- **Opción 2:** Podemos cambiar el puerto que usa por defecto **Astro** en el `astro.config.mjs` para usar el mismo que **Dokploy**:

![Puerto por de Astro cambiado al de Dokploy en astro.config.mjs](/img/blog/infraestructura/astro-dokploy/puerto-defecto-astro.webp)

- **Opción 3 (No recomendada):** Podemos cambiar el puerto que usa por defecto el contenedor donde se ejecutará la app en **Dokploy** para usar el por defecto de **Astro** cuando se configura el dominio del servicio:

![Puerto por defecto de Dokploy cambiado al que usa Astro SSR](/img/blog/infraestructura/astro-dokploy/puerto-defecto-dokploy-ssr.webp)

4. Iniciar la build y el despliegue

Ya con las configuraciones realizadas, procedemos al despliegue del aplicativo:

![Desplegar el proyecto Astro SSR y realizar la build](/img/blog/infraestructura/astro-dokploy/dokploy-deploy-build-ssr.webp)

Listo, ya tenemos nuestro proyecto de **Astro** desplegado en nuestra plataforma de **Dokploy**.

![Aplicativo de Astro desplegado con SSR](/img/blog/infraestructura/astro-dokploy/astro-ssr-desplegado.webp)

### Configuración para SSG

Por defecto, **Astro** esta configurado para servir y construir archivos estaticos, sin embargo podemos configurar explicitamente que sea esta su forma de salida:

![Configuración de output static opcional](/img/blog/infraestructura/astro-dokploy/astro-static.webp)

Al usar **Railpack** con archivos estaticos, se usa **Caddy** como servidor, por lo que el despliegue es por el puerto `80` por defecto y necesitamos hacer que nuestro proyecto apunte a este puerto para su publicación o forzar a nuestro aplicativo usar el puerto por defecto de **Dokploy** el `3000`.

- **Opción 1 (Usaremos esta):** Podemos configurar el puerto `3000` como variable de entorno en el servicio de **Dokploy** para que nuestro servidor web de archivos estaticos **Caddy** lo use por defecto:

![Puerto por defecto de Dokploy configurado en las variables de entorno para forzar a Astro SSG a usarlo](/img/blog/infraestructura/astro-dokploy/puerto-dokploy-env-ssg.webp)

- **Opción 2 (No recomendada):** Podemos cambiar el puerto que usa por defecto el contenedor donde se ejecutará la app en **Dokploy** cuando se configura el dominio del servicio:

![Puerto por defecto de Dokploy cambiado al que usa Astro SSR](/img/blog/infraestructura/astro-dokploy/puerto-defecto-dokploy-ssr.webp)

Ya con las configuraciones realizadas, podemos iniciar la build y el despliegue

![Desplegar el proyecto Astro SSG y realizar la build ](/img/blog/infraestructura/astro-dokploy/dokploy-deploy-build-ssg.webp)

Listo, ya tenemos nuestro proyecto de **Astro** desplegado en nuestro **Dokploy**

![Aplicativo de Astro desplegado con SSG](/img/blog/infraestructura/astro-dokploy/astro-ssg-desplegado.webp)

## Referencias

- [Astro Docs](https://docs.astro.build/)
- [Dokploy Docs](https://docs.dokploy.com/)
- [Railpack](https://railpack.com/)
- [Caddy](https://caddyserver.com/docs/)
