---
title: Tu carpeta de datos
description: Dónde guarda Prodify tus datos y el formato Markdown de cada archivo.
group: Your data
order: 20
---

# Tu carpeta de datos

<p class="lead">Todo lo que escribes en Prodify es un archivo Markdown normal en una carpeta que puedes abrir, copiar y sincronizar.</p>

## Dónde está

Por defecto tus datos están en una carpeta llamada `Prodify` en tu carpeta personal (`~/Prodify` en Linux). Los ajustes se guardan aparte (`~/.config/io.prodify.app/settings.json` en Linux), así que la carpeta solo contiene tu contenido.

Puedes editar los archivos con cualquier otra herramienta mientras Prodify está cerrado. Los cambios aparecen la próxima vez que lo abras.

### Almacenamiento de la app

Si prefieres no tener una carpeta de archivos, **Ajustes → Cuenta y datos** puede cambiar al **almacenamiento de la app**: una base de datos privada dentro de Prodify. Puedes volver atrás cuando quieras.

## La estructura

Los nombres de carpetas y propiedades están en inglés en todos los idiomas, para que los archivos sean iguales en cualquier dispositivo.

```text
Prodify/
├── notes/            un archivo .md por nota
├── archive/          notas archivadas
├── templates/        plantillas de notas y del diario
├── lists/            tus listas de tareas
├── journal/
│   ├── entries/      un archivo por entrada: "2026-10-30 08-12.md"
│   └── moods.md      registros de ánimo
├── projects/         un archivo por proyecto
├── habits/           un archivo por hábito
├── hobbies/          un archivo por afición, con sus sesiones
├── skills/           un archivo por habilidad, con su registro de práctica
├── health/           entrenamientos, meditación y registro corporal
├── collections/      book/, movie/, series/, anime/, game/
├── attachments/      fotos, imágenes y PDF
├── tasks.md
├── events.md
├── birthdays.md
└── questions.md
```

## Notas

Las propiedades son front matter YAML, compatible con Obsidian:

```markdown
---
created: 2026-10-22
tags: [jardín, casa]
categories: ["[[Proyectos]]"]
---

# Ideas para el estudio

- Un escritorio estrecho bajo la ventana
```

## Tareas

Cada tarea es una línea de lista de verificación en `tasks.md`. Los detalles se añaden entre paréntesis después del título, y las subtareas van sangradas bajo su tarea:

```markdown
- [ ] Escribir el primer caso práctico (due: 2026-11-02) (project: website-relaunch)
  - [x] Reunir capturas
  - [ ] Esbozar la historia
- [ ] Regar las plantas (due: 2026-10-30) (repeat: weekly)
- [ ] Llamar al dentista (due: 2026-10-30) (remind: 2026-10-30 17:00) (priority: high)
- [x] Enviar la factura (done: 2026-10-29)
```

## Eventos y cumpleaños

```markdown
- 2026-10-30: 13:00-14:00 Comida con Marta
- 2026-11-04: Cena de cumpleaños de Sofía
- 2026-10-26: 09:30-10:00 Reunión diaria (repeat: every 2 weeks on mon,tue,wed,thu,fri)
```

`birthdays.md` usa mes y día, con un año opcional: `- 05-12: Ana (1990)`.

## Diario

Las entradas son archivos en `journal/entries/` con las propiedades `created`, `time`, `mood` (1–5), `location` y `categories`. Los registros de ánimo son líneas en `journal/moods.md`:

```markdown
- 2026-10-30 21:00: 4 · Agradecido, Tranquilo
```

## Hábitos

Cada hábito es un archivo con sus ajustes en el front matter y un registro con fechas debajo:

```markdown
---
name: Beber agua
type: number
health: healthy
goal: atleast
target: 8
unit: vasos
created: 2026-09-20
---

## Log

- 2026-10-29: 7
- 2026-10-30: 8
```

## Copias de seguridad

Prodify hace una copia automática cada día y guarda las siete últimas. **Ajustes → Cuenta y datos** también puede reflejar tus datos en una segunda carpeta, como un USB, y tiene **Hacer copia ahora**.
