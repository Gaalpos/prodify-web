// Colors match NAVC in the app's src/app.js so each section keeps its identity.
// `shot` names a pair of screenshots in src/assets/screens (<shot>-light-c.webp / <shot>-dark-c.webp).
export interface Section {
  id: string;
  name: string;
  color: string;
  tagline: string;
  text: string;
  points: string[];
  shot?: string;
  doc: string;
}

export const sections: Section[] = [
  {
    id: 'today', name: 'Home', color: '#5b9bd5', shot: 'today', doc: 'tour',
    tagline: 'Your day on one page',
    text: 'Home greets you by the time of day and gathers what matters now. Arrange its cards in columns or as a board and keep only the ones you use.',
    points: ['Tasks due today, events, habits to check off', 'Mood check-in and a reflection question', 'Focus session timer, clock and weather', 'What you\'re reading, watching or playing'],
  },
  {
    id: 'tasks', name: 'Tasks', color: '#5fa57f', shot: 'tasks', doc: 'tasks',
    tagline: 'Type it the way you\'d say it',
    text: 'Write "Call mom friday 6pm !high every week" and Prodify sets the due date, reminder, priority and repeat for you, in English or Spanish.',
    points: ['Lists, subtasks, priorities and reminders', 'List, Board and Eisenhower Matrix views', 'Repeating tasks: daily, weekdays, weekly, monthly, yearly', 'Today and All smart lists'],
  },
  {
    id: 'journal', name: 'Journal', color: '#9a5fa0', shot: 'journal', doc: 'journal',
    tagline: 'Write a little, every day',
    text: 'Each entry is its own Markdown file with mood, time, location, categories and photos. Quick mood check-ins and a daily question keep the habit easy.',
    points: ['Mood check-ins with emotions', 'Reflection questions and your answers', 'Categories from Dreams to Work', 'A writing streak to keep going'],
  },
  {
    id: 'notes', name: 'Notes', color: '#d4a43a', shot: 'notes', doc: 'notes',
    tagline: 'Markdown notes that open anywhere',
    text: 'A formatting toolbar when you want it and plain Markdown underneath. Properties are stored as YAML front matter, the same way Obsidian does it.',
    points: ['Tags, categories and custom properties', 'Templates and a daily "Today\'s note"', 'View and Edit modes (Ctrl+E)', 'Archive and Trash'],
  },
  {
    id: 'projects', name: 'Projects', color: '#6f7fb0', shot: 'projects', doc: 'projects',
    tagline: 'Everything for one goal, together',
    text: 'Give a project a color and an icon, then gather its tasks, notes, milestones and files. A timeline shows where you are and what\'s next.',
    points: ['Milestones on a timeline', 'Project tasks in List, Board or Matrix', 'Linked notes, links, images and PDFs', 'Mark a project done when it\'s finished'],
  },
  {
    id: 'habits', name: 'Habits', color: '#d4605a', shot: 'habits', doc: 'habits-health',
    tagline: 'Small steps, counted',
    text: 'Track yes/no habits or numbers like glasses of water, daily or weekly. Mark habits as healthy or unhealthy and set a goal of at least or less than.',
    points: ['Streaks and 30-day success rates', 'Numeric goals with units', 'Habits that check themselves off from workouts or meditation', 'A year view of every habit'],
  },
  {
    id: 'health', name: 'Health', color: '#e0566f', shot: 'health', doc: 'habits-health',
    tagline: 'Gym, meditation and body',
    text: 'Log workouts with routines and an exercise catalog that works offline in English and Spanish. Time meditation sessions and keep weight, sleep and water by day.',
    points: ['Workouts by date, routine or exercise', 'Meditation timer and streak', 'Weight, sleep and water log', 'An overview with your mood over 14 days'],
  },
  {
    id: 'calendar', name: 'Calendar', color: '#3f9aa5', shot: 'calendar', doc: 'calendar',
    tagline: 'Every date in one place',
    text: 'Month, week and day views show events next to your tasks, journal entries, notes and habits, each marked by its own color.',
    points: ['Repeating events, even "every 2 weeks on Mon–Fri"', 'Birthdays with ages', 'Import events from a .ics file', 'Reminders as notifications'],
  },
  {
    id: 'collections', name: 'Collections', color: '#b0794a', shot: 'collections', doc: 'collections',
    tagline: 'Books, movies, series, anime and games',
    text: 'Search a title and Prodify fills in the cover, creator, year and genres. Track what you want, what\'s in progress and what you\'ve finished.',
    points: ['Ratings, favorites, quotes and yearly goals', 'Steam and RetroAchievements import with achievements', 'Masonry cards with a size slider', 'Data from Open Library, TVmaze, AniList, TMDB and RAWG'],
  },
  {
    id: 'insights', name: 'Insights', color: '#9a7fd0', shot: 'insights', doc: 'insights-storage-music',
    tagline: 'What your entries say about you',
    text: 'A month in review computed on your device from your own files: how you felt, what you finished and which habits held.',
    points: ['Average mood and the emotions you felt most', 'Tasks done, workouts and finished items', 'Your best habits and most active day', 'Journal highlights from the month'],
  },
  {
    id: 'files', name: 'Storage', color: '#7a8794', shot: 'files', doc: 'insights-storage-music',
    tagline: 'Links, images, PDFs and files',
    text: 'Save links with tags, keep images and PDFs, and browse every file in your Prodify folder, as a list or as cards.',
    points: ['Paste or drop a link or a file', 'Tags and favorites', 'Browse the whole folder'],
  },
  {
    id: 'music', name: 'Music', color: '#c9629b', shot: 'music', doc: 'insights-storage-music',
    tagline: 'Sound to work to',
    text: 'Listener-supported internet radio and ambient sounds you can mix, each with its own volume, controlled from a mini player.',
    points: ['Radio from SomaFM', 'Rain, ocean, fireplace, café and more', 'Keeps playing while you work'],
  },
];

export const byId = Object.fromEntries(sections.map((s) => [s.id, s]));
