---
title: Install Prodify
description: Download and install Prodify on Linux, Windows or Android, and get through the first-launch setup.
group: Getting started
order: 1
---

# Install Prodify

<p class="lead">Prodify is free and runs on Linux, Windows and Android. Every release is on GitHub.</p>

Open the [latest release](https://github.com/Gaalpos/prodify/releases/latest) and download the file for your system.

| System | File | Notes |
| --- | --- | --- |
| Linux | `Prodify_<version>_amd64.deb` | Ubuntu, Linux Mint, Debian and other Debian-based systems |
| Windows | `Prodify_<version>_x64-setup.exe` | Windows 10 and 11 |
| Android | `Prodify_<version>_arm64.apk` | 64-bit ARM phones and tablets |

## Linux

Install the package from a terminal in the folder you downloaded it to:

```bash
sudo apt install ./Prodify_1.8.1_amd64.deb
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
