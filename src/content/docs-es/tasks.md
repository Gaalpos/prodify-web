---
title: Tareas
description: Listas, escritura en lenguaje natural, subtareas, prioridades, recordatorios, repeticiones y las vistas de Lista, Tablero y Matriz.
group: Sections
order: 10
color: '#5fa57f'
---

# Tareas

<p class="lead">Escribe las tareas como las dirías. Prodify deduce la fecha, la hora, la prioridad, la lista, el proyecto y la repetición.</p>

## Añadir tareas

Escribe una tarea y pulsa Intro. Mientras escribes, una pista debajo muestra lo que Prodify ha entendido.

```text
Llamar a mamá viernes a las 6 !alta #familia +lanzamiento cada semana
```

| Escribes | Prodify pone |
| --- | --- |
| `hoy`, `mañana`, `viernes`, `la semana que viene`, `en 3 días`, `2026-11-02` | Fecha límite |
| `a las 6`, `18:30`, `a las 9` | Hora del recordatorio (y hoy o mañana si no hay fecha) |
| `!alta`, `!media`, `!baja` (o `!!`, `!`) | Prioridad |
| `#nombredelista` | Lista |
| `+proyecto` | Proyecto |
| `cada día`, `entre semana`, `cada semana`, `cada mes`, `cada año` | Repetición |

También funciona en inglés: `tomorrow`, `friday`, `6pm`, `every week`, `!high`.

## Listas y listas inteligentes

**Hoy** muestra lo que vence hoy y lo atrasado; **Todas** muestra todas las tareas abiertas. Crea tus propias listas con nombre, color e icono, y mueve tareas entre ellas. Con Prodify Cloud puedes **compartir una lista** con otras personas: haz clic derecho en ella y elige **Compartir…**.

## Vistas

Cada lista se puede ver de tres formas:

- **Lista**: una lista de verificación sencilla, con las subtareas bajo su tarea
- **Tablero**: columnas por estado, para arrastrar tareas de pendiente a en curso y a hecha
- **Matriz**: la matriz de Eisenhower, que ordena las tareas abiertas por importantes y urgentes

## Subtareas, prioridades y recordatorios

Abre una tarea para añadir subtareas, fecha límite, recordatorio, prioridad, lista y proyecto. Un recordatorio envía una notificación a su hora mientras Prodify está abierto.

## Tareas que se repiten

Una tarea puede repetirse cada día, entre semana, cada semana, cada mes o cada año. Márcala y aparece la siguiente con su fecha (y su recordatorio) adelantada y las subtareas desmarcadas.

## Sesiones de concentración

Desde Inicio, **Sesión de concentración** te deja elegir hasta tres tareas y poner en marcha un temporizador. Las sesiones terminadas cuentan en Estadísticas.

## En tus archivos

Todas las tareas viven en `tasks.md`, una línea de lista de verificación en Markdown cada una. Mira [Tu carpeta de datos](../data-folder/#tareas) para ver el formato.
