// The Spanish FAQ. Same shape as faq.ts; `{base}` becomes /es/ so links stay in Spanish.
import type { FaqGroup } from './faq';

export const faqEs: FaqGroup[] = [
  {
    title: 'Lo básico',
    items: [
      { q: '¿Prodify es gratis?', a: 'Sí. Prodify se descarga y se usa gratis, y una cuenta local es gratis para siempre. Solo costarán dinero los planes más grandes de Prodify Cloud (Basic y Pro, próximamente); el plan gratuito con 100 MB está incluido.' },
      { q: '¿En qué sistemas funciona?', a: 'Linux (un <code>.deb</code> para Ubuntu, Linux Mint, Debian y similares), Windows 10 y 11 (un instalador <code>.exe</code>), Android (un <code>.apk</code> para móviles y tabletas ARM de 64 bits) y cualquier navegador moderno con la <a href="https://prodify-cloud.gaalpos.workers.dev/app/">app web</a>. Mira <a href="{base}docs/install/">Instalar Prodify</a>.' },
      { q: '¿Hay versión para iPhone o Mac?', a: 'Todavía no como app, pero la <a href="https://prodify-cloud.gaalpos.workers.dev/app/">app web</a> funciona en Safari en iPhone, iPad y Mac. Inicia sesión en Prodify Cloud ahí para sincronizar con tus otros dispositivos.' },
      { q: '¿Qué diferencia hay entre la app web y las descargas?', a: 'Es la misma app. La app web guarda tus datos dentro del navegador en lugar de en una carpeta de archivos, y algunas cosas necesitan la app de escritorio o del móvil: elegir una carpeta de datos, copias en una segunda unidad, importar de Steam y RetroAchievements, y la IA. Inicia sesión en Prodify Cloud para guardar una copia de tus datos web y usarlos en todas partes. Mira <a href="{base}docs/install/#app-web">App web</a>.' },
      { q: '¿Mis datos están a salvo si borro el navegador?', a: 'Borrar los datos del sitio de la app web elimina lo que hay guardado en ese navegador. Si has iniciado sesión en Prodify Cloud, vuelve a entrar y todo regresa. Sin Cloud, exporta antes una copia desde Ajustes → Cuenta y datos.' },
      { q: '¿Necesito una cuenta?', a: 'No. Por defecto se usa una cuenta local sin registro: todo se queda en tu dispositivo y funciona sin conexión. Solo necesitas un email si quieres que Prodify Cloud sincronice tus dispositivos.' },
      { q: '¿Funciona sin conexión?', a: 'Sí. Todo lo que escribes se guarda en tu dispositivo. Solo algunos extras necesitan internet: las portadas y detalles de las colecciones, las fotos de ejercicios, el tiempo, la radio y los sonidos ambientales, la IA y Prodify Cloud.' },
      { q: '¿Qué idiomas tiene?', a: 'Inglés y español, incluida la escritura de tareas en lenguaje natural («mañana a las 6» y "tomorrow 6pm") y el catálogo de ejercicios.' },
    ],
  },
  {
    title: 'Tus datos',
    items: [
      { q: '¿Dónde se guardan mis datos?', a: 'En una carpeta llamada <code>Prodify</code> dentro de tu carpeta personal, como archivos Markdown normales. También puedes cambiar al almacenamiento de la app, una base de datos privada dentro de Prodify. Mira <a href="{base}docs/data-folder/">Tu carpeta de datos</a>.' },
      { q: '¿Puedo usar mis notas en Obsidian?', a: 'Sí. Las propiedades de las notas son front matter YAML con el mismo formato que usa Obsidian, y las categorías se escriben como enlaces <code>"[[Nombre]]"</code>, así que puedes abrir la carpeta <code>notes</code> (o toda la carpeta de Prodify) como una bóveda de Obsidian.' },
      { q: '¿Puedo editar los archivos con otras apps?', a: 'Sí. Son archivos Markdown normales. Lo que cambies con Prodify cerrado aparece la próxima vez que lo abras. Si activaste el cifrado, los archivos solo se pueden leer dentro de Prodify.' },
      { q: '¿Cómo hago una copia de seguridad?', a: 'Prodify hace una copia cada día y guarda las siete últimas. En Ajustes → Cuenta y datos también puedes reflejarlo todo en una segunda carpeta, como un USB, o pulsar Hacer copia ahora. Como tus datos son una carpeta normal, cualquier herramienta de copias sirve.' },
      { q: '¿Puedo sincronizar sin Prodify Cloud?', a: 'Sí. Apunta una herramienta de sincronización como Syncthing a tu carpeta de Prodify. Prodify Cloud es simplemente la opción integrada y cifrada.' },
      { q: '¿Qué pasa con mis datos si desinstalo Prodify?', a: 'En Linux y Windows tu carpeta de Prodify se queda donde está: vuelve a instalar Prodify y seguirás donde lo dejaste. En Android, desinstalar puede borrar los datos de la app, así que haz una copia o sincroniza antes.' },
    ],
  },
  {
    title: 'Privacidad y sincronización',
    items: [
      { q: '¿Puede alguien más leer mis datos?', a: 'No, salvo que compartas tu dispositivo. Prodify no tiene analíticas y no envía nada a ningún sitio salvo que actives una función que lo necesite. Con contraseña y cifrado, tus archivos se cifran en disco con AES-256-GCM. Mira <a href="{base}docs/privacy-sync/">Privacidad y sincronización</a>.' },
      { q: '¿Puede Prodify Cloud leer mis notas?', a: 'No. Los archivos se cifran en tu dispositivo con la clave de tu cuenta antes de subirse, así que el servidor solo guarda datos que no puede leer.' },
      { q: 'He olvidado mi contraseña. ¿Y ahora?', a: 'Usa la clave de recuperación que guardaste al poner la contraseña. Sin la contraseña ni la clave de recuperación, los datos cifrados no se pueden recuperar, ni por ti ni por nadie.' },
      { q: '¿Pueden varias personas usar Prodify en un ordenador?', a: 'Sí. Cada usuario tiene su propia carpeta de datos y sus ajustes, y se cambia de usuario desde Ajustes.' },
    ],
  },
  {
    title: 'Funciones',
    items: [
      { q: '¿Tengo que usar todas las secciones?', a: 'No. Desactiva secciones en la configuración inicial o en Ajustes → Secciones e Inicio. Las secciones ocultas conservan sus datos y se pueden volver a activar cuando quieras.' },
      { q: '¿Cómo funciona escribir una tarea como «Llamar a mamá el viernes a las 6»?', a: 'Prodify lee fechas, horas, prioridades (<code>!alta</code>), listas (<code>#nombre</code>), proyectos (<code>+nombre</code>) y repeticiones (<code>cada semana</code>) de lo que escribes, y te enseña lo que ha entendido antes de guardar. Mira <a href="{base}docs/tasks/">Tareas</a>.' },
      { q: '¿Por qué no ha sonado un recordatorio?', a: 'Los recordatorios solo saltan con Prodify abierto, así que déjalo funcionando (puede estar en segundo plano) cuando esperes uno. Cada notificación también se guarda en el panel de la campana.' },
      { q: '¿Necesito IA para usar Prodify?', a: 'No. La IA es opcional y solo funciona con tu propia clave de la API de Claude. Sin ella, las preguntas de reflexión salen de una lista integrada. Mira <a href="{base}docs/ai-connections/">IA y conexiones</a>.' },
      { q: '¿Por qué las películas y los juegos necesitan una clave de API?', a: 'Los detalles de películas y juegos vienen de TMDB y RAWG, que piden una clave gratuita a cada usuario. Libros, series y anime no necesitan clave. Añade las claves en Ajustes → Conexiones.' },
      { q: '¿Puedo importar mi calendario?', a: 'Sí. Calendario → Importar .ics añade eventos exportados de Google Calendar, Outlook y otras apps.' },
      { q: '¿Puedo importar mis juegos?', a: 'Sí, de Steam y RetroAchievements, con tiempo de juego y logros. Vincula tus cuentas en Ajustes → Conexiones.' },
    ],
  },
  {
    title: 'Instalar y actualizar',
    items: [
      { q: 'Windows dice que el instalador no se reconoce. ¿Es seguro?', a: 'El instalador aún no está firmado, así que SmartScreen avisa. Asegúrate de haberlo descargado con los botones de Descargar de esta web y elige Más información → Ejecutar de todas formas.' },
      { q: '¿Cómo instalo el .apk en Android?', a: 'Abre el archivo descargado y permite las instalaciones desde tu navegador o gestor de archivos cuando Android lo pida, y luego toca Instalar.' },
      { q: '¿Cómo actualizo?', a: 'En Linux y Windows, Prodify avisa cuando hay una versión nueva y la instala por ti. También puedes descargarla e instalarla encima de la anterior. Tus datos no se tocan. En Android cada versión se firma con la misma clave, así que se instala como actualización.' },
      { q: '¿Dónde informo de un fallo o propongo una función?', a: 'En la <a href="{base}feedback/">página de opiniones</a>. No hace falta cuenta: escríbelo en el formulario y añade un email si quieres respuesta. También puedes dar 👍 a las ideas de otras personas.' },
    ],
  },
];
