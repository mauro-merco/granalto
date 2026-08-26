# Gran Alto Inter - Las Mercedes

## Auditoría de landing + plan definitivo de rediseño y contenidos

**Landing auditada:** https://granalto.vercel.app/  
**Fuente principal de producto:** `Gran Alto (2).pdf` (22 páginas)  
**Objetivo:** conservar la capacidad comercial de la landing actual, alinear su identidad con el dossier de Gran Alto y reemplazar información genérica o no respaldada por contenido real del proyecto.

---

# PARTE A — ESPECIFICACIÓN MAESTRA PARA OPENCODE

## 0. Regla de autoridad

Esta parte del documento es la instrucción definitiva de implementación. OpenCode debe trabajar únicamente con este archivo y con los archivos que existan en la carpeta de imágenes del proyecto. **No debe buscar, abrir ni analizar el PDF original.**

Si una explicación de la Parte B contradice esta especificación maestra, prevalece la Parte A.

### Objetivo de la intervención

Modificar la landing existente de Gran Alto, sin reconstruir innecesariamente toda la aplicación. Conservar los componentes que ya funcionen, pero cambiar diseño, textos, imágenes, datos, orden de módulos y comportamiento para obtener la versión definida a continuación.

### Restricciones obligatorias

- No inventar textos, cifras, precios, fechas, porcentajes, empresas, amenities, materiales, contactos ni características.
- No usar imágenes remotas de Unsplash, Pexels, Pixabay ni otros bancos de imágenes.
- No descargar nuevas imágenes.
- No usar el PDF como dependencia del sitio.
- No incluir contenido de 1 o 3 dormitorios.
- No incluir cowork, salón de eventos, patio verde ni vigilancia 24/7.
- No mostrar estadísticas con valor `0`, progreso ficticio ni rentabilidad estimada.
- No mostrar datos placeholder como si fueran reales.
- Si no se encuentra una imagen local adecuada, renderizar el placeholder indicado en este documento.
- Los placeholders deben quedar visibles y bien diseñados, no como imágenes rotas.
- No alterar la información exacta de tipologías y superficies.

---

## 1. Sistema de placeholders de imágenes

Antes de maquetar, buscar imágenes dentro de la carpeta local del proyecto usando coincidencias por nombre, no por posición. La carpeta puede tener un nombre como `images`, `img`, `assets`, `public/images` o equivalente.

### Regla de resolución

Para cada imagen solicitada:

1. Buscar primero un archivo cuyo nombre coincida exactamente con alguno de los nombres sugeridos.
2. Si no existe, buscar por palabras clave contenidas en el nombre.
3. Si hay varias opciones posibles, usar la que tenga mejor resolución y relación de aspecto.
4. Si no hay una coincidencia clara, mostrar el placeholder correspondiente.
5. Nunca asignar una imagen dudosa a un ambiente solo por similitud visual.

### Diseño visual de todos los placeholders

Cada placeholder debe incluir:

- Fondo gris claro `#ECECE8`.
- Borde de 1 px `#CACAC5`.
- Ícono simple de imagen o cámara.
- Etiqueta superior en rojo: `IMAGEN PENDIENTE`.
- Nombre exacto del asset esperado.
- Descripción breve de qué debe mostrar.
- Relación de aspecto requerida.
- `data-image-slot` con el identificador indicado.

Ejemplo conceptual del contenido visible:

> IMAGEN PENDIENTE  
> `hero-edificio-gran-alto`  
> Vista aérea o fachada exterior real del edificio Gran Alto.  
> Formato horizontal 16:9.

### Inventario completo de slots

| ID `data-image-slot` | Nombres de archivo sugeridos | Imagen esperada | Relación recomendada |
| --- | --- | --- | --- |
| `hero-edificio-gran-alto` | `hero-gran-alto`, `gran-alto-aerea`, `fachada-gran-alto`, `portada-gran-alto` | Vista aérea o fachada exterior real del edificio | 16:9 o 3:2 |
| `proyecto-corte-edificio` | `corte-edificio`, `corte-gran-alto`, `niveles-gran-alto` | Corte vertical del edificio con niveles | 4:5 o vertical |
| `planta-general` | `planta-general`, `planta-tipo`, `plano-general` | Plano completo de planta general | Horizontal ancho |
| `tipologia-a-plano` | `tipologia-a-plano`, `plano-a`, `planta-a-107m2` | Plano Tipología A, 107 m² | Horizontal |
| `tipologia-a-render` | `tipologia-a-render`, `interior-a`, `render-a-107m2` | Render interior correspondiente a Tipología A | 16:9 o 4:3 |
| `tipologia-b-plano` | `tipologia-b-plano`, `plano-b`, `planta-b-93m2` | Plano Tipología B, 93 m² | Horizontal |
| `tipologia-b-render` | `tipologia-b-render`, `interior-b`, `render-b-93m2` | Render interior correspondiente a Tipología B | 16:9 o 4:3 |
| `tipologia-c-plano` | `tipologia-c-plano`, `plano-c`, `planta-c-90m2` | Plano Tipología C, 90 m² | Horizontal |
| `tipologia-c-render` | `tipologia-c-render`, `interior-c`, `render-c-90m2` | Render interior correspondiente a Tipología C | 16:9 o 4:3 |
| `amenity-piscina` | `piscina-panoramica`, `piscina-gran-alto`, `amenity-piscina` | Piscina panorámica en azotea | 16:9 |
| `amenity-parrilla-exterior` | `parrilla-aire-libre`, `parrilla-exterior`, `amenity-parrilla-exterior` | Parrilla y estar al aire libre | 4:3 o 3:2 |
| `amenity-parrilla-climatizada` | `parrilla-climatizada`, `quincho-climatizado`, `amenity-parrilla-interior` | Parrilla climatizada interior | 4:3 o 3:2 |
| `amenity-gimnasio` | `gimnasio`, `gym-gran-alto`, `amenity-gimnasio` | Gimnasio del edificio | 4:3 o 3:2 |
| `amenity-laundry` | `laundry`, `lavanderia`, `amenity-laundry` | Laundry del edificio | 4:3 o 3:2 |
| `ubicacion-mapa` | `mapa-gran-alto`, `ubicacion-gran-alto`, `mapa-las-mercedes` | Mapa del dossier con Gran Alto y referencias | 4:3 u horizontal |
| `ubicacion-colegio-san-andres` | `colegio-san-andres` | Fachada del Colegio San Andrés | 4:3 |
| `ubicacion-colegio-inter` | `colegio-inter` | Fachada del Colegio Inter | 4:3 |
| `ubicacion-colegio-san-jose` | `colegio-san-jose` | Fachada del Colegio San José | 4:3 |
| `ubicacion-sanatorio-migone` | `sanatorio-migone` | Fachada del Sanatorio Migone | 4:3 |
| `ubicacion-ande-central` | `ande-central` | ANDE Central | 4:3 |
| `ubicacion-superseis-espana` | `superseis-espana`, `super-seis-espana` | Superseis España | 4:3 |
| `avance-obra-01` | `avance-obra-01`, `obra-gran-alto-01` | Foto real y fechada del avance de obra | 4:3 |
| `avance-obra-02` | `avance-obra-02`, `obra-gran-alto-02` | Segunda foto real y fechada del avance | 4:3 |
| `cierre-edificio` | `cierre-gran-alto`, `gran-alto-noche`, `fachada-gran-alto-02` | Segunda vista real del proyecto para el CTA final | 16:9 |

### Componentes de imagen

Crear un único componente reutilizable, por ejemplo `ProjectImage`, que reciba:

- `slotId`
- `candidateNames`
- `alt`
- `aspectRatio`
- `objectPosition`
- `priority`

Cuando no haya asset, el componente debe mostrar el placeholder. Esto permitirá reemplazar imágenes más adelante sin rehacer la composición.

---

## 2. Sistema visual exacto

### Variables de color

Definir estas variables globales:

```css
--color-bg: #F7F7F4;
--color-surface: #FFFFFF;
--color-brand: #D71920;
--color-brand-dark: #A90F16;
--color-text: #171717;
--color-text-muted: #6B6B68;
--color-border: #D9D9D4;
--color-placeholder: #ECECE8;
--color-placeholder-border: #CACAC5;
```

El rojo es provisional hasta contar con el color oficial. Debe estar centralizado en una variable para reemplazarlo fácilmente.

### Tipografías

- Títulos: `Cormorant Garamond`, fallback `Georgia, serif`.
- Textos, navegación, cifras, labels y botones: `Montserrat`, fallback `Arial, sans-serif`.
- Usar pesos 400, 500, 600 y 700.
- Usar cursiva solo en una palabra o frase breve dentro de títulos.

### Escala

```css
--container: 1240px;
--section-space-desktop: 112px;
--section-space-mobile: 72px;
--radius-card: 8px;
--radius-button: 4px;
```

- H1: `clamp(3rem, 6vw, 5.25rem)`.
- H2: `clamp(2.4rem, 4.5vw, 4rem)`.
- H3: `clamp(1.55rem, 2.4vw, 2.1rem)`.
- Texto grande: `clamp(1.12rem, 1.5vw, 1.35rem)`.
- Cuerpo: `1rem–1.125rem`, line-height mínimo `1.6`.

### Textura

Crear una textura topográfica sutil mediante un asset local si existe con palabras `textura`, `topografia` o `gran-alto-pattern`. Si no existe, no inventarla con una imagen externa. Se puede simular solamente con líneas SVG abstractas propias, sin copiar mapas reales. Opacidad máxima: 7%.

### Botones

- Primario: fondo rojo, texto blanco, borde rojo.
- Hover primario: rojo oscuro.
- Secundario claro: fondo transparente, texto carbón, borde carbón.
- Secundario sobre imagen oscura: texto blanco, borde blanco.
- Alto mínimo: 48 px.
- No usar botones dorados, verdes ni completamente redondeados.

---

## 3. Estructura definitiva y copy literal

Implementar los siguientes módulos exactamente en este orden.

### MÓDULO 01 — Header

**Acción sobre landing actual:** conservar funcionalidad y reemplazar estética y navegación.

**Logo:** usar el logo local oficial. Si no existe, mostrar texto `Gran Alto` y debajo `Inter - Las Mercedes`; no recrear un logo falso.

**Links exactos:**

- Proyecto
- Tipologías
- Amenities
- Ubicación
- Contacto

**CTA exacto:** `Solicitar información`

**Comportamiento:**

- Transparente sobre el hero.
- Fondo blanco con borde inferior al hacer scroll.
- Logo y links blancos sobre el hero; carbón después del scroll.
- Menú mobile accesible.
- El CTA lleva a `#contacto`.

---

### MÓDULO 02 — Hero

**Acción sobre landing actual:** reemplazar por completo imagen, título, bajada, métricas y colores. Eliminar el texto `Tu nuevo hogar en Las Mercedes`, la imagen genérica de piscina/vivienda y las métricas `2 & 3 habitaciones`, `Amenities` y `En obra`.

**Imagen:** slot `hero-edificio-gran-alto`.

**Eyebrow exacto:**

> GRAN ALTO · INTER - LAS MERCEDES

**H1 exacto:**

> Arquitectura pensada para permanecer.

**Bajada exacta:**

> 21 departamentos de 2 dormitorios en Las Mercedes, diseñados para mantener su valor, funcionalidad y calidad con el paso del tiempo.

**Datos exactos:**

- `21` / Departamentos
- `3` / Tipologías
- `90 a 107 m²` / Superficies
- `1 nivel` / Amenities

**CTA primario:** `Conocé las tipologías` → `#tipologias`  
**CTA secundario:** `Solicitar información` → `#contacto`

**Diseño:** overlay negro de 45–60%, contenido alineado abajo a la izquierda, altura mínima 760 px desktop y 680 px mobile; nunca más de 100vh.

---

### MÓDULO 03 — Franja editorial

**Acción sobre landing actual:** reemplazar la marquesina dorada actual.

**Texto repetido exacto:**

> Gran Alto · Las Mercedes · Arquitectura · Funcionalidad · Calidad ·

Fondo blanco, texto carbón, separadores y línea superior/inferior rojos. Animación horizontal lenta; detener con hover y `prefers-reduced-motion`.

---

### MÓDULO 04 — Concepto del proyecto

**Acción sobre landing actual:** reemplazar la sección `Elegancia, calidez & vida de barrio` y sus cuatro cards genéricas.

**Ancla:** `id="proyecto"`

**Eyebrow exacto:** `GRAN ALTO`

**H2 exacto:**

> Algunas decisiones trascienden las tendencias.

**Párrafo exacto:**

> Gran Alto Inter - Las Mercedes fue concebido a partir de una idea simple: crear espacios que mantengan su valor, funcionalidad y calidad con el paso del tiempo. La arquitectura, las proporciones y la escala del proyecto priorizan la experiencia de quienes lo habitan, en una propuesta pensada para disfrutarse hoy y durante muchos años.

**Imagen:** slot `proyecto-corte-edificio`.

**Datos exactos:**

- `7 niveles` — Departamentos
- `1 nivel` — Amenities
- `2 niveles` — Estacionamiento

No agregar otras cifras.

---

### MÓDULO 05 — Tipologías

**Acción sobre landing actual:** reemplazar completamente el selector de 1, 2 y 3 dormitorios y la tarjeta `Familiar amplitud para crecer`.

**Ancla:** `id="tipologias"`

**Eyebrow:** `TIPOLOGÍAS`

**H2:**

> Tres tipologías. Una misma forma de vivir mejor.

**Bajada:**

> Departamentos de 2 dormitorios con distribuciones pensadas para aprovechar cada espacio y acompañar distintos modos de vivir.

Crear tabs accesibles con estos nombres exactos:

#### Tab A

- Nombre: `Tipología A`
- Superficie: `107 m²`
- Datos: `2 dormitorios` · `2 baños`
- Configuración: `1 dormitorio en suite y 1 dormitorio con baño compartido.`
- Plano: slot `tipologia-a-plano`
- Render: slot `tipologia-a-render`
- CTA: `Consultar disponibilidad de la Tipología A`

#### Tab B

- Nombre: `Tipología B`
- Superficie: `93 m²`
- Datos: `2 dormitorios` · `2 baños`
- Configuración: `1 dormitorio en suite y 1 dormitorio con baño compartido.`
- Plano: slot `tipologia-b-plano`
- Render: slot `tipologia-b-render`
- CTA: `Consultar disponibilidad de la Tipología B`

#### Tab C

- Nombre: `Tipología C`
- Superficie: `90 m²`
- Datos: `2 dormitorios` · `2 baños`
- Configuración: `1 dormitorio en suite y 1 dormitorio con baño compartido.`
- Plano: slot `tipologia-c-plano`
- Render: slot `tipologia-c-render`
- CTA: `Consultar disponibilidad de la Tipología C`

**Comportamiento:**

- Tipología A activa por defecto.
- Cambiar plano, render y datos al seleccionar un tab.
- Plano clickeable con modal/lightbox y zoom.
- No bloquear planos detrás del formulario.
- Cada CTA desplaza al formulario y preselecciona la tipología elegida.

---

### MÓDULO 06 — Planta general

**Acción:** agregar módulo nuevo después de Tipologías.

**Eyebrow:** `PLANTA GENERAL`

**H2:**

> Un proyecto de escala cuidada.

**Texto exacto:**

> Una distribución pensada para equilibrar privacidad, circulación y calidad de vida en cada nivel.

**Imagen:** slot `planta-general`.

**CTA:** `Ampliar planta general`

Abrir el plano en modal con zoom. En mobile no generar overflow horizontal en la página.

---

### MÓDULO 07 — Amenities

**Acción sobre landing actual:** reemplazar por completo la lista de ocho amenities. Eliminar piscina genérica, terraza panorámica como ítem separado, cowork, salón de eventos, patio/verde, vigilancia 24/7 y cocheras como amenity.

**Ancla:** `id="amenities"`

**Eyebrow:** `AMENITIES`

**H2:**

> El último nivel, pensado para disfrutar.

**Bajada exacta:**

> Espacios para encontrarse, entrenar, descansar y disfrutar de la ciudad desde una nueva perspectiva.

**Cards exactas:**

1. `Piscina panorámica`  
   Texto: `Una vista abierta sobre Asunción para disfrutar desde la azotea.`  
   Imagen: `amenity-piscina`
2. `Parrilla al aire libre`  
   Texto: `Un espacio exterior para compartir encuentros y disfrutar al aire libre.`  
   Imagen: `amenity-parrilla-exterior`
3. `Parrilla climatizada`  
   Texto: `Un ambiente interior preparado para disfrutar durante todo el año.`  
   Imagen: `amenity-parrilla-climatizada`
4. `Gimnasio`  
   Texto: `Un espacio pensado para incorporar bienestar y movimiento a la rutina.`  
   Imagen: `amenity-gimnasio`
5. `Laundry`  
   Texto: `Una solución práctica integrada a la vida cotidiana del edificio.`  
   Imagen: `amenity-laundry`

**Diseño:** piscina como card principal ocupando dos columnas; las otras cuatro en cards secundarias. En mobile, una columna.

---

### MÓDULO 08 — Interiores

**Acción sobre landing actual:** reemplazar galería genérica y eliminar chips de materiales no confirmados: `Madera natural`, `Piedra y travertino`, `Vidrio y metal`, `Textiles cálidos`.

**Eyebrow:** `INTERIORES`

**H2:**

> Espacios que se sienten propios.

**Texto exacto:**

> Ambientes amplios, luminosos y funcionales, con distribuciones pensadas para acompañar la vida cotidiana.

Mostrar los slots `tipologia-a-render`, `tipologia-b-render` y `tipologia-c-render` en una galería. Caption exacto de cada imagen:

- `Interior · Tipología A`
- `Interior · Tipología B`
- `Interior · Tipología C`

No afirmar materiales o terminaciones que no estén indicados en este documento.

---

### MÓDULO 09 — Ubicación

**Acción sobre landing actual:** mantener la intención, reemplazar contenido genérico por referencias concretas. Eliminar emojis.

**Ancla:** `id="ubicacion"`

**Eyebrow:** `UBICACIÓN`

**H2:**

> Cerca de todo. En Las Mercedes.

**Dirección visible:**

> José Berges 1411 · Asunción

Añadir al lado una etiqueta discreta en modo desarrollo: `DATO A VALIDAR ANTES DE PUBLICAR`. Esta etiqueta debe poder ocultarse con una variable `PUBLICATION_READY`. Si la variable es falsa, debe verse; si es verdadera, no.

**Texto exacto:**

> Gran Alto se integra a un entorno consolidado, con colegios, salud, servicios y conexiones urbanas a pocos minutos del proyecto.

**Tiempos exactos:**

- `5 min` — Centro Histórico
- `10 min` — Eje Corporativo
- `20 min` — Aeropuerto

**Mapa:** slot `ubicacion-mapa`.

**Puntos cercanos:**

- Colegio San Andrés — slot `ubicacion-colegio-san-andres`
- Colegio Inter — slot `ubicacion-colegio-inter`
- Colegio San José — slot `ubicacion-colegio-san-jose`
- Sanatorio Migone — slot `ubicacion-sanatorio-migone`
- ANDE Central — slot `ubicacion-ande-central`
- Superseis España — slot `ubicacion-superseis-espana`

**CTA:** `Cómo llegar`

Mientras no exista una URL oficial de Google Maps, el CTA debe quedar deshabilitado con atributo `aria-disabled="true"` y texto auxiliar `Enlace de ubicación pendiente`.

---

### MÓDULO 10 — Avance de obra condicional

**Acción sobre landing actual:** eliminar porcentajes actuales `0%`, `85%` y `15%`, la frase sobre estructura completada y todas las fotos genéricas de construcción.

Crear el módulo, pero renderizarlo únicamente si existe contenido real en una configuración `projectProgress` con fecha, texto y al menos una imagen local.

**Ancla:** `id="avance"`

**Eyebrow:** `AVANCE DE OBRA`

**H2:**

> Un proyecto que avanza con compromiso.

**Texto exacto base:**

> Conocé la evolución real de Gran Alto a través de actualizaciones fechadas y fotografías del proyecto.

**Imágenes esperadas:** slots `avance-obra-01` y `avance-obra-02`.

Si no existen imágenes reales y fecha, no mostrar absolutamente nada de este módulo, ni siquiera el título.

---

### MÓDULO 11 — Inversores

**Acción sobre landing actual:** conservar el enfoque comercial, pero reemplazar todas las estadísticas en cero y la imagen genérica de skyline.

**Ancla:** `id="inversores"`

**Eyebrow:** `PARA INVERSORES`

**H2:**

> Una propuesta pensada para sostener valor en el tiempo.

**Texto exacto:**

> Gran Alto combina una ubicación conectada, una escala residencial cuidada y tipologías funcionales de 90 a 107 m². Una propuesta concebida para conservar calidad, vigencia y funcionalidad con el paso del tiempo.

**Argumentos exactos:**

1. `Ubicación conectada en Las Mercedes.`
2. `Un proyecto de escala cuidada, con 21 departamentos.`
3. `Tres tipologías de 2 dormitorios.`
4. `Superficies de 90 a 107 m².`
5. `Amenities definidos para la vida cotidiana.`

**CTA exacto:** `Recibir información comercial`

Usar fondo rojo o carbón, sin imagen de skyline. No mencionar ROI, renta, valorización porcentual ni demanda.

---

### MÓDULO 12 — Formulario de contacto

**Acción sobre landing actual:** conservar estructura, actualizar copy y opciones.

**Ancla:** `id="contacto"`

**Eyebrow:** `CONTACTO`

**H2:**

> Conocé Gran Alto.

**Texto exacto:**

> Recibí disponibilidad, condiciones comerciales y asesoramiento sobre la tipología que mejor se adapta a vos.

**Beneficios exactos:**

- Información de tipologías y superficies.
- Disponibilidad actualizada.
- Condiciones comerciales.
- Atención de un asesor.

**Campos y labels exactos:**

1. `Nombre y apellido` — obligatorio.
2. `WhatsApp o teléfono` — obligatorio.
3. `Correo electrónico` — obligatorio.
4. `¿Qué te interesa?` — Vivir / Invertir / Ambas opciones.
5. `Tipología de interés` — Tipología A · 107 m² / Tipología B · 93 m² / Tipología C · 90 m² / Necesito asesoramiento.
6. `¿Cómo preferís que te contactemos?` — WhatsApp / Llamada / Correo electrónico.

**Botón exacto:** `Solicitar información`

**Texto legal visible:**

> Al enviar el formulario, aceptás que el equipo de Gran Alto se contacte con vos para brindarte información sobre el proyecto y declarás haber leído la Política de Privacidad.

No simular envíos exitosos. Si no existe backend, conservar validación local y mostrar claramente en desarrollo: `Integración de formulario pendiente`.

---

### MÓDULO 13 — Preguntas frecuentes

**Acción sobre landing actual:** conservar acordeón y reemplazar preguntas/respuestas.

**Eyebrow:** `PREGUNTAS FRECUENTES`

**H2:**

> Todo lo que necesitás saber.

**Preguntas y respuestas exactas:**

1. **¿Dónde está ubicado Gran Alto?**  
   `Gran Alto está ubicado en José Berges 1411, en Las Mercedes, Asunción. La dirección debe validarse antes de la publicación definitiva.`
2. **¿Qué tipologías de departamentos ofrece?**  
   `El proyecto cuenta con tres tipologías de 2 dormitorios: Tipología A de 107 m², Tipología B de 93 m² y Tipología C de 90 m².`
3. **¿Cómo se distribuyen los departamentos?**  
   `Las tres tipologías incluyen 2 dormitorios y 2 baños, con 1 dormitorio en suite y 1 dormitorio con baño compartido.`
4. **¿Qué amenities tendrá el edificio?**  
   `Gran Alto contará con piscina panorámica, parrilla al aire libre, parrilla climatizada, gimnasio y laundry.`
5. **¿Cuántos departamentos tendrá Gran Alto?**  
   `El proyecto contará con 21 departamentos distribuidos en 7 niveles residenciales.`
6. **¿El proyecto cuenta con estacionamiento?**  
   `Gran Alto contempla 2 niveles de estacionamiento. Consultá con un asesor las condiciones correspondientes a cada unidad.`
7. **¿Cómo puedo conocer disponibilidad y condiciones comerciales?**  
   `Completá el formulario y un asesor se pondrá en contacto para compartirte la información actualizada.`

No incluir por ahora preguntas sobre fecha de entrega, financiación, precio, reserva o porcentaje de obra porque no hay respuestas confirmadas.

---

### MÓDULO 14 — CTA final

**Acción sobre landing actual:** conservar módulo y reemplazar copy e imagen.

**Imagen:** slot `cierre-edificio`. Si no existe, usar `hero-edificio-gran-alto`; si tampoco existe, mostrar placeholder.

**Eyebrow:** `EL PRÓXIMO PASO`

**H2:**

> Tu próximo lugar puede empezar acá.

**Texto exacto:**

> Conocé las tipologías, consultá disponibilidad y descubrí una nueva forma de vivir Las Mercedes.

**CTA primario:** `Quiero conocer Gran Alto` → `#contacto`  
**CTA secundario:** `Consultar por WhatsApp`

El CTA de WhatsApp debe usar una variable de configuración. Mientras no exista un número oficial, debe quedar deshabilitado y mostrar `WhatsApp pendiente de configuración`.

---

### MÓDULO 15 — Footer

**Acción sobre landing actual:** conservar estructura, eliminar datos falsos o genéricos.

**Descriptor exacto:**

> Arquitectura, funcionalidad y calidad en Las Mercedes.

**Navegación:**

- Proyecto
- Tipologías
- Amenities
- Ubicación
- Contacto

**Datos visibles:**

- `José Berges 1411 · Asunción` con etiqueta de validación mientras `PUBLICATION_READY=false`.
- WhatsApp: mostrar solo si existe número oficial configurado.
- Correo: mostrar solo si existe correo oficial configurado.
- Instagram: mostrar solo si existe URL oficial configurada.

**Legal:**

- `© 2026 Gran Alto. Todos los derechos reservados.`
- `Política de Privacidad`

Eliminar `www.granaltoliving.com.py`, `hola@granaltoliving.com.py`, `+595 981 234 567` y el enlace genérico a Instagram, salvo que se confirmen expresamente como oficiales.

---

## 4. Configuración de contenido pendiente

Centralizar los datos todavía no confirmados en un único archivo de configuración, por ejemplo:

```ts
export const projectConfig = {
  publicationReady: false,
  address: "José Berges 1411, Asunción",
  addressValidated: false,
  googleMapsUrl: "",
  whatsappNumber: "",
  commercialEmail: "",
  instagramUrl: "",
  privacyUrl: "",
  formEndpoint: "",
  projectProgress: null,
};
```

No duplicar estos datos en componentes. Cuando un valor esté vacío:

- No inventarlo.
- Ocultar el dato o mostrar el estado pendiente descrito en este documento.
- Mantener la interfaz visualmente terminada.

---

## 5. Componentes actuales que deben eliminarse o reemplazarse

Eliminar del resultado final:

- Hero con vivienda/piscina genérica.
- Todo asset proveniente de `images.unsplash.com`.
- Claims `Elegancia, calidez & vida de barrio` y `Hecho para quedarse` como ejes principales.
- Selector 1 dormitorio / 2 dormitorios / 3 dormitorios.
- Nombre de tipología `Familiar`.
- Frase `amplitud para crecer`.
- Bloque que exige formulario para ver el plano.
- Cowork.
- Salón de eventos.
- Patio y verde.
- Vigilancia 24/7.
- Cocheras presentadas como amenity.
- Chips de materiales no confirmados.
- Fotos genéricas de obra.
- Porcentajes actuales de avance.
- Estadísticas `0`, `0%`, `0 min` y `0/7` del bloque inversores.
- Imagen genérica de skyline.
- Datos de contacto y links genéricos.
- Grandes espacios vacíos generados por animaciones o alturas fijas.

---

## 6. Criterios técnicos obligatorios

### Visibilidad y animaciones

- Ningún texto, imagen, CTA o formulario puede quedar invisible si falla JavaScript o no se dispara un observer.
- El estado inicial del contenido debe ser visible.
- Animaciones solamente como mejora progresiva.
- Con `prefers-reduced-motion: reduce`, eliminar marquesina automática, parallax, fades largos y traslaciones.
- No usar `min-height: 100vh` en módulos interiores.

### Responsive

- Verificar 360, 390, 768, 1024, 1440 y 1920 px.
- No permitir scroll horizontal de página.
- Tabs de tipologías convertidos en selector/accordion accesible si no caben en mobile.
- Planos ampliables en modal.
- Grillas en una columna por debajo de 768 px.
- WhatsApp flotante sin superposición con formulario, FAQ o footer.

### Imágenes

- `object-fit: cover` en renders y fotos.
- `object-fit: contain` en planos y corte del edificio.
- Incluir `width` y `height` o `aspect-ratio` para evitar layout shift.
- Hero con `fetchpriority="high"` cuando exista asset real.
- Lazy load desde el segundo módulo visual.
- Generar WebP/AVIF desde los assets locales si el stack ya incluye pipeline de optimización.
- No editar, deformar ni recortar planos de forma que se pierda información.

### Accesibilidad

- Un único H1.
- H2 por sección y H3 en cards.
- Contraste WCAG AA.
- Focus visible.
- Tabs con roles ARIA correctos.
- Acordeón operable con teclado.
- Modales con focus trap, cierre por Escape y botón visible.
- Labels asociados a campos; no depender solo del placeholder.

### SEO

**Title exacto:**

> Gran Alto Inter Las Mercedes | Departamentos en Asunción

**Meta description exacta:**

> Conocé Gran Alto: 21 departamentos de 2 dormitorios, tipologías de 90 a 107 m² y amenities en Las Mercedes, Asunción.

**H1 único:** `Arquitectura pensada para permanecer.`

Configurar Open Graph con el slot `hero-edificio-gran-alto` cuando exista imagen real.

### Analítica

Preparar eventos con estos nombres:

- `cta_hero_tipologias`
- `cta_hero_contacto`
- `select_tipologia_a`
- `select_tipologia_b`
- `select_tipologia_c`
- `open_plano_tipologia`
- `open_planta_general`
- `cta_inversores`
- `form_start`
- `form_submit`
- `whatsapp_click`
- `maps_click`
- `faq_open`

Si no hay herramienta de analítica configurada, emitirlos mediante una función central `trackEvent()` sin romper la app.

---

## 7. Validación final que OpenCode debe ejecutar

Antes de considerar terminado el cambio:

1. Ejecutar build, lint y tests existentes.
2. Abrir la landing en desktop y mobile.
3. Confirmar que no exista ninguna petición a Unsplash u otro banco de imágenes.
4. Confirmar que no aparezcan 1 o 3 dormitorios.
5. Confirmar que las superficies sean exactamente 107, 93 y 90 m².
6. Confirmar que existan exactamente cinco amenities.
7. Confirmar que no existan cifras en cero ni datos inventados.
8. Confirmar que cada asset ausente muestre su placeholder descriptivo.
9. Confirmar que no haya imágenes rotas.
10. Confirmar que no haya overflow horizontal.
11. Confirmar navegación, tabs, modales, acordeón y formulario con teclado.
12. Confirmar que el contenido siga visible con animaciones reducidas y con JavaScript de animación desactivado.
13. Informar al finalizar:
    - archivos modificados;
    - slots de imagen encontrados;
    - slots que siguen como placeholder;
    - datos comerciales todavía pendientes;
    - resultado de build/lint/tests.

---

# PARTE B — ANÁLISIS Y FUNDAMENTOS

Esta parte explica las decisiones de la especificación anterior. No reemplaza ni flexibiliza las instrucciones de la Parte A.

---

## 1. Diagnóstico ejecutivo

La landing actual tiene una base estratégica mejor que la del PDF para captar consultas: navegación completa, llamados a la acción, formulario, WhatsApp, preguntas frecuentes y una secuencia que acompaña al usuario desde el descubrimiento hasta el contacto.

El problema no es la estructura, sino la falta de correspondencia con el producto y su identidad real:

- La estética actual usa verde oscuro, crema y dorado; el PDF construye la marca con blanco, rojo, negro/gris, textura topográfica y una composición mucho más arquitectónica y editorial.
- La landing comunica departamentos de **1, 2 y 3 dormitorios**, mientras que el PDF presenta únicamente tres tipologías de **2 dormitorios**: A de 107 m², B de 93 m² y C de 90 m².
- La landing incluye amenities no acreditados en el PDF: cowork, salón de eventos, patio/verde y vigilancia 24/7.
- Omite amenities confirmados: parrilla al aire libre, parrilla climatizada y laundry.
- Usa mayormente imágenes genéricas de Unsplash, incluso en hero, interiores, obra y ciudad. Esto reduce credibilidad y no representa el producto real.
- Presenta datos aparentemente provisorios o placeholders: teléfono `+595 981 234 567`, correo `hola@granaltoliving.com.py`, Instagram genérico y varios indicadores en `0`.
- La captura de página completa muestra grandes vacíos entre módulos. Esto sugiere secciones dependientes de animaciones/lazy load que no aparecen correctamente en todos los contextos o alturas excesivas en los contenedores.

### Conclusión

No conviene rehacer la landing desde cero. Conviene mantener su arquitectura de conversión, corregir toda la información no respaldada y trasladar el sistema visual del PDF a una experiencia web más limpia, creíble y directa.

---

## 2. Qué conservar de la landing actual

Conservar estos elementos porque aportan valor comercial y no compiten con el PDF:

- Header con navegación por anclas.
- CTA principal visible desde el hero.
- Acceso persistente a WhatsApp.
- Narrativa general: proyecto → tipologías → amenities → ubicación → confianza → contacto.
- Formulario con intención del interesado: vivir / invertir / ambas opciones.
- Bloque de preguntas frecuentes.
- CTA final antes del footer.
- Tono cálido y residencial, siempre que se combine con datos concretos.
- Idea de posicionamiento relacionada con permanencia y valor en el tiempo.

### Conservar, pero ajustar

- **Sección para inversores:** mantenerla, pero quitar estadísticas inventadas, valores en cero y afirmaciones cuantitativas no documentadas.
- **Avance de obra:** mantener solo si se cuenta con porcentajes, fecha e imágenes reales y actualizadas.
- **Interiores:** mantener como galería de renders reales del proyecto, no como catálogo de terminaciones no confirmado.
- **FAQ:** mantener, pero actualizar todas las respuestas según la información real.

---

## 3. Información confirmada por el PDF

Esta es la información que sí puede incorporarse a la landing:

### Identidad y concepto

- Nombre: **Gran Alto**.
- Descriptor: **Inter - Las Mercedes**.
- Concepto rector: decisiones, arquitectura, proporciones y calidad pensadas para mantener su valor, funcionalidad y vigencia con el paso del tiempo.

### Escala del proyecto

- **21 departamentos**.
- **7 niveles de departamentos**.
- **1 nivel exclusivo de amenities**.
- **2 niveles de estacionamiento**.

### Ubicación

- Dirección informada en el dossier: **José Berges 1411**.
- Barrio/zona: **Las Mercedes, Asunción**.
- Referencias de conectividad:
  - Centro Histórico: **5 min**.
  - Eje Corporativo: **10 min**.
  - Aeropuerto: **20 min**.
- Lugares cercanos mostrados:
  - Colegio San Andrés.
  - Colegio Inter.
  - Colegio San José.
  - Sanatorio Migone.
  - ANDE Central.
  - Superseis España.
  - Gran Hotel del Paraguay.
  - Club Olimpia.

### Tipologías

| Tipología | Superficie | Dormitorios | Baños | Configuración informada |
| --- | ---: | ---: | ---: | --- |
| A | 107 m² | 2 | 2 | 1 dormitorio en suite + 1 dormitorio con baño compartido |
| B | 93 m² | 2 | 2 | 1 dormitorio en suite + 1 dormitorio con baño compartido |
| C | 90 m² | 2 | 2 | 1 dormitorio en suite + 1 dormitorio con baño compartido |

### Amenities confirmados

- Parrilla al aire libre.
- Piscina panorámica.
- Parrilla climatizada.
- Gimnasio.
- Laundry.

### Material gráfico disponible en el PDF

- Vista aérea y fachada del edificio.
- Corte vertical del proyecto.
- Mapa de ubicación.
- Fotografías de puntos cercanos.
- Planta general.
- Planos de tipologías A, B y C.
- Renders interiores de las tres tipologías.
- Planta de azotea.
- Renders/fotografías de amenities.

---

## 4. Inconsistencias que deben corregirse antes de publicar

### Correcciones obligatorias

1. Reemplazar `1, 2 y 3 dormitorios` por **tres tipologías de 2 dormitorios**.
2. Reemplazar los tabs actuales por **Tipología A / Tipología B / Tipología C**.
3. Eliminar cowork, salón de eventos, patio y verde y vigilancia 24/7, salvo confirmación escrita posterior del desarrollador.
4. Agregar parrilla al aire libre, parrilla climatizada y laundry.
5. Sustituir todas las imágenes de Unsplash por renders, planos y fotografías reales del dossier o por material original en alta resolución.
6. Eliminar las estadísticas de inversores que hoy aparecen en cero.
7. No publicar porcentajes de avance sin una fuente real, una fecha de actualización y fotografías de la obra.
8. Reemplazar datos de contacto placeholder por los datos oficiales.
9. Corregir la ubicación: la landing dice `José Berges entre Manuel Frutos y Gral. Mariano Melgarejo`; el PDF indica `José Berges 1411`. Confirmar la forma oficial antes de publicar y usar una sola versión en todo el sitio.
10. Reemplazar el mapa genérico de Las Mercedes por un pin exacto del proyecto.

### Datos a validar con el cliente/desarrollador

- Teléfono y WhatsApp oficiales.
- Correo comercial oficial.
- Perfil oficial de Instagram.
- URL definitiva del dominio.
- Dirección exacta y coordenadas.
- Disponibilidad actual por tipología.
- Precios, moneda, financiación y forma de reserva.
- Fecha estimada de entrega.
- Estado y porcentaje real de obra.
- Si cada unidad incluye cochera o si se vende aparte.
- Desarrolladora, constructora, arquitecto/comercializadora y logos correspondientes.
- Memoria de terminaciones y especificaciones constructivas.
- Situación legal/comercial necesaria para el disclaimer.

---

## 5. Dirección visual propuesta

### Idea rectora

**Arquitectura que permanece.**

La web debe sentirse contemporánea, precisa y sobria. El PDF aporta una identidad clara, pero en pantalla conviene reducir la cantidad de textura para ganar legibilidad y velocidad.

### Paleta

Usar como base:

| Rol | Color sugerido | Uso |
| --- | --- | --- |
| Fondo principal | `#F7F7F4` | Secciones claras y fondos editoriales |
| Blanco | `#FFFFFF` | Tarjetas, planos y áreas de descanso |
| Rojo Gran Alto | `#D71920` provisional | CTA, títulos destacados, líneas y numeración |
| Rojo oscuro | `#A90F16` | Hover y estados activos |
| Carbón | `#171717` | Texto principal |
| Gris medio | `#6B6B68` | Texto secundario |
| Gris línea | `#D9D9D4` | Divisores y bordes |

> El rojo debe tomarse del archivo maestro del logo o del manual de marca. El hexadecimal indicado es una aproximación visual del PDF, no un valor oficial.

### Qué retirar de la identidad actual

- Verde petróleo dominante.
- Dorado como color principal de botones y detalles.
- Exceso de degradados oscuros.
- Imágenes urbanas o residenciales genéricas que no pertenecen al proyecto.
- Tarjetas con efecto vidrio si reducen contraste o alejan la estética del dossier.

### Tipografía

- **Títulos editoriales:** una serif de alto contraste similar a la utilizada por la marca. Si no se dispone de la fuente original: `Cormorant Garamond`, `DM Serif Display` o `Playfair Display` como alternativas.
- **Texto, navegación, datos y botones:** `Montserrat`, `Inter` o la sans oficial de marca.
- Usar itálica solo como gesto editorial en palabras clave, no en párrafos completos.

### Recursos gráficos

- Incorporar la textura topográfica del PDF de forma sutil, con opacidad baja, solo en separadores o fondos puntuales.
- Usar líneas rojas delgadas, numeración y mucho espacio en blanco.
- Presentar planos en blanco/negro con llamadas rojas.
- Evitar fondos texturados detrás de textos largos.
- Priorizar composición asimétrica: imagen amplia + bloque de datos compacto.

### Sistema UI

- Bordes discretos; radio bajo o medio, no excesivamente redondeado.
- Botón primario rojo con texto blanco.
- Botón secundario blanco/transparente con borde carbón o rojo.
- Ancho máximo de contenido: 1200–1280 px.
- Espaciado vertical de secciones en desktop: 96–128 px; en mobile: 64–80 px.
- Cuerpo: 17–19 px desktop; 16–18 px mobile.
- H1: 64–80 px desktop y 42–52 px mobile.
- H2: 44–60 px desktop y 34–42 px mobile.

---

## 6. Arquitectura definitiva de la landing

### 0. Header

**Conservar**, con estos links:

- Proyecto
- Tipologías
- Amenities
- Ubicación
- Contacto

CTA: **Solicitar información**

En mobile, menú simple y WhatsApp flotante sin tapar campos ni botones.

---

### 1. Hero

**Visual:** vista aérea/fachada real del proyecto, preferentemente la portada del dossier en alta resolución.  
**Eyebrow:** `GRAN ALTO · INTER - LAS MERCEDES`

**H1 recomendado:**

> Arquitectura pensada para permanecer.

**Bajada:**

> 21 departamentos de 2 dormitorios en Las Mercedes, diseñados para mantener su valor, funcionalidad y calidad con el paso del tiempo.

**Datos rápidos:**

- 21 departamentos
- 3 tipologías
- 90 a 107 m²
- Amenities en azotea

**CTA primario:** `Conocé las tipologías`  
**CTA secundario:** `Solicitar información`

No usar en el hero una piscina o una vivienda genérica: el primer impacto debe mostrar el edificio real.

---

### 2. Concepto del proyecto

**Eyebrow:** `GRAN ALTO`

**H2:**

> Algunas decisiones trascienden las tendencias.

**Texto:**

> Gran Alto Inter - Las Mercedes fue concebido a partir de una idea simple: crear espacios que mantengan su valor, funcionalidad y calidad con el paso del tiempo. La arquitectura, las proporciones y la escala del proyecto priorizan la experiencia de quienes lo habitan, en una propuesta pensada para disfrutarse hoy y durante muchos años.

**Composición:** texto editorial a la izquierda y corte del edificio a la derecha.

**Cifras:**

- 7 niveles de departamentos
- 1 nivel de amenities
- 2 niveles de estacionamiento

---

### 3. Tipologías

**H2:** `Tres tipologías. Una misma forma de vivir mejor.`

Usar tabs o selector horizontal:

- Tipología A — 107 m²
- Tipología B — 93 m²
- Tipología C — 90 m²

Cada panel debe incluir:

- Plano real ampliable.
- Render interior correspondiente.
- 2 dormitorios.
- 2 baños.
- 1 dormitorio en suite.
- 1 dormitorio con baño compartido.
- CTA contextual: `Consultar disponibilidad de la Tipología A/B/C`.

No bloquear el plano completo detrás del formulario. Mostrarlo mejora la evaluación del producto; la conversión debe buscar disponibilidad, precios o asesoramiento.

---

### 4. Planta general

Agregar una sección breve con la planta completa del nivel:

**H2:** `Un proyecto de escala cuidada`

**Texto:**

> Una distribución pensada para equilibrar privacidad, circulación y calidad de vida en cada nivel.

Incluir zoom o lightbox. En mobile, evitar que el plano quede ilegible: habilitar ampliación controlada, no scroll horizontal permanente.

---

### 5. Amenities

**H2:** `El último nivel, pensado para disfrutar.`

Mostrar solo los cinco amenities confirmados:

1. Piscina panorámica.
2. Parrilla al aire libre.
3. Parrilla climatizada.
4. Gimnasio.
5. Laundry.

Propuesta de diseño: una imagen principal grande de la piscina y una grilla editorial de cuatro imágenes secundarias. Usar los nombres del PDF sin reinterpretaciones.

---

### 6. Interiores

**H2:** `Espacios que se sienten propios.`

Usar exclusivamente los tres renders interiores del PDF. Si no existe memoria de terminaciones, no afirmar materiales específicos como madera natural, travertino, vidrio, metal o textiles cálidos.

**Texto sugerido:**

> Ambientes amplios, luminosos y funcionales, con distribuciones pensadas para acompañar la vida cotidiana.

---

### 7. Ubicación

**H2:** `Cerca de todo. En Las Mercedes.`

**Dirección:** `José Berges 1411, Asunción` — publicar solo después de validación final.

**Tiempos destacados:**

- 5 min del Centro Histórico.
- 10 min del Eje Corporativo.
- 20 min del Aeropuerto.

**Entorno cercano:** mostrar seis tarjetas con los sitios del dossier:

- Colegio San Andrés.
- Colegio Inter.
- Colegio San José.
- Sanatorio Migone.
- ANDE Central.
- Superseis España.

Agregar mapa real con pin exacto y enlace `Cómo llegar`.

---

### 8. Avance y respaldo

Mantener esta sección solo con datos verificables.

**Versión si hay material actualizado:**

- Fecha visible: `Actualizado en [mes/año]`.
- Galería de fotografías reales.
- Hitos terminados/en curso/próximos.
- Porcentaje global solo si lo informa formalmente la constructora.

**Versión si todavía no hay información:** eliminar temporalmente el módulo. Un `0%` perjudica más de lo que ayuda.

---

### 9. Bloque para inversores

**H2:** `Una propuesta pensada para sostener valor en el tiempo.`

**Argumentos permitidos:**

- Ubicación conectada en Las Mercedes.
- Escala de 21 departamentos.
- Tipologías de 90 a 107 m².
- Arquitectura y funcionalidad pensadas para perdurar.
- Proyecto con espacios residenciales y amenities definidos.

No publicar rentabilidad, valorización esperada, demanda o retorno sin un estudio que los respalde.

CTA: `Recibir información comercial`.

---

### 10. Formulario

**H2:** `Conocé Gran Alto.`

Campos recomendados:

- Nombre y apellido.
- WhatsApp/teléfono.
- Correo.
- Interés: vivir / invertir / ambas opciones.
- Tipología: A 107 m² / B 93 m² / C 90 m² / necesito asesoramiento.
- Preferencia de contacto.

**CTA:** `Solicitar información`

**Microcopy:**

> Recibí disponibilidad, condiciones comerciales y asesoramiento sobre la tipología que mejor se adapta a vos.

Incluir política de privacidad real y mensaje de éxito después del envío.

---

### 11. FAQ

Preguntas recomendadas:

1. ¿Dónde está ubicado Gran Alto?
2. ¿Qué tipologías están disponibles?
3. ¿Qué incluye cada departamento?
4. ¿Qué amenities tendrá el edificio?
5. ¿El proyecto cuenta con estacionamiento?
6. ¿En qué etapa se encuentra la obra?
7. ¿Cuándo está prevista la entrega?
8. ¿Qué formas de pago y financiación existen?
9. ¿Cómo puedo coordinar una visita?

Las respuestas sobre cochera, entrega, obra, precios y financiación deben completarse únicamente con información oficial.

---

### 12. CTA final y footer

**H2:** `Tu próximo lugar puede empezar acá.`

**CTA:** `Quiero conocer Gran Alto`

Footer:

- Logo oficial.
- Dirección validada.
- WhatsApp, correo e Instagram oficiales.
- Links internos.
- Política de privacidad.
- Datos de desarrolladora/comercializadora si corresponde.

---

## 7. Matriz de decisión: landing actual vs PDF

| Elemento actual | Decisión | Reemplazo o ajuste |
| --- | --- | --- |
| Hero residencial genérico | Reemplazar | Fachada/vista aérea real de Gran Alto |
| Verde + crema + dorado | Reemplazar | Blanco + rojo + carbón + gris |
| “Tu nuevo hogar en Las Mercedes” | Ajustar | Mensaje diferencial sobre permanencia y arquitectura |
| 1, 2 y 3 dormitorios | Eliminar | Tipologías A, B y C; todas de 2 dormitorios |
| Tarjeta familiar 107 m² | Reconvertir | Tipología A con plano y render real |
| Planos bloqueados por formulario | Cambiar | Planos visibles; captación por disponibilidad/precio |
| 8 amenities | Corregir | 5 amenities confirmados por el dossier |
| Galería de materiales | Validar | Usar renders; no inventar especificaciones |
| Mapa de Las Mercedes | Mejorar | Dirección/pin exacto + tiempos del PDF |
| Avance con valores 0/85/15 | Validar o retirar | Solo cifras reales, fechadas y con evidencia |
| Métricas para inversores en cero | Eliminar | Argumentos cualitativos respaldados |
| Formulario | Conservar | Cambiar selector por tipologías A/B/C |
| FAQ | Conservar | Actualizar respuestas y retirar afirmaciones no confirmadas |
| Fotografías Unsplash | Eliminar | Material real del proyecto |

---

## 8. Correcciones de experiencia y desarrollo

### Layout y animaciones

- Revisar todas las secciones con `min-height: 100vh` o alturas fijas: la página muestra vacíos excesivos en la captura completa.
- El contenido esencial nunca debe depender de que una animación se dispare para ser visible.
- Aplicar un estado inicial legible cuando JavaScript falle o cuando `prefers-reduced-motion` esté activo.
- Evitar efectos de aparición con grandes traslaciones verticales.
- Limitar animaciones a 300–600 ms.
- Verificar que carruseles y tabs puedan operarse con teclado.

### Responsive

- Probar en 360, 390, 768, 1024, 1440 y 1920 px.
- Los planos deben abrirse en lightbox o modal ampliable en mobile.
- No permitir overflow horizontal en marquesinas, tabs ni planos.
- El botón flotante de WhatsApp no debe superponerse al formulario o al footer.
- El header debe conservar contraste sobre imágenes claras y oscuras.

### Performance

- Exportar imágenes en AVIF/WebP y conservar JPG como fallback cuando haga falta.
- Usar diferentes tamaños con `srcset` y `sizes`.
- Hero: idealmente menos de 300–400 KB en desktop.
- Lazy load desde la segunda sección; no aplicarlo al hero/LCP.
- Precargar logo, fuente crítica y hero.
- Reducir el uso de videos o parallax pesado.
- Evitar cargar el PDF de 90+ MB como recurso web; extraer y optimizar cada asset.

### Accesibilidad

- Contraste AA en textos, botones y overlays.
- Foco visible en links, tabs, acordeones y campos.
- Labels persistentes en el formulario.
- Alt text descriptivo y específico.
- Respetar `prefers-reduced-motion`.
- Jerarquía semántica: un solo H1; H2 por sección; H3 para cards.

### SEO y medición

- Title sugerido: `Gran Alto Inter Las Mercedes | Departamentos en Asunción`.
- Description sugerida: `Conocé Gran Alto: 21 departamentos de 2 dormitorios, tipologías de 90 a 107 m² y amenities en Las Mercedes, Asunción.`
- Open Graph con fachada real.
- Schema sugerido: `ApartmentComplex` o `Residence`, con dirección validada.
- Medir: CTA hero, selector de tipología, descarga/zoom de plano, WhatsApp, inicio y envío de formulario, mapa y FAQ.
- Registrar en cada conversión la tipología consultada y el origen/campaña.

---

## 9. Orden de implementación

### Prioridad 0 — No publicar sin resolver

- Datos de contacto reales.
- Dirección exacta.
- Tipologías correctas.
- Amenities correctos.
- Retiro de cifras en cero y datos inventados.
- Sustitución del hero genérico.

### Prioridad 1 — Producto definitivo

- Nueva paleta y tipografía.
- Hero real.
- Concepto + escala del edificio.
- Tipologías A/B/C completas.
- Planta general.
- Amenities reales.
- Ubicación con tiempos y puntos cercanos.
- Formulario actualizado.

### Prioridad 2 — Confianza y optimización

- Estado de obra verificable.
- Memoria de terminaciones.
- Equipo/desarrolladora/comercializadora.
- Condiciones comerciales.
- FAQ completas.
- SEO, analítica, performance y accesibilidad.

---

## 10. Checklist final de aceptación

- [ ] No queda ninguna imagen de Unsplash o banco genérico.
- [ ] Todas las imágenes pertenecen a Gran Alto o están expresamente aprobadas.
- [ ] Se muestran Tipologías A, B y C, todas de 2 dormitorios.
- [ ] Superficies correctas: 107, 93 y 90 m².
- [ ] Amenities correctos: piscina panorámica, parrilla exterior, parrilla climatizada, gimnasio y laundry.
- [ ] Se indican 21 departamentos, 7 niveles residenciales, 1 de amenities y 2 de estacionamiento.
- [ ] Dirección, mapa y datos de contacto están validados.
- [ ] No existen estadísticas en cero ni porcentajes no confirmados.
- [ ] El rojo coincide con el color oficial de marca.
- [ ] Los planos se leen y amplían correctamente en mobile.
- [ ] No hay secciones vacías ni contenido invisible por animaciones.
- [ ] Formulario y WhatsApp funcionan y registran conversiones.
- [ ] Mensajes de éxito/error del formulario están implementados.
- [ ] Política de privacidad enlazada y operativa.
- [ ] Lighthouse revisado en mobile y desktop.
- [ ] Pruebas cross-browser realizadas.

---

## 11. Criterio final

La versión definitiva debe combinar dos fortalezas:

1. **Del PDF:** identidad, producto real, planos, renders, ubicación, escala y concepto arquitectónico.
2. **De la landing actual:** estructura comercial, navegación, CTAs, formulario, FAQ y orientación a conversión.

La landing no debe parecer un brochure pegado en una web ni una plantilla inmobiliaria genérica. Debe sentirse como la extensión digital de Gran Alto: precisa, sobria, arquitectónica y respaldada por información concreta.
