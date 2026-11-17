// The Spanish text for each section in features.ts (same ids, colors, screenshots and guides).
import { sections as en, type Section } from './features';

const es: Record<string, Pick<Section, 'name' | 'tagline' | 'text' | 'points'>> = {
  today: {
    name: 'Inicio', tagline: 'Tu día en una página',
    text: 'Inicio te saluda según la hora del día y reúne lo que importa ahora. Coloca sus tarjetas en columnas o como tablero, con el ancho que quieras, y quédate solo con las que usas.',
    points: ['Tareas de hoy, eventos y hábitos por marcar', 'Registro de ánimo y una pregunta de reflexión', 'Sesión de concentración, reloj y tiempo', 'Lo que estás leyendo, viendo o jugando'],
  },
  tasks: {
    name: 'Tareas', tagline: 'Escríbela como la dirías',
    text: 'Escribe «Llamar a mamá viernes a las 6 !alta cada semana» y Prodify pone la fecha, el recordatorio, la prioridad y la repetición por ti, en español o en inglés.',
    points: ['Listas, subtareas, prioridades y recordatorios', 'Vistas de Lista, Tablero y Matriz de Eisenhower', 'Tareas que se repiten: a diario, entre semana, semanal, mensual, anual', 'Listas compartidas con Prodify Cloud'],
  },
  journal: {
    name: 'Diario', tagline: 'Escribe un poco, cada día',
    text: 'Cada entrada es su propio archivo Markdown con ánimo, hora, ubicación, categorías y fotos. Los registros de ánimo y una pregunta diaria hacen fácil el hábito.',
    points: ['Registros de ánimo con emociones', 'Preguntas de reflexión y tus respuestas', 'Categorías de Sueños a Trabajo', 'Una racha de escritura para seguir'],
  },
  notes: {
    name: 'Notas', tagline: 'Notas en Markdown que se abren en cualquier sitio',
    text: 'Una barra de formato cuando la quieres y Markdown puro debajo. Las propiedades se guardan como front matter YAML, igual que en Obsidian.',
    points: ['Etiquetas, categorías y propiedades propias', 'Plantillas y una «Nota de hoy» diaria', 'Vista de panel o de tarjetas', 'Archivo y papelera'],
  },
  projects: {
    name: 'Proyectos', tagline: 'Todo lo de un objetivo, junto',
    text: 'Dale a un proyecto un color y un icono, y reúne sus tareas, notas, hitos y archivos. Una línea de tiempo muestra dónde estás y qué viene después.',
    points: ['Hitos en una línea de tiempo', 'Tareas del proyecto en Lista, Tablero o Matriz', 'Notas, enlaces, imágenes y PDF vinculados', 'Marca un proyecto como hecho al terminarlo'],
  },
  habits: {
    name: 'Hábitos', tagline: 'Pasos pequeños, contados',
    text: 'Sigue hábitos de sí/no o números como vasos de agua, a diario o cada semana. Márcalos como saludables o no, con un objetivo de al menos o menos de.',
    points: ['Rachas y porcentaje de éxito en 30 días', 'Objetivos numéricos con unidades', 'Hábitos que se marcan solos con entrenamientos o meditación', 'Una vista del año de cada hábito'],
  },
  hobbies: {
    name: 'Aficiones', tagline: 'Haz tiempo para lo que te gusta',
    text: 'Guarda las aficiones que practicas o quieres probar, cuánto te importa cada una y un objetivo semanal. Registra una sesión desde la lista con un toque.',
    points: ['Objetivos semanales y rachas', 'Hitos y recursos por afición', 'Un registro de cada sesión'],
  },
  skills: {
    name: 'Habilidades', tagline: 'Aprende algo, nivel a nivel',
    text: 'Sigue las habilidades que quieres aprender, de principiante a experto, con hitos por marcar y tu tiempo de práctica.',
    points: ['Seis niveles por habilidad', 'Hitos y recursos', 'Registro de práctica'],
  },
  health: {
    name: 'Salud', tagline: 'Gimnasio, meditación y cuerpo',
    text: 'Registra entrenamientos con rutinas y un catálogo de ejercicios que funciona sin conexión en español e inglés. Cronometra la meditación y guarda peso, sueño y agua por día.',
    points: ['Entrenamientos por fecha, rutina o ejercicio', 'Temporizador de meditación y racha', 'Registro de peso, sueño y agua', 'Un resumen con tu ánimo de 14 días'],
  },
  calendar: {
    name: 'Calendario', tagline: 'Todas las fechas en un sitio',
    text: 'Las vistas de mes, semana y día muestran los eventos junto a tus tareas, entradas del diario, notas y hábitos, cada uno con su color.',
    points: ['Eventos que se repiten, incluso «cada 2 semanas de lunes a viernes»', 'Cumpleaños con la edad', 'Importa eventos de un archivo .ics', 'Recordatorios como notificaciones'],
  },
  collections: {
    name: 'Colecciones', tagline: 'Libros, películas, series, anime y juegos',
    text: 'Busca un título y Prodify rellena la portada, el autor, el año y los géneros. Sigue lo que quieres, lo que tienes en curso y lo que has terminado.',
    points: ['Valoraciones, favoritos, citas y objetivos anuales', 'Importa de Steam y RetroAchievements con logros', 'Tarjetas en mosaico con control de tamaño', 'Datos de Open Library, TVmaze, AniList, TMDB y RAWG'],
  },
  insights: {
    name: 'Estadísticas', tagline: 'Lo que tus entradas dicen de ti',
    text: 'Un resumen del mes calculado en tu dispositivo a partir de tus archivos: cómo te sentiste, qué terminaste y qué hábitos aguantaron.',
    points: ['Ánimo medio y las emociones más frecuentes', 'Tareas hechas, entrenamientos y elementos terminados', 'Tus mejores hábitos y tu día más activo', 'Momentos del diario del mes'],
  },
  achievements: {
    name: 'Logros', tagline: 'Sube de nivel sobre la marcha',
    text: 'Gana XP y niveles con lo que ya haces: leer, ver, terminar tareas, mantener hábitos y aprender.',
    points: ['20 logros con seis rangos cada uno', 'De Bronce a Leyenda', 'Contados a partir de tus archivos'],
  },
  files: {
    name: 'Almacenamiento', tagline: 'Enlaces, imágenes, PDF, archivos y Wikipedia',
    text: 'Guarda enlaces con etiquetas, conserva imágenes y PDF, explora todos los archivos de tu carpeta de Prodify y lee artículos de Wikipedia, en lista o en tarjetas.',
    points: ['Pega o suelta un enlace o un archivo', 'Etiquetas y favoritos', 'Lee y guarda artículos de Wikipedia'],
  },
  music: {
    name: 'Música', tagline: 'Sonido para trabajar',
    text: 'Radio por internet mantenida por sus oyentes y sonidos ambientales que puedes mezclar, cada uno con su volumen, desde un minirreproductor.',
    points: ['Radio de SomaFM', 'Lluvia, mar, chimenea, cafetería y más', 'Sigue sonando mientras trabajas'],
  },
};

export const sectionsEs: Section[] = en.map((s) => ({ ...s, ...es[s.id] }));
