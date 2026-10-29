// Answers are HTML so they can link to the docs; `{base}` is replaced with the site's base path.
export interface Faq { q: string; a: string }
export interface FaqGroup { title: string; items: Faq[] }

export const faq: FaqGroup[] = [
  {
    title: 'The basics',
    items: [
      { q: 'Is Prodify free?', a: 'Yes. Prodify is free to download and use, and a local account is free forever. Only bigger Prodify Cloud plans (Basic and Pro, coming soon) will cost money; the Free cloud plan with 100 MB is included.' },
      { q: 'Which systems does it run on?', a: 'Linux (a <code>.deb</code> for Ubuntu, Linux Mint, Debian and similar), Windows 10 and 11 (an <code>.exe</code> installer) and Android (an <code>.apk</code> for 64-bit ARM phones and tablets). See <a href="{base}docs/install/">Install Prodify</a>.' },
      { q: 'Is there an iPhone or Mac version?', a: 'Not yet. Prodify is available for Linux, Windows and Android today.' },
      { q: 'Do I need an account?', a: 'No. The default is a local account with no sign-up: everything stays on your device and works offline. You only need an email address if you want Prodify Cloud to sync devices.' },
      { q: 'Does it work offline?', a: 'Yes. Everything you write is saved on your device. Only a few extras need the internet: collection covers and details, exercise photos, the weather, radio and ambient sounds, AI, and Prodify Cloud.' },
      { q: 'Which languages does it support?', a: 'English and Spanish, including the natural-language task entry ("tomorrow 6pm" and "mañana a las 6") and the exercise catalog.' },
    ],
  },
  {
    title: 'Your data',
    items: [
      { q: 'Where is my data stored?', a: 'In a folder called <code>Prodify</code> in your home folder, as plain Markdown files. You can also switch to app storage, a private database inside Prodify. See <a href="{base}docs/data-folder/">Your data folder</a>.' },
      { q: 'Can I use my notes in Obsidian?', a: 'Yes. Note properties are YAML front matter in the same format Obsidian uses, with categories written as <code>"[[Name]]"</code> links, so you can open the <code>notes</code> folder (or the whole Prodify folder) as an Obsidian vault.' },
      { q: 'Can I edit the files with other apps?', a: 'Yes. They\'re ordinary Markdown files. Edits made while Prodify is closed show up the next time you open it. If you turned on encryption, files are only readable inside Prodify.' },
      { q: 'How do I back up my data?', a: 'Prodify makes a backup every day and keeps the last seven. In Settings → Account and data you can also mirror everything to a second folder, such as a USB drive, or press Back up now. Because your data is a normal folder, any backup tool works too.' },
      { q: 'Can I sync without Prodify Cloud?', a: 'Yes. Point a sync tool like Syncthing at your Prodify folder. Prodify Cloud is simply the built-in, encrypted option.' },
      { q: 'What happens to my data if I uninstall Prodify?', a: 'On Linux and Windows your Prodify folder stays where it is: install Prodify again and it picks up where you left off. On Android, uninstalling can remove the app\'s data, so back up or sync first.' },
    ],
  },
  {
    title: 'Privacy and sync',
    items: [
      { q: 'Can anyone else read my data?', a: 'Not unless you share your device. Prodify has no analytics and sends nothing anywhere unless you turn on a feature that needs it. With a password and encryption, your files are encrypted on disk with AES-256-GCM. See <a href="{base}docs/privacy-sync/">Privacy and sync</a>.' },
      { q: 'Can Prodify Cloud read my notes?', a: 'No. Files are encrypted on your device with your account\'s key before they\'re uploaded, so the server only stores data it can\'t read.' },
      { q: 'I forgot my password. What now?', a: 'Use the recovery key you saved when you set the password. Without the password or the recovery key, encrypted data can\'t be recovered, by you or by anyone else.' },
      { q: 'Can several people use Prodify on one computer?', a: 'Yes. Each user has their own data folder and settings, and you switch users from Settings.' },
    ],
  },
  {
    title: 'Features',
    items: [
      { q: 'Do I have to use every section?', a: 'No. Turn sections off in setup or in Settings → Sections and Home. Hidden sections keep their data and can be turned back on at any time.' },
      { q: 'How does typing a task like "Call mom friday 6pm" work?', a: 'Prodify reads dates, times, priorities (<code>!high</code>), lists (<code>#name</code>), projects (<code>+name</code>) and repeats (<code>every week</code>) from what you type, and shows what it understood before you save. See <a href="{base}docs/tasks/">Tasks</a>.' },
      { q: 'Why didn\'t a reminder go off?', a: 'Reminders only fire while Prodify is open, so keep it running (it can sit in the background) when you\'re expecting one. Every notification is also kept in the bell panel.' },
      { q: 'Do I need AI to use Prodify?', a: 'No. AI is optional and only works with your own Claude API key. Without it, reflection questions come from a built-in list. See <a href="{base}docs/ai-connections/">AI and connections</a>.' },
      { q: 'Why do movies and games need an API key?', a: 'Movie and game details come from TMDB and RAWG, which ask each user for a free key. Books, series and anime need no key. Add the keys in Settings → Connections.' },
      { q: 'Can I import my calendar?', a: 'Yes. Calendar → Import .ics adds events exported from Google Calendar, Outlook and other apps.' },
      { q: 'Can I import my games?', a: 'Yes, from Steam and RetroAchievements, with playtime and achievements. Link your accounts in Settings → Connections.' },
    ],
  },
  {
    title: 'Installing and updating',
    items: [
      { q: 'Windows says the installer is unrecognized. Is it safe?', a: 'The installer isn\'t code-signed yet, so SmartScreen warns about it. Make sure you downloaded it from the official <a href="https://github.com/Gaalpos/prodify/releases">GitHub releases</a>, then choose More info → Run anyway.' },
      { q: 'How do I install the .apk on Android?', a: 'Open the downloaded file and allow installs from your browser or file manager when Android asks, then tap Install.' },
      { q: 'How do I update?', a: 'Download the new release and install it over the old one. Your data isn\'t touched. On Android every release is signed with the same key, so it installs as an update.' },
      { q: 'Is Prodify open source?', a: 'The source code is public on <a href="https://github.com/Gaalpos/prodify">GitHub</a>.' },
    ],
  },
];
