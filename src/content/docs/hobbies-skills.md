---
title: Hobbies and Skills
description: Keep the hobbies you do or want to try and the skills you're learning, with goals, levels, milestones and a practice log.
group: Sections
order: 14.5
color: '#e07b3c'
---

# Hobbies and Skills

<p class="lead">Two sections that work the same way: one for the things you do for fun, one for the things you're learning.</p>

## Hobbies

Add a hobby you do, or one you want to try: painting, climbing, guitar. For each one you set:

- **Status**: Doing, Want to try, Paused or Stopped
- **Importance**: from *Nice to have* to *Essential*, so the list can show what matters most first
- **A weekly goal**: how many times a week you'd like to do it
- An icon and a color

**Log a session** from the list in one tap, or open the hobby to add the minutes and a note. The card shows your sessions this week against the goal, and the top of the page totals your sessions this week and your time this month.

## Skills

Add a skill you want to learn: Spanish, woodworking, soldering. Skills have the same status, importance, icon and color as hobbies (Learning, Want to learn, Paused or Learned), plus a **level**:

| Level | |
| --- | --- |
| 0 | Not started |
| 1 | Beginner |
| 2 | Novice |
| 3 | Intermediate |
| 4 | Advanced |
| 5 | Expert |

Raise the level as you improve. **Log practice** to keep track of the time you put in. The top of the page shows how many skills you're learning, the levels you've gained and the milestones you've reached.

## Milestones and resources

Both hobbies and skills can have:

- **Milestones**: steps to check off, such as "Finish a blue route" or "Hold a 30-minute conversation"
- **Resources**: links and notes, such as a course, a video channel or a teacher's number

## Finding things

Filter the list by status, and sort it by importance, most recent activity or name (and level, for skills).

## In your files

Each hobby is a file in `hobbies/` and each skill a file in `skills/`. The settings are front matter, followed by the description, then `## Milestones`, `## Resources` and `## Log` sections:

```markdown
---
name: Spanish
status: active
importance: 5
level: 3
created: 2026-09-20
---

Conversational Spanish before the trip.

## Milestones

- [x] Order food without English
- [ ] Hold a 30-minute conversation

## Resources

Language exchange on Thursdays

## Log

- 2026-11-06: 20 · Flashcards
- 2026-11-04: 30 · Podcast
```

Each log line is a date, the minutes, and an optional note after `·`.
