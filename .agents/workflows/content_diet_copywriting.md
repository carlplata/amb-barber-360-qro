---
description: Metodología de Content Diet Copywriting para ventas por chat (WhatsApp, Messenger, GHL)
---

# Skill: Content Diet Copywriting (Chat Edition)

Esta skill define el estándar de comunicación para leads que ingresan por canales de mensajería instantánea. El objetivo es maximizar la conversión reduciendo la fricción cognitiva y la fatiga de chat.

## 1. Principios Fundamentales
- **Carga Frontal de Valor:** La propuesta o el gancho debe estar en la primera línea (visible en notificaciones).
- **Ingeniería Inversa del Éxito:** El mensaje se diseña desde el CTA/Próximo paso hacia atrás.
- **Micro-conversiones:** Cada mensaje busca un "sí" o una respuesta corta antes de pasar a la siguiente etapa.
- **Tono "Punto Medio":** Ni corporativo frío, ni demasiado informal informal. Humano, experto y cercano.

## 2. El Protocolo de Interacción (Workflow)

### Fase A: El Welcome Hook (Saludo)
- **Regla:** Reconocer la fuente (anuncio/web) y entregar el valor prometido de inmediato.
- **Estructura:** Hola [Nombre]! Vi que vienes de [Fuente]. Aquí tienes [Promesa]. ¿Te gustaría que te contara cómo [Beneficio]?

### Fase B: Cualificación Progresiva (GHL Chat Mode)
- **Protocolo de "1 Sola Pregunta":** Prohibido enviar listas de preguntas.
- **Acolchado Conversacional (Padding):** Siempre validar la respuesta anterior antes de preguntar lo siguiente.
  - *Ejemplo Mal:* "¿Cuál es tu presupuesto? ¿Quién decide?"
  - *Ejemplo Bien:* "Entiendo, [Respuesta]. ¡Suena a un plan ambicioso! Solo por curiosidad, ¿quién más estaría involucrado en esta decisión final?"
- **Preguntas BANT Camufladas:** No usar jerga de ventas. Convertir "Autoridad" en "¿Quién más revisará esto?".

### Fase C: El CTA Táctil (Cierre)
- **Opciones de Decisión Simple:** Dar a elegir entre dos opciones claras (A o B).
- **CTA Progresivo:** "¿Te parece bien si agendamos una breve llamada de 10 min mañana para aterrizar esto?"

## 3. Listado Anti-Fricción (Checklist de Revisión)
1. **¿El mensaje es visualmente corto?** (Menos de 3 párrafos de 2 líneas cada uno).
2. **¿Hay solo una pregunta clara al final?**
3. **¿El lenguaje es "Chat-Natural"?** (Uso moderado de emojis, sin lenguaje de e-mail corporativo).
4. **¿Se eliminó el "Relleno"?** (Si una palabra no aporta nutrición informativa o emocional, se borra).

## 4. Implementación en GoHighLevel
- Usar nodos de 'Wait for reply' después de cada pregunta.
- Implementar 'Padding' mediante el uso de campos personalizados (`{{contact.first_name}}`, etc.).
- Usar ramas If/Else para personalizar la respuesta según la categoría del lead.
