---
title: Aficiones y Habilidades
description: Guarda las aficiones que haces o quieres probar y las habilidades que estás aprendiendo, con objetivos, niveles, hitos y un registro de práctica.
group: Sections
order: 14.5
color: '#e07b3c'
---

# Aficiones y Habilidades

<p class="lead">Dos secciones que funcionan igual: una para lo que haces por diversión y otra para lo que estás aprendiendo.</p>

## Aficiones

Añade una afición que practicas, o una que quieres probar: pintura, escalada, guitarra. Para cada una defines:

- **Estado**: Practicando, Quiero probar, En pausa o Dejado
- **Importancia**: de *Estaría bien* a *Esencial*, para que la lista muestre primero lo que más importa
- **Un objetivo semanal**: cuántas veces a la semana te gustaría hacerla
- Un icono y un color

**Registra una sesión** desde la lista con un toque, o abre la afición para añadir los minutos y una nota. La tarjeta muestra tus sesiones de esta semana frente al objetivo, y arriba de la página se suman tus sesiones de la semana y tu tiempo del mes.

## Habilidades

Añade una habilidad que quieres aprender: inglés, carpintería, soldar. Las habilidades tienen el mismo estado, importancia, icono y color que las aficiones (Aprendiendo, Quiero aprender, En pausa o Aprendido), además de un **nivel**:

| Nivel | |
| --- | --- |
| 0 | Sin empezar |
| 1 | Principiante |
| 2 | Novato |
| 3 | Intermedio |
| 4 | Avanzado |
| 5 | Experto |

Sube el nivel a medida que mejoras. **Registra práctica** para llevar la cuenta del tiempo que le dedicas. Arriba de la página verás cuántas habilidades estás aprendiendo, los niveles ganados y los hitos alcanzados.

## Hitos y recursos

Tanto las aficiones como las habilidades pueden tener:

- **Hitos**: pasos para marcar, como «Terminar una vía azul» o «Mantener una conversación de 30 minutos»
- **Recursos**: enlaces y notas, como un curso, un canal de vídeos o el teléfono de un profesor

## Encontrar cosas

Filtra la lista por estado y ordénala por importancia, actividad más reciente o nombre (y nivel, en las habilidades).

## En tus archivos

Cada afición es un archivo en `hobbies/` y cada habilidad uno en `skills/`. Los ajustes van en el front matter, seguidos de la descripción y luego las secciones `## Milestones`, `## Resources` y `## Log`:

```markdown
---
name: Inglés
status: active
importance: 5
level: 3
created: 2026-09-20
---

Inglés para conversar antes del viaje.

## Milestones

- [x] Pedir comida sin español
- [ ] Mantener una conversación de 30 minutos

## Resources

Intercambio de idiomas los jueves

## Log

- 2026-11-06: 20 · Tarjetas
- 2026-11-04: 30 · Pódcast
```

Cada línea del registro es una fecha, los minutos y una nota opcional después de `·`.
