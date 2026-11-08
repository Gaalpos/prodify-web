---
title: Install Prodify
description: Download and install Prodify on Linux, Windows or Android, and get through the first-launch setup.
group: Getting started
order: 1
---

# Install Prodify

<p class="lead">Prodify is free and runs on Linux, Windows, Android and in your browser. </p>

Download the file for your system: [Linux](https://prodify-cloud.gaalpos.workers.dev/download/linux), [Windows](https://prodify-cloud.gaalpos.workers.dev/download/windows) or [Android](https://prodify-cloud.gaalpos.workers.dev/download/android). Each link always gets the latest version.

| System | File | Notes |
| --- | --- | --- |
| Linux | `Prodify_<version>_amd64.deb` | Ubuntu, Linux Mint, Debian and other Debian-based systems |
| Windows | `Prodify_<version>_x64-setup.exe` | Windows 10 and 11 |
| Android | `Prodify_<version>_arm64.apk` | 64-bit ARM phones and tablets |

## Web app

Nothing to install: open the [web app](https://prodify-cloud.gaalpos.workers.dev/app/) in any modern browser, on a computer, phone or tablet. Setup runs on your first visit.

- **Your data stays in that browser.** Clearing the browser's site data for the web app deletes it.
- **Sign in to Prodify Cloud** to keep a copy and sync it with the desktop and phone apps. Already have an account? [Log in](https://prodify-cloud.gaalpos.workers.dev/app/#login) goes straight to sign-in. Your files are encrypted in the browser before they're uploaded.
- **Some things need the desktop or phone app**: choosing a data folder, backups to a second drive, Steam and RetroAchievements imports, and AI.
- **Keep it handy**: use your browser's *Install app* or *Add to Home Screen* option, or bookmark it.

## Linux

Install the package from a terminal in the folder you downloaded it to:

```bash
sudo apt install ./Prodify_1.9.0_amd64.deb
```

You can also double-click the `.deb` to open it in your software center. Prodify then shows up in your app menu.

## Windows

Run the installer. It isn't code-signed yet, so Windows SmartScreen may show a warning: choose **More info → Run anyway**. Prodify is added to the Start menu.

## Android

Download the `.apk` on your phone and open it. Android asks you to allow installs from your browser or file manager the first time; allow it, then tap **Install**.

## First launch

The first time Prodify opens, a short setup asks a few questions. You can change every answer later, and **Settings → Run setup again** brings it back.

- **Account**: keep a **local account** (the default, free forever, no sign-up, works offline) or sign in to **Prodify Cloud** to sync devices. See [Privacy and sync](../privacy-sync/).
- **Sections**: one step per section, explaining what it does. Keep the ones you want; the rest are hidden, not deleted, and can be turned back on in **Settings → Sections and Home**.
- **Make it yours**: pick a theme and colors. There are more in **Settings → Appearance**.
- **Connections** (optional): add keys for movie and game data, link RetroAchievements or Steam, and add a Claude API key for AI. See [AI and connections](../ai-connections/).

## Updating

Download the new release and install it the same way. On Linux and Windows it replaces the old version; on Android it installs as an update because every release is signed with the same key. Your data is never touched by an update.
