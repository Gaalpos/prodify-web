---
title: Your data folder
description: Where Prodify keeps your data, and the plain Markdown format of every file.
group: Your data
order: 20
---

# Your data folder

<p class="lead">Everything you write in Prodify is a plain Markdown file in a folder you can open, back up and sync.</p>

## Where it lives

By default your data is in a folder called `Prodify` in your home folder (`~/Prodify` on Linux). Settings are kept separately (`~/.config/io.prodify.app/settings.json` on Linux), so your folder only holds your content.

You can edit files with any other tool while Prodify is closed. Changes show up the next time you open it.

### App storage

If you'd rather not have a folder of files, **Settings → Account and data** can switch to **app storage**: a private database inside Prodify. You can switch back at any time.

## The layout

```text
Prodify/
├── notes/            one .md file per note
├── archive/          archived notes
├── templates/        note and journal templates
├── lists/            your task lists
├── journal/
│   ├── entries/      one file per entry: "2026-10-30 08-12.md"
│   └── moods.md      mood check-ins
├── projects/         one file per project
├── habits/           one file per habit
├── health/           workouts, meditation and body log
├── collections/      book/, movie/, series/, anime/, game/
├── attachments/      photos, images and PDFs
├── tasks.md
├── events.md
├── birthdays.md
└── questions.md
```

## Notes

Properties are YAML front matter, compatible with Obsidian:

```markdown
---
created: 2026-10-22
tags: [garden, home]
categories: ["[[Projects]]"]
---

# Ideas for the studio

- A narrow desk under the window
```

## Tasks

Each task is a checklist line in `tasks.md`. Details are added in brackets after the title, and subtasks are indented under their task:

```markdown
- [ ] Write the first case study (due: 2026-11-02) (project: website-relaunch)
  - [x] Collect screenshots
  - [ ] Outline the story
- [ ] Water the plants (due: 2026-10-30) (repeat: weekly)
- [ ] Call the dentist (due: 2026-10-30) (remind: 2026-10-30 17:00) (priority: high)
- [x] Send the invoice (done: 2026-10-29)
```

## Events and birthdays

```markdown
- 2026-10-30: 13:00-14:00 Lunch with Marta
- 2026-11-04: Sofia's birthday dinner
- 2026-10-26: 09:30-10:00 Stand-up (repeat: every 2 weeks on mon,tue,wed,thu,fri)
```

`birthdays.md` uses month and day, with an optional year: `- 05-12: Ana (1990)`.

## Journal

Entries are files in `journal/entries/` with `created`, `time`, `mood` (1–5), `location` and `categories` properties. Mood check-ins are lines in `journal/moods.md`:

```markdown
- 2026-10-30 21:00: 4 · Grateful, Calm
```

## Habits

Each habit is a file with its settings in front matter and a dated log underneath:

```markdown
---
name: Drink water
type: number
health: healthy
goal: atleast
target: 8
unit: glasses
created: 2026-09-20
---

## Log

- 2026-10-29: 7
- 2026-10-30: 8
```

## Backups

Prodify makes an automatic backup every day and keeps the last seven. **Settings → Account and data** can also mirror your data to a second folder, such as a USB drive, and has **Back up now**.
