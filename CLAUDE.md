# MikeFit — App de Fitness Personal

App de seguimiento de entrenos y nutrición para el coach Mike.
Diseñada para ser instalable en móvil (PWA).

## Stack
- **Vanilla HTML + CSS + JavaScript** — sin frameworks, sin dependencias
- **localStorage** para persistir todos los datos del usuario
- Fuente: **Inter** (Google Fonts)
- Desplegado en **GitHub Pages** vía repositorio `albertomoreno147-cmyk/mikefit`

## Archivos
| Archivo | Descripción |
|---|---|
| `index.html` | App principal — todo el código está aquí |
| `workout.html` | Pantalla de entreno activo en tiempo real |
| `onboarding.html` | Configuración inicial del usuario |
| `manifest.json` | Configuración PWA (nombre, iconos, colores) |
| `CLAUDE.md` | Este archivo |

## Diseño y estilo
- **Inspirado en Fitness Online** (fitnessonline.app)
- Tema: **claro** (fondo blanco/gris muy suave)
- Color acento principal: **teal `#00BEB8`**
- Variables CSS clave:
  - `--bg: #F2F5F8` — fondo general
  - `--surface: #FFFFFF` — cards y nav
  - `--teal: #00BEB8` — acento principal
  - `--text: #1A2332` — texto oscuro
  - `--muted: #8A9BB0` — texto secundario
  - `--shadow: 0 2px 10px rgba(0,0,0,0.06)` — sombra de cards
- Cards con **sombra suave**, no con bordes
- Bordes redondeados: `16px` en cards, `20px` en tabs/pills

## Estructura de navegación (index.html)
```
Header
  ├── Botón reloj (izquierda)
  ├── Título de página (centro)
  └── Botón menú (derecha)
  └── Top tabs (solo en Entrenos): Dashboard | Entrenos | Dieta

Bottom Nav (4 tabs)
  ├── Entrenos → page-home
  │     ├── sub: Dashboard (hero + próximos entrenos + calendario semanal + calendario mensual)
  │     ├── sub: Entrenos (semana + ejercicios del día)
  │     └── sub: Dieta (macros + comidas + nota)
  ├── Progreso → page-progreso (peso + cargas + resumen coach)
  ├── Ejercicios → page-biblioteca (biblioteca con filtro por músculo)
  └── Más → page-perfil (perfil + ajustes + suplementos)
```

## Reglas de desarrollo
1. **Solo vanilla JS** — nada de React, Vue, jQuery ni otros frameworks
2. **Todo en español** — textos de UI, comentarios y commits en español
3. **Siempre hacer git push** tras cada cambio significativo
4. **No romper localStorage** — los datos del usuario viven ahí, no migrar sin cuidado
5. **Mobile-first** — la app se ve en móvil, probar siempre con vista estrecha
6. **Comidas solo en pestaña Dieta** — no mostrarlas en el detalle del día de entreno

## Datos del usuario (localStorage keys)
- `ex_YYYY-MM-DD` — ejercicios del día (estado + series + kg + reps)
- `meals_YYYY-MM-DD` — comidas marcadas del día
- `note_YYYY-MM-DD` — nota diaria
- `peso_log` — historial de peso
- `supps` — estado de suplementos por día
- `mikefit_profile` — perfil del usuario (onboarding)

## Plan de entreno actual
- **Lunes:** PUSH (pecho, hombro, tríceps)
- **Martes:** PULL (espalda, bíceps)
- **Miércoles:** Zona 2 (cardio suave)
- **Jueves:** LEGS (cuádriceps, isquios, glúteo)
- **Viernes:** Full+Core
- **Sábado/Domingo:** Descanso

## Git
- Repositorio: `https://github.com/albertomoreno147-cmyk/mikefit`
- Rama principal: `main`
- El remote tiene el token de GitHub en la URL (renovar si falla el push)
- Mensaje de commits en español, descriptivos

## Próximos pasos pendientes
- [ ] Activar PWA completa (service worker) para instalar en móvil
- [ ] Publicar en App Store con Capacitor
- [ ] Añadir más referencias visuales de Fitness Online
- [ ] Bot de finanzas (proyecto separado)
