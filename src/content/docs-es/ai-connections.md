---
title: IA y conexiones
description: IA opcional con tu propia clave de la API de Claude, claves de catálogos para películas y juegos, Steam, RetroAchievements e importación de calendario.
group: Your data
order: 22
---

# IA y conexiones

<p class="lead">Todo lo de aquí es opcional. Prodify funciona por completo sin nada de ello.</p>

## IA

Prodify puede usar Claude, el modelo de IA de Anthropic, con tu propia clave de API.

1. Consigue una clave de API en la [consola de Anthropic](https://console.anthropic.com).
2. Pégala en **Ajustes → IA** y elige **Probar conexión**.

Con la IA activada puedes:

- **Resumir** una nota y añadirle el resumen
- **Encontrar tareas** en una nota y añadirlas a Tareas
- **Sugerir categorías** para una nota
- Recibir **preguntas de reflexión nuevas** escritas para ti

Tu clave se guarda en tus ajustes, en tu dispositivo. Las peticiones van directamente de Prodify a Anthropic, y solo se envía la nota o el texto sobre el que actúas. El interruptor **Usar IA** de Ajustes → IA desactiva todas las funciones de IA.

## Conexiones

**Ajustes → Conexiones** guarda las claves y cuentas que usan las Colecciones.

| Conexión | Qué necesitas | Qué hace |
| --- | --- | --- |
| TMDB | Una clave de API gratuita de themoviedb.org | Detalles y carteles de películas |
| RAWG | Una clave de API gratuita de rawg.io | Detalles y portadas de juegos |
| Steam | Una clave de la Steam Web API y tu ID de Steam o enlace de perfil | Importa tus juegos, tiempo de juego y logros |
| RetroAchievements | Tu usuario y tu clave de Web API | Importa y sincroniza tus juegos retro y tu progreso de logros |

Los libros (Open Library), las series (TVmaze) y el anime (AniList) no necesitan clave.

## Importar calendario

**Calendario → Importar .ics** añade eventos exportados de Google Calendar, Outlook y otras apps de calendario.
