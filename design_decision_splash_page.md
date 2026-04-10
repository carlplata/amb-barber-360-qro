# Análisis de Diseño UX/CRO: Sub-página de Selección ("Splash Page")

## La Pregunta
¿Deberíamos poner una página intermedia ("Splash Page") solo para preguntar "¿Cuál es tu meta?" antes de mostrar la Landing Page principal?

## Veredicto del Experto: **NO RECOMENDADO** como página separada (Sub-página). 
**Sí RECOMENDADO** como Hero interactivo o "Above the Fold".

---

## 1. ¿Por qué NO una Sub-página separada? (El factor "Fricción")
En el diseño moderno de alta conversión, **cada clic cuesta usuarios**.

*   **Tasa de Rebote (Bounce Rate):** Si un usuario llega desde un anuncio (Ads) prometiendo "Curso de Barbería" y se encuentra una página con 6 botones y *cero información*, un % alto se irá por flojera mental o confusión. "Yo solo quería ver precios/horarios".
*   **SEO:** Google prefiere páginas ricas en contenido. Una "Splash Page" casi vacía diluye la autoridad de tu dominio raíz `ambbarber.com`.
*   **Experiencia Móvil:** Cargar dos páginas consume datos y tiempo. En móvil, la inmediatez es rey.

## 2. La Alternativa "Premium" y Efectiva: **"Dynamic Hero Segmentation"**

En lugar de una *página antes*, hacemos que la **primera sección (Hero)** de la Landing Page sea esa herramienta de selección, pero integrada.

### Propuesta de Diseño: "The Bento Grid Selector"
Imagina entrar a la landing y ver:

1.  **Título Impactante (H1):** "Tu Carrera en Barbería Empieza Aquí"
2.  **Subtítulo:** "Dinos qué buscas y te diremos cómo lograrlo."
3.  **Visual:** Un **Grid Bento** (Diseño modular tendencia 2024-2025) hermoso, con tarjetas interactivas que vibran al hover:
    *   [Tarjeta Grande con foto lifestyle] -> **"Quiero mi Negocio"**
    *   [Tarjeta Mediana con foto tijeras] -> **"Quiero Trabajo Rápido"**
    *   [Tarjeta Chica con icono alcancía] -> **"Hobby Familiar"**

### La Magia de la Interacción "One-Page"
Cuando el usuario hace clic en una tarjeta:
*   **Opción A (Scroll Suave):** La página hace scroll automático a la sección relevante, que ahora se ilumina o destaca.
*   **Opción B (Reescritura Dinámica - RECOMENDADA):** Sin recargar la página, el título, los testimonios y los beneficios cambian instantáneamente usando React State.
    *   *Clic en "Negocio"* -> ¡Pum! El texto cambia a: "Certifícate y abre tu Barber Shop en 6 meses".
    *   *Clic en "Ahorro"* -> ¡Pum! El texto cambia a: "Ahorra $15,000 al año cortando a tu familia".

## Conclusión
Hacer una "Sub-página" se siente como web de los años 2000s (Flash intros).
Hacer una **"Segmentación Dinámica en el Hero"** se siente como una App moderna (Apple/Airbnb).

**Recomendación:** Mantener todo en `index.html` pero transformar el Hero en esta herramienta de selección poderosa. Mantiene el SEO, reduce rebote y se ve increíblemente *high-end*.
