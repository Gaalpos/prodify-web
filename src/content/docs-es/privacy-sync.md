---
title: Privacidad y sincronización
description: Cuentas locales, contraseñas y cifrado, claves de recuperación, varios usuarios y la sincronización con Prodify Cloud.
group: Your data
order: 21
---

# Privacidad y sincronización

<p class="lead">Prodify es local primero: tus datos se quedan en tu dispositivo salvo que decidas sincronizarlos, y se cifran antes de salir.</p>

## Cuenta local

La opción por defecto. Es gratis para siempre, no necesita registro y funciona sin conexión. Todo se queda en este dispositivo.

## Contraseña y cifrado

En **Ajustes → Cuenta y datos** puedes:

- **Añadir una contraseña**. Prodify la pide al abrirse, y <kbd>Ctrl</kbd> <kbd>L</kbd> lo bloquea al momento.
- **Cifrar tus archivos** en disco con AES-256-GCM, con una clave derivada de tu contraseña. Los archivos cifrados solo se pueden leer dentro de Prodify.
- **Guardar una clave de recuperación**. Si olvidas tu contraseña, la clave de recuperación desbloquea tus datos. Guárdala en un lugar seguro: sin la contraseña ni la clave de recuperación, los datos cifrados no se pueden recuperar.

## Varios usuarios

Varias personas pueden usar Prodify en un mismo ordenador. Cada usuario tiene su propia carpeta de datos y sus ajustes, y se cambia entre ellos desde Ajustes.

## Prodify Cloud

Prodify Cloud mantiene tus dispositivos sincronizados.

1. En la configuración inicial o en **Ajustes → Cuenta y datos**, elige **Prodify Cloud**.
2. Escribe tu email y tu contraseña. ¿Eres nuevo en Prodify Cloud o has olvidado tu contraseña? Elige **Envíame un código** y escribe el código que recibas.
3. Si activaste la **verificación en dos pasos**, escribe también el código de 6 dígitos de tu app de autenticación, o uno de tus códigos de respaldo.
4. Tus archivos se cifran en tu dispositivo con la clave de tu cuenta antes de subirse. El servidor guarda datos que no puede leer.

Inicia sesión con la misma cuenta en otro dispositivo, o en la [app web](../install/#app-web), para sincronizarlo. Tu contraseña de Cloud es la de tu cuenta: la misma que desbloquea tus datos cifrados. Cerrar sesión detiene la sincronización en ese dispositivo; tus datos se quedan tanto ahí como en la nube.

### Listas compartidas

Con Prodify Cloud puedes compartir una lista de tareas con otras personas que también tengan cuenta. Haz clic derecho en la lista y elige **Compartir…**, escribe su email y decide si cada persona **Puede editar** o **Puede ver**. Los cambios llegan a los demás en unos segundos, y la lista también se cifra antes de subirse.

### Planes

| Plan | Almacenamiento | |
| --- | --- | --- |
| Free | 100 MB | Incluido |
| Basic | 5 GB | Próximamente |
| Pro | 50 GB | Próximamente |

## Qué se conecta a internet

Sin Prodify Cloud, Prodify solo se conecta para traer lo que pides: detalles y portadas de colecciones, fotos de ejercicios, el tiempo, la música, Wikipedia y las respuestas de la IA si has añadido una clave.
