---
title: AI and connections
description: Optional AI with your own Claude API key, catalog keys for movies and games, Steam, RetroAchievements and calendar import.
group: Your data
order: 22
---

# AI and connections

<p class="lead">Everything here is optional. Prodify works fully without any of it.</p>

## AI

Prodify can use Claude, Anthropic's AI model, with your own API key.

1. Get an API key from the [Anthropic Console](https://console.anthropic.com).
2. Paste it in **Settings → AI** and choose **Test connection**.

With AI on, you can:

- **Summarize** a note and add the summary to it
- **Find tasks** in a note and add them to Tasks
- **Suggest categories** for a note
- Get **new reflection questions** written for you

Your key is stored in your settings on your device. Requests go straight from Prodify to Anthropic, and only the note or text you act on is sent. The **Use AI** switch in Settings → AI turns every AI feature off.

## Connections

**Settings → Connections** holds the keys and accounts that Collections use.

| Connection | What you need | What it does |
| --- | --- | --- |
| TMDB | A free API key from themoviedb.org | Movie details and posters |
| RAWG | A free API key from rawg.io | Game details and covers |
| Steam | A Steam Web API key and your Steam ID or profile link | Imports your games, playtime and achievements |
| RetroAchievements | Your username and Web API key | Imports and syncs your retro games and achievement progress |

Books (Open Library), series (TVmaze) and anime (AniList) need no key.

## Calendar import

**Calendar → Import .ics** adds events exported from Google Calendar, Outlook and other calendar apps.
