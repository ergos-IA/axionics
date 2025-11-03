Aquí tienes el contenido estructurado en formato Markdown (MD), incorporando el análisis funcional y gráfico basado en el brief y el código de inspiración proporcionado.

```md
# 🤖 Brief de Proyecto IA: Axionics Web

## 🚀 Resumen ejecutivo

* **Propósito:** Posicionar Axionics como partner “business-first” en discovery de procesos → automatización → IA aplicada con valor 360° y ROI en ≤90 días.
* **Estilo:** Hero a pantalla completa, fondo tecnológico fijo (imagen/vídeo + partículas), alternancia negro/blanco y secciones “glass” (vidrio translúcido) para un look premium y luminoso.
* **Arquitectura:** Hero, Confianza (logos), Valor 360°, Servicios, Insights, Casos, Impacto/ESG, Assessment, Contacto, Sticky CTA.
* **Marketing:** Eslóganes rotatorios, lead magnet (autoevaluación), i18n ES/EN, SEO técnico (OG + JSON-LD), y eventos GA4 listos para medir.
* **Siguientes pasos:** Elegir assets (vídeo/imagen fundo y logos), cerrar copy definitivo (insights + casos), decidir plataforma (Next.js/Tailwind o WordPress), conectar formularios a Power Automate/CRM.

---

# 📋 Guía detallada del sitio y del proyecto

## 1. Posicionamiento de marca

* **Quiénes somos:** Consultora tecnológica orientada a negocio. Foco: descubrir fricción operativa, automatizar lo repetitivo y desplegar IA útil (no cosmética).
* **Promesa central:** “Procesos superiores. Resultados medibles.”
* **Diferenciación:** Narrativa Valor 360° (crecimiento, operaciones, talento, impacto), tecnología Microsoft/Azure/Power Platform y entregables concretos (roadmap 90 días, flujos productivos, MVP IA).

---

## 2. Eslóganes (rotatorio del hero)

### Usados en la web (activos para rotar):
* Procesos superiores. Resultados medibles.
* Automatiza lo repetitivo. Escala lo valioso.
* Discovery → Automatización → IA con ROI.
* Menos coste. Más velocidad. Clientes felices.

### Opciones de prueba A/B:
* “ROI en 90 días, garantizado por alcance”
* “IA que firma resultados, no presentaciones”
* “Del caos de procesos al crecimiento predecible”

---

## 3. Forma y estilo visual

* Hero 100% de alto con fondo fijo (vídeo silencioso + imagen fallback) + overlay radial y capa de partículas (canvas) para profundidad.
* Paleta: negro real (`#000`) con acentos fríos (azules/menta) y secciones alternas blancas para luminosidad.
* *Glass cards* (blur + transparencia) para Servicios/Contactos y dar efecto “flotante”.
* Tipografía XL (Inter 400/600/800) con CTAs en píldora (`border-radius: 999px`).

---

## 4. Arquitectura de información (página actual)

### Hero
* **Kicker:** “Discovery • Automatización • IA”
* **H1:** Eslóganes rotatorios + gradiente sutil en palabras clave.
* **CTAs:** “Empezar” (contacto) y “Ver cómo” (servicios).
* **Badges:** “Azure & Power Platform”, “ROI en 90 días”, “Procesos E2E”.
* **UX:** “Desliza” como *scroll cue* (indicador de scroll).

### Confianza (marquee de logos)
* Carrusel suave de logotipos (placeholders ahora). Señales sociales sin ruido.

### Valor 360° (blanco)
* 4 pilares: Crecimiento, Operaciones, Talento, Impacto.
* Copy corto, *outcomes* y lenguaje ejecutivo.

### Servicios (negro, glass)
* **Discovery:** workshops, data-pull, business case, roadmap 90 días.
* **Automatización:** Power Apps/Automate, integraciones ERP/CRM, 2–3 flujos productivos.
* **IA aplicada:** Azure OpenAI/ML (clasificación, extracción, predicción), MVP 4–6 semanas.

### Insights (blanco)
* Centro de *thought leadership* (3 artículos). Claves para SEO y autoridad.

### Casos (blanco, carrusel)
* 3 tarjetas con KPI claros (reducciones de coste/tiempo, mejoras de NPS/ETA).

### Impacto & ESG (negro)
* Datos ESG en tiempo real, eficiencia energética, reporting a *stakeholders*.

### Assessment (negro)
* **Lead magnet:** 8 preguntas + email → informe de palancas de ROI.
* Pensado para MQL (Marketing Qualified Lead) y *sales acceleration*.

### Contacto (negro, glass)
* Formulario rápido (nombre/email/reto), contacto directo y ubicación.

### Sticky CTA
* Barra inferior fija: “Haz el assessment” / “Agenda 30 min”.

### i18n ES/EN
* Selector de idioma (demo); textos clave con `data-i18n`.

---

## 5. Técnica y rendimiento

* **SEO técnico:** Etiquetas OpenGraph (OG), JSON-LD de `Organization`, `meta description`.
* **Accesibilidad:** `prefers-reduced-motion`, contrastes altos, semántica HTML.
* **Rendimiento:** `lazy-load` para logos, fallback estático si canvas no carga, overlay para legibilidad.
* **Eventos GA4 (recomendados):**
    * `view_hero`
    * `click_cta_start`
    * `click_cta_how`
    * `submit_assessment`
    * `submit_contact`
    * `scroll_depth`

---

## 6. Flujo de captación y automatización (propuesto)

### Assessment → Power Automate:
* Crea lead en Dataverse/CRM.
* Envía email con informe (plantilla) y cita en Calendly o Bookings.
* Notifica a ventas (Teams/Outlook).

### Contacto → Power Automate:
* Email al equipo + alta en CRM + tarea de seguimiento.

### Cuadro de mando en Power BI:
* Conversión por sección, tasa de scroll, tiempo en Insights, MQL→SQL.

---

## 7. Contenidos y copy (plantillas)

### Hero (máx. 18–22 palabras)
> **Procesos superiores. Resultados medibles.**
>
> Descubrimos fricción, automatizamos lo repetitivo y activamos IA aplicada. ROI en ≤90 días.

* **CTA primaria:** Empezar
* **CTA secundaria:** Ver cómo

### Servicios (microcopy)
#### Discovery
* **Beneficio:** Claridad E2E, prioridades con datos.
* **Entrega:** Roadmap 90 días con casos de uso, inversión y retorno estimado.

#### Automatización
* **Beneficio:** Ciclo más corto, menos errores.
* **Entrega:** 2–3 flujos productivos integrados con ERP/CRM.

#### IA aplicada
* **Beneficio:** Predicción, personalización y control.
* **Entrega:** MVP 4–6 semanas con KPIs de negocio.

### Insights (3 piezas — 45–60 palabras c/u)
* **Guía:** IA con confianza (gobierno, seguridad, coste, rendimiento).
* **Blueprint:** Operaciones autónomas (telemetría, reglas/ML, *closed loop*).
* **Playbook:** RPA + Power Platform (10 patrones con *payback* corto).

### Casos (estructura)
* **Cliente:** — Contexto (1 línea)
* **KPIs:** — 3 métricas duras (%, días, ratio)
* **Stack:** — Azure / Power Platform / Integraciones

---

## 8. Interacciones y motion

* **Partículas:** Líneas/puntos conectándose (canvas), densidad adaptativa.
* **Slogan rotatorio:** Fade suave cada ~2.8s.
* **Marquee:** Desplazamiento lineal (pausa si `prefers-reduced-motion`).
* **Parallax fijo:** Vídeo/imagen + overlay; contenido “flota” por encima.

---

## 9. Opciones de implementación

### Next.js + Tailwind (recomendada para performance/SEO):
* Rutas: `/`, `/insights`, `/casos`, `/esg`.
* Azure Static Web Apps + CDN; imágenes optimizadas; ISR opcional.

### WordPress Block Theme (si priorizas autonomía de edición):
* Bloques para Valor 360°, Servicios, Insights, Casos.
* WPForms + Power Automate (conector) para leads.

---

## 10. KPIs y pruebas

* **KPIs:** CTR hero, `submit_assessment`, `submit_contact`, tiempo en Insights, MQL→SQL.
* **A/B:**
    * Eslóganes (4 variantes).
    * Color/forma de CTA.
    * Hero claro vs oscuro.
    * Marquee on/off.

---

## 11. Riesgos y trade-offs

* **Vídeo de fondo:** +impacto, –rendimiento si pesado → optimizar (<8 MB, H.264, 20 s).
* **Animación:** *wow* vs accesibilidad → ya mitigado con `prefers-reduced-motion`.
* **Densidad de copy:** Mantener microcopy; profundizar en páginas internas (Insights/Casos) para SEO.

---

## 12. Análisis Funcional y Gráfico (Inspirado en HTML)

El código HTML/CSS/JS de ejemplo sirve como un prototipo funcional (Proof of Concept) que valida las directrices de este brief:

### Análisis Gráfico (Estilo Visual)
* **Fondo Fijo y Premium:** El `.bg-video` y `.bg-hero` con `position: fixed` y `object-fit: cover` logran el efecto de "fondo tecnológico fijo" (parallax).
* **Efecto "Glass":** El uso de `backdrop-filter: blur()` y fondos `rgba()` en `.glass-sec`, `.card` y la `.nav` implementa perfectamente el "look premium" y las "glass cards".
* **Paleta:** Las variables CSS (`--bg: #000`, `--card-light: #fff`, `--accent: #a8dcff`) confirman la "alternancia negro/blanco" y los "acentos fríos".
* **Tipografía:** El `.slogan` con `font-size: clamp(...)` y los `.btn` con `border-radius: 999px` cumplen con "Tipografía XL" y "CTAs en píldora".

### Análisis Funcional (Interacción y Estructura)
* **Arquitectura:** La estructura del `<body>` (usando `<section id="...">`) sigue exactamente la Arquitectura de Información definida (Hero, Valor, Servicios, etc.).
* **Interacciones:**
    * **Partículas:** El script de `canvas` (`#webgl`) crea el efecto de "partículas conectándose".
    * **Rotatorio:** El script de `setInterval` para `#slogan` implementa el "slogan rotatorio" con "fade suave".
    * **Marquee:** La animación CSS `scroll` en `.marquee` crea el carrusel de logos.
    * **Accesibilidad:** El JS comprueba `prefers-reduced-motion` para desactivar animaciones, tal como se especificó.
* **Técnica:**
    * **SEO:** El `<head>` implementa correctamente el `JSON-LD`, `meta description` y `og:tags`.
    * **i18n:** El script de `setLang` y los atributos `data-i18n` proveen un mecanismo funcional para el selector ES/EN.

---

## ✅ Checklist de entrega

- [ ] **Imagen:** `assets/axionics-hero.jpg` (2560×1440, <500 KB).
- [ ] **Vídeo:** `assets/axionics-hero.mp4` (1920×1080, ≤8 MB).
- [ ] **Logos:** 5 logos de clientes (SVG/PNG).
- [ ] **Contenido:** 3 *insights* (titular + 50 palabras).
- [ ] **Contenido:** 2 casos con KPIs (antes/después).
- [ ] **Decisión:** Elección de plataforma (Next.js o WordPress).
- [ ] **Técnica:** Conexión Power Automate → Dataverse/CRM.
- [ ] **Técnica:** Alta de métricas GA4 + eventos.
```