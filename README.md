# 🚀 Taller TypeScript con Bun

Un proyecto educativo diseñado para aprender TypeScript de manera práctica y moderna, ejecutado con Bun. Cada ejercicio está organizado por temas para ayudarte a avanzar paso a paso desde los conceptos básicos hasta la programación asíncrona.

## 💡 ¿Qué es este proyecto?

Este repositorio es una colección de ejercicios de TypeScript pensados para estudiantes y desarrolladores que quieren dominar:

- variables y tipos
- estructuras de control
- funciones y arrays
- objetos y métodos de arrays
- promesas y async/await

Todo el proyecto se ejecuta con Bun, aprovechando un runtime rápido y un flujo simple para código TypeScript.

## 🧩 Tecnologías usadas

- **Bun**
- **TypeScript**
- **ESNext**
- **tsconfig** configurado con `strict`

## ⚙️ Instalación

Instala las dependencias del proyecto:

```bash
npm install
```

> Si ya usas Bun, también puedes ejecutar `bun install`.

## ▶️ Cómo ejecutar el proyecto

### Modo normal

Ejecuta el archivo principal:

```bash
bun run src/index.ts
```

### Modo desarrollo (watch)

Este proyecto no incluye un watcher automático por defecto, pero puedes usar Bun con un comando de observación simple:

```bash
bun --watch src/index.ts
```

> Si quieres, también puedes usar herramientas como `watchexec` para recargar automáticamente.

### Modo producción

Para ejecutar el código en modo más directo, usa:

```bash
bun run src/index.ts
```

> En Bun no hay diferencia de flags entre desarrollo y producción como en otros bundlers; se recomienda usar el mismo comando y controlar el entorno desde variables si es necesario.

## 📚 Explicación de los ejercicios

- `01-variables-y-tipos.ts` — Introducción a variables, tipos primitivos y anotaciones de TypeScript.
- `02-condicionales.ts` — Estructuras condicionales `if`, operadores lógicos y decisiones en el flujo.
- `03-bucles.ts` — Bucles `for`, `while`, `for...of` y manejo de iteraciones.
- `04-funciones.ts` — Declaración de funciones, parámetros tipados y retorno de valores.
- `05-arrays.ts` — Creación, acceso y manipulación básica de arrays.
- `06-arrays-de-objetos.ts` — Arrays con objetos, filtrado, mapeo y búsqueda.
- `07-objetos.ts` — Tipado de objetos, interfaces y propiedades opcionales.
- `08-metodos-de-arrays.ts` — Métodos avanzados de arrays como `map`, `filter`, `reduce` y `find`.
- `09-promesas.ts` — Fundamentos de promesas, manejo de estados y encadenamiento.
- `10-async-await.ts` — Programación asíncrona moderna con `async`/`await` y control de errores.

## 🗂️ Estructura del proyecto

```text
📁 src/
 ┣ 📁 ejercicios/
 ┃ ┣ 01-variables-y-tipos.ts
 ┃ ┣ 02-condicionales.ts
 ┃ ┣ 03-bucles.ts
 ┃ ┣ 04-funciones.ts
 ┃ ┣ 05-arrays.ts
 ┃ ┣ 06-arrays-de-objetos.ts
 ┃ ┣ 07-objetos.ts
 ┃ ┣ 08-metodos-de-arrays.ts
 ┃ ┣ 09-promesas.ts
 ┃ ┗ 10-async-await.ts
 ┗ index.ts
```

## 📝 Consejos finales

- Ejecuta cada ejercicio por separado desde `src/index.ts` o importando directamente el archivo.
- Mantén tus tipos estrictos para sacar el máximo provecho de TypeScript.
- Aprovecha Bun para acelerar el tiempo de ejecución y simplificar el flujo de desarrollo.

¡Disfruta el taller y sigue avanzando con TypeScript! ✨
