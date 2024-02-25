#Integrador N° 2

##Para realizar el Proyecto Integrador te propongo realizar los siguientes pasos, 


1 - Crear repositorio git:  
- Crearemos la cuenta en  github.
- Crearemos el repositorio

2 - Generar localmente el proyecto y subir el esqueleto al repositorio previamente creado:
-	Usaremos create-react-app
-	Repasamos los comandos de git.

3 - Diseñar el buscador sin funcionalidad:
- Maquetar con css puro o alguna librería a elección.

4 - Trabajar con una estructura estática de la de la home, es decir sin funcionalidad con al menos dos filas de tarjetas de películas.
- Usar un array estático de películas como mock

5 - Componentizar la Tarjeta de película que se muestra en la Home.
- Crear el componente y ubicarlo en la carpeta /components
- Crear el archivo .style.css correspondiente.

6 - Crear el componente Buscador.
- Crear el componente y ubicarlo en la carpeta /components
- Crear el archivo .style.css correspondiente.

7 - Crear el componente TarjetaDetalle (puede ser otro nombre)
- Instalaremos react-router-dom
- Crear la ruta para el detalle

8 - Implementar infinite scroll.
- Investigar qué librería usar.

9 - Entregar el resultado final desplegado en github pages u otro hosting a elección.
- Deberán investigar cómo realizar este paso.

## Consideraciones y tecnologias usadas.

* La maquetación fue hecha con CSS Puro.
* Para la paginación de la web se utilizo **react-router-dom V6.21.3** , ya que es compatible con versiones mayores a React 17.
* Se utilizo un **Custom Hook** para para la simulacion ficticia de una API de peliculas.
* La lógica de búsqueda las peliculas ( como no habia una consigna especifica ) se opto  por mostrar todas las peliculas que contengan letras o palabras ingresadas en el input del buscador.
* Se utilizo **Global context** para obtener la busqueda anterior y actual del buscador. Tambien el listado de las peliculas y tenerlas en todo momento.
* Para el despliege de la web se utilizo  Github Pages.

# Generacion del despliegue en Github Pages

## Deploy Web + Github Pages

## Instalar gh-pages

-   [más info](https://ull-esit-pl-1617.github.io/tareas-iniciales-Edu-Guille-Oscar-Sergio/Tutorial/gh-pages/gh-pages.html): El módulo gh-pages es un módulo de npm (Node Package Manager) que **permite automatizar la publicación de archivos en una rama gh-pages** de un repositorio de GitHub (o cualquier otra rama u otro servicio).

```sh
npm i gh-pages -D
```

## vite.config.js

- Se modifica el archivo **vite.config.js**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Integrador_EIT_2/"
});
```

## package.json

Se agrega `"deploy": "gh-pages -d dist"`

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
}
```

## npm run build && npm run deploy

Estos comandos se repiten por cada actualización del proyecto para actualizar el Github Pages:

```sh
# Tener en cuenta estos comando solamente actualiza la rama gh-pages en github 
npm run build
npm run deploy
```
