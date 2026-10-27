// Colors match NAVC in the app's src/app.js so each area keeps its identity.
export const features = [
  { id: 'today', name: 'Home', color: '#5b9bd5', text: 'A greeting, today\'s tasks, habits to check off and the day\'s events on one calm page.' },
  { id: 'notes', name: 'Notes', color: '#d4a43a', text: 'Markdown notes with tags, categories, templates, lists and an archive. Opens in Obsidian too.' },
  { id: 'journal', name: 'Journal', color: '#9a5fa0', text: 'Daily entries with mood, photos and a reflection question to get you writing.' },
  { id: 'tasks', name: 'Tasks', color: '#5fa57f', text: 'Due dates, priorities, reminders and smart lists, plus a focus timer for the hard ones.' },
  { id: 'projects', name: 'Projects', color: '#6f7fb0', text: 'Group tasks and notes into projects and see how far along each one is.' },
  { id: 'habits', name: 'Habits', color: '#d4605a', text: 'Daily or weekly habits with streaks and a history you can scan at a glance.' },
  { id: 'health', name: 'Health', color: '#e0566f', text: 'A gym tracker with a bundled exercise catalog in English and Spanish, plus body stats.' },
  { id: 'collections', name: 'Collections', color: '#b0794a', text: 'Books, movies, series, anime and games, with covers and details fetched for you.' },
  { id: 'calendar', name: 'Calendar', color: '#3f9aa5', text: 'Month, week and day views that bring events, tasks and journal entries together.' },
  { id: 'insights', name: 'Insights', color: '#9a7fd0', text: 'Patterns across your journal, habits and tasks, at a glance.' },
  { id: 'files', name: 'Storage', color: '#7a8794', text: 'Browse the Prodify folder from inside the app and open any file in place.' },
  { id: 'music', name: 'Music', color: '#c9629b', text: 'Ambient sounds and internet radio to work to, without leaving the app.' },
] as const;
