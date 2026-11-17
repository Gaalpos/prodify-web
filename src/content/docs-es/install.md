---
title: Instalar Prodify
description: Descarga e instala Prodify en Linux, Windows o Android, y completa la configuración del primer inicio.
group: Getting started
order: 1
---

# Instalar Prodify

<p class="lead">Prodify es gratis y funciona en Linux, Windows, Android y en tu navegador.</p>

Descarga el archivo para tu sistema: [Linux](https://prodify-cloud.gaalpos.workers.dev/download/linux), [Windows](https://prodify-cloud.gaalpos.workers.dev/download/windows) o [Android](https://prodify-cloud.gaalpos.workers.dev/download/android). Cada enlace descarga siempre la última versión.

| Sistema | Archivo | Notas |
| --- | --- | --- |
| Linux | `Prodify_<versión>_amd64.deb` | Ubuntu, Linux Mint, Debian y otros sistemas basados en Debian |
| Windows | `Prodify_<versión>_x64-setup.exe` | Windows 10 y 11 |
| Android | `Prodify_<versión>_arm64.apk` | Móviles y tabletas ARM de 64 bits |

## App web

No hay nada que instalar: abre la [app web](https://prodify-cloud.gaalpos.workers.dev/app/) en cualquier navegador moderno, en un ordenador, un móvil o una tableta. La configuración se hace en tu primera visita.

- **Tus datos se quedan en ese navegador.** Borrar los datos del sitio de la app web los elimina.
- **Inicia sesión en Prodify Cloud** para guardar una copia y sincronizarla con las apps de escritorio y del móvil. ¿Ya tienes cuenta? [Entrar](https://prodify-cloud.gaalpos.workers.dev/app/#login) va directo al inicio de sesión. Tus archivos se cifran en el navegador antes de subirse.
- **Algunas cosas necesitan la app de escritorio o del móvil**: elegir una carpeta de datos, copias en una segunda unidad, importar de Steam y RetroAchievements, y la IA.
- **Tenla a mano**: usa la opción *Instalar app* o *Añadir a pantalla de inicio* de tu navegador, o guárdala en marcadores.

## Linux

Instala el paquete desde una terminal en la carpeta donde lo descargaste:

```bash
sudo apt install ./Prodify_<versión>_amd64.deb
```

También puedes hacer doble clic en el `.deb` para abrirlo en tu centro de software. Después Prodify aparece en el menú de aplicaciones.

## Windows

Ejecuta el instalador. Aún no está firmado, así que Windows SmartScreen puede mostrar un aviso: elige **Más información → Ejecutar de todas formas**. Prodify se añade al menú Inicio.

## Android

Descarga el `.apk` en tu móvil y ábrelo. La primera vez, Android te pide permitir instalaciones desde tu navegador o gestor de archivos; permítelo y toca **Instalar**.

## Primer inicio

La primera vez que se abre Prodify, una configuración breve te hace unas preguntas. Puedes cambiar cada respuesta más tarde, y **Ajustes → Volver a configurar** la abre de nuevo.

- **Cuenta**: quédate con una **cuenta local** (por defecto, gratis para siempre, sin registro, funciona sin conexión) o inicia sesión en **Prodify Cloud** para sincronizar dispositivos. Mira [Privacidad y sincronización](../privacy-sync/).
- **Secciones**: un paso por sección que explica lo que hace. Quédate con las que quieras; las demás se ocultan, no se borran, y se pueden volver a activar en **Ajustes → Secciones e Inicio**.
- **Hazla tuya**: elige un tema y colores. Hay más en **Ajustes → Apariencia**.
- **Conexiones** (opcional): añade claves para los datos de películas y juegos, vincula RetroAchievements o Steam, y añade una clave de la API de Claude para la IA. Mira [IA y conexiones](../ai-connections/).

## Actualizar

En Linux y Windows, Prodify avisa cuando hay una versión nueva y la instala por ti. También puedes descargarla e instalarla igual que la primera vez: en Linux y Windows sustituye a la versión anterior; en Android se instala como actualización porque cada versión se firma con la misma clave. Una actualización nunca toca tus datos.
