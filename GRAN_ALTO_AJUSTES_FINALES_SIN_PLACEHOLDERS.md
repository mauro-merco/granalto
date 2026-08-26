# Gran Alto — Corrección final sin placeholders

## Objetivo

Aplicar una corrección final sobre la landing publicada de Gran Alto para que no quede ningún placeholder, ninguna etiqueta `<img>` con `src=""`, ningún espacio reservado para imágenes inexistentes y ninguna imagen que no ocupe correctamente su contenedor.

Este documento complementa la especificación principal. En caso de contradicción, estas instrucciones tienen prioridad para la eliminación de placeholders, carga de imágenes y terminación visual.

---

## 1. Regla absoluta: cero placeholders

El resultado final no debe contener:

- El texto `IMAGEN PENDIENTE`.
- Componentes `.project-image-placeholder`.
- Elementos con `data-image-slot` sin una imagen real.
- Etiquetas `<img>` con `src=""`, `src={undefined}` o `src={null}`.
- Cards vacías.
- Contenedores que mantengan altura cuando su imagen no existe.
- Íconos de cámara que indiquen recursos pendientes.

Eliminar el componente visual de placeholder o impedir que se renderice en producción.

Si una imagen no existe, aplicar una de estas tres decisiones:

1. Usar una imagen real aprobada según el mapeo de este documento.
2. Convertir el contenido en un bloque textual sin imagen.
3. Eliminar completamente el módulo si depende de un recurso técnico inexistente.

Nunca reemplazar una imagen faltante por otra que represente algo diferente. Por ejemplo, no usar una parrilla como gimnasio ni un lobby como laundry.

---

## 2. Carga obligatoria de las imágenes existentes

Todas estas imágenes existen en:

```text
src/imgs/
```

Importarlas explícitamente, respetando exactamente mayúsculas, guiones y extensiones:

```js
import implantacionImg from "./imgs/IMPLANTACION.jpg";
import fachadaFrontalImg from "./imgs/FACHADA-FRONTAL.png";
import fachadaLateralImg from "./imgs/FACHADA-LATERAL.png";
import lobbyImg from "./imgs/LOBBY.jpg";
import dptoAImg from "./imgs/DEPTO-A.png";
import dptoBImg from "./imgs/DPTO-B.jpg";
import dptoC01Img from "./imgs/DPTO-C-001.jpg";
import dptoC02Img from "./imgs/DPTO-C-002.jpg";
import azoteaDroneImg from "./imgs/AZOTEA-DRONE.jpg";
import quinchoPiscinaImg from "./imgs/QUINCHO-PISCINA.png";
import quinchoDescansoImg from "./imgs/QUINCHO-DESCANSO.jpg";
import salonMultiusoImg from "./imgs/SALON-MULTIUSO.jpg";
```

Si el archivo de imports se encuentra dentro de una subcarpeta de `src`, ajustar solo la cantidad de `../`. El destino final debe seguir siendo `src/imgs/NOMBRE.ext`.

Crear y utilizar este mapa sin cambiar las claves:

```js
export const projectImages = {
  hero: implantacionImg,
  fachadaFrontal: fachadaFrontalImg,
  fachadaLateral: fachadaLateralImg,
  lobby: lobbyImg,
  dptoA: dptoAImg,
  dptoB: dptoBImg,
  dptoC01: dptoC01Img,
  dptoC02: dptoC02Img,
  piscina: azoteaDroneImg,
  amenitiesGeneral: quinchoPiscinaImg,
  parrillaExterior: quinchoDescansoImg,
  parrillaClimatizada: salonMultiusoImg,
};
```

### Error actual que debe corregirse

La versión publicada ya carga hero, fachada frontal, fachada lateral y lobby. Sin embargo, genera etiquetas con `src=""` para:

- Interior Tipología A.
- Interior Tipología B.
- Interior Tipología C, vistas 1 y 2.
- Vista general de amenities.
- Piscina panorámica.
- Parrilla exterior.
- Parrilla climatizada.

Esto no significa que falten los archivos. Significa que el mapa `projectImages`, la prop `src` o el componente de imagen no los está recibiendo correctamente.

Corregir todas las referencias para que cada `<img>` reciba directamente el import correspondiente. No pasar nombres de slots esperando que el componente los resuelva dinámicamente.

Ejemplo correcto:

```jsx
<img src={projectImages.dptoA} alt="Interior de la Tipología A" />
```

Ejemplo incorrecto:

```jsx
<ProjectImage slotId="tipologia-a-render" src="" />
```

---

## 3. Decisión exacta para cada placeholder actual

### 3.1 `proyecto-corte-edificio`

**Decisión:** eliminar el placeholder.

Reemplazar el bloque visual del corte por `FACHADA-FRONTAL.png`.

Mantener al lado los datos:

- 7 niveles de departamentos.
- 1 nivel de amenities.
- 2 niveles de estacionamiento.

No llamar a la imagen “corte del edificio”. Caption exacto:

> Fachada frontal de Gran Alto

La galería posterior puede conservar fachada lateral y lobby. Evitar repetir la fachada frontal dos veces dentro del mismo viewport.

---

### 3.2 Planos de Tipologías A, B y C

**Decisión:** eliminar todos los placeholders de planos.

Como todavía no existen los planos, cada tab debe mostrar solo su render real y los datos de la unidad.

#### Tipología A

- Imagen: `DEPTO-A.png`.
- Superficie: 107 m².
- 2 dormitorios.
- 2 baños.
- 1 dormitorio en suite y 1 dormitorio con baño compartido.

#### Tipología B

- Imagen: `DPTO-B.jpg`.
- Superficie: 93 m².
- 2 dormitorios.
- 2 baños.
- 1 dormitorio en suite y 1 dormitorio con baño compartido.

#### Tipología C

- Imagen principal: `DPTO-C-001.jpg`.
- Segunda vista: `DPTO-C-002.jpg`.
- Superficie: 90 m².
- 2 dormitorios.
- 2 baños.
- 1 dormitorio en suite y 1 dormitorio con baño compartido.

Diseño desktop: imagen 60% y datos 40%. No dejar una segunda columna vacía para el plano.

Eliminar botones como `Ampliar plano` o textos que prometan un plano que todavía no está disponible.

---

### 3.3 `planta-general`

**Decisión:** eliminar completamente el módulo `Planta general`.

Eliminar:

- Título.
- Bajada.
- Placeholder.
- Botón `Ampliar planta general`.
- Espacio vertical reservado.
- Link de navegación si existiera.

La sección Amenities debe comenzar inmediatamente después de Tipologías.

---

### 3.4 `amenity-gimnasio`

**Decisión:** conservar el amenity como card textual, sin imagen.

Card:

**Título:** `Gimnasio`  
**Texto:** `Un espacio pensado para incorporar bienestar y movimiento a la rutina.`

Usar fondo rojo o carbón sólido, número `04` y un ícono lineal simple de actividad física. No reservar espacio de imagen.

---

### 3.5 `amenity-laundry`

**Decisión:** conservar el amenity como card textual, sin imagen.

Card:

**Título:** `Laundry`  
**Texto:** `Una solución práctica integrada a la vida cotidiana del edificio.`

Usar fondo blanco con borde, número `05` y un ícono lineal simple de lavado. No reservar espacio de imagen.

---

### 3.6 `ubicacion-mapa`

**Decisión:** eliminar el placeholder.

Mientras no exista un mapa real o una URL oficial, construir el módulo con:

- Dirección.
- Tres tiempos principales.
- Línea gráfica simple que conecte Gran Alto con Centro Histórico, Eje Corporativo y Aeropuerto.
- CTA `Cómo llegar` únicamente si existe una URL real.

No dibujar un mapa geográfico falso. No dejar un rectángulo vacío simulando un mapa.

---

### 3.7 Fotografías de puntos cercanos

Eliminar los placeholders de:

- Colegio San Andrés.
- Colegio Inter.
- Colegio San José.
- Sanatorio Migone.
- ANDE Central.
- Superseis España.

Reemplazarlos por una lista editorial compacta de seis elementos, sin fotografía:

```text
Colegios
Colegio San Andrés · Colegio Inter · Colegio San José

Salud y servicios
Sanatorio Migone · ANDE Central · Superseis España
```

Diseño desktop: dos columnas. Mobile: una columna. Usar pequeñas líneas rojas o numeración, no emojis.

---

## 4. Mapeo definitivo de imágenes por módulo

| Módulo | Archivo exacto | Uso |
| --- | --- | --- |
| Hero | `IMPLANTACION.jpg` | Fondo principal del hero |
| Concepto del proyecto | `FACHADA-FRONTAL.png` | Imagen principal junto a los datos de niveles |
| Galería del proyecto | `FACHADA-LATERAL.png` | Acceso principal |
| Galería del proyecto | `LOBBY.jpg` | Lobby de acceso |
| Tipología A | `DEPTO-A.png` | Render único de A |
| Tipología B | `DPTO-B.jpg` | Render único de B |
| Tipología C | `DPTO-C-001.jpg` | Render principal de C |
| Tipología C | `DPTO-C-002.jpg` | Segunda vista de C |
| Apertura Amenities | `QUINCHO-PISCINA.png` | Vista panorámica de azotea |
| Piscina panorámica | `AZOTEA-DRONE.jpg` | Card principal |
| Parrilla al aire libre | `QUINCHO-DESCANSO.jpg` | Card de parrilla exterior |
| Parrilla climatizada | `SALON-MULTIUSO.jpg` | Card de parrilla interior |
| CTA final | `FACHADA-LATERAL.png` | Imagen vertical en composición dividida |

No utilizar imágenes fuera de esta tabla salvo el logo oficial ya implementado.

---

## 5. Regla para que las imágenes ocupen todo el contenedor

### Regla base

Aplicar a todas las fotografías y renders:

```css
.media-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  background: #ecece8;
}

.media-frame img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center;
}
```

No usar `height: auto` dentro de contenedores con altura definida, porque deja franjas vacías. No usar `object-fit: contain` para renders o fotografías.

### Excepciones

`object-fit: contain` solo se permite para planos técnicos o logos. En esta versión no hay planos técnicos, por lo que todas las imágenes del contenido deben usar `cover`.

No deformar imágenes con valores simultáneos de ancho y alto sin `object-fit`.

---

## 6. Relación de aspecto y recorte por imagen

### `IMPLANTACION.jpg`

- Contenedor hero: ancho completo.
- Altura: 760 px desktop, 680 px tablet, 620 px mobile.
- `object-fit: cover`.
- `object-position: center 55%` desktop.
- Mobile: `object-position: 58% center` para conservar el edificio.

### `FACHADA-FRONTAL.png`

- Relación de contenedor: 4:5.
- `object-fit: cover`.
- `object-position: center top`.
- No cortar la parte superior del edificio ni el acceso inferior.

### `FACHADA-LATERAL.png`

- Relación: 4:5 o 3:4.
- `object-fit: cover`.
- `object-position: center center`.
- En el CTA final debe ocupar el 100% de la columna izquierda.

### `LOBBY.jpg`

- Relación: 4:3.
- `object-fit: cover`.
- `object-position: center center`.
- No dejar bandas blancas alrededor.

### `DEPTO-A.png`, `DPTO-B.jpg`, `DPTO-C-001.jpg`, `DPTO-C-002.jpg`

- Relación desktop: 2:1.
- Altura mínima: 480 px; máxima: 620 px.
- `object-fit: cover`.
- `object-position: center`.
- Mobile: relación aproximada 4:3 y altura 300–360 px.
- La imagen debe tocar los cuatro bordes de su contenedor.

### `QUINCHO-PISCINA.png`

- Relación: panorámica 16:7 o equivalente.
- Altura desktop: 500–560 px.
- `object-fit: cover`.
- `object-position: center`.

### `AZOTEA-DRONE.jpg`

- Card principal: 16:9.
- Altura: 520–580 px desktop.
- `object-fit: cover`.
- `object-position: center center`.

### `QUINCHO-DESCANSO.jpg` y `SALON-MULTIUSO.jpg`

- Cards: 4:3.
- Altura: 380–440 px desktop.
- `object-fit: cover`.
- `object-position: center`.

---

## 7. Overlays y legibilidad

Oscurecer un poco más el hero, especialmente detrás del título y la bajada:

```css
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.80) 0%,
    rgba(0, 0, 0, 0.62) 46%,
    rgba(0, 0, 0, 0.28) 100%
  );
  pointer-events: none;
}
```

No aplicar `opacity` al hero completo. La imagen puede oscurecerse mediante el pseudo-elemento, pero el texto, los botones y el logo deben permanecer en `opacity: 1`.

En cards con texto superpuesto, utilizar un gradiente inferior, no opacidad global.

---

## 8. Reducción de alturas y espacios vacíos

Después de eliminar placeholders y corregir imágenes:

- Proyecto: máximo aproximado 1.150 px incluyendo galería.
- Tipologías: 900–1.050 px.
- Eliminar Planta general: 0 px.
- Amenities: 1.350–1.600 px como máximo.
- Interiores: 850–1.050 px.
- Ubicación: 700–900 px.
- Inversores: 560–680 px.
- Contacto: mostrar formulario completo o un CTA compacto; no dejar huecos.

No usar `min-height: 100vh` en módulos interiores. La altura debe surgir del contenido real.

---

## 9. Limpieza técnica obligatoria

Antes de terminar, verificar:

```js
document.querySelectorAll('img:not([src]), img[src=""]').length === 0
document.querySelectorAll('.project-image-placeholder').length === 0
document.body.innerText.includes('IMAGEN PENDIENTE') === false
```

También confirmar:

- Ninguna imagen devuelve `naturalWidth === 0`.
- No existen requests 404 de imágenes.
- No hay espacios vacíos donde antes estaban los placeholders.
- No hay contenedores con una imagen más pequeña que su caja.
- Ninguna imagen se deforma.
- No existe scroll horizontal.
- Tipologías A, B y C cambian correctamente.
- La segunda imagen de C aparece únicamente en C o en la galería de interiores.
- Gimnasio y laundry aparecen como cards textuales, no como imágenes falsas.
- La lista de ubicación no contiene placeholders.

---

## 10. Validación visual final

Tomar capturas full-page en:

- Desktop: 1440 px.
- Tablet: 768 px.
- Mobile: 390 px.

Rechazar el resultado si aparece cualquiera de estos problemas:

- Placeholder visible.
- Imagen en blanco.
- Imagen que no toca todos los bordes de su contenedor.
- Franja blanca o gris involuntaria dentro de una imagen.
- Texto del hero con poco contraste.
- Módulo dedicado a una imagen que no existe.
- Más de 160 px de espacio vertical vacío sin intención.
- Cards de diferente altura sin una decisión de composición.
- Recorte que elimine el edificio, la parrilla, la piscina o el ambiente principal.

Al finalizar, informar:

- Archivos modificados.
- Confirmación de que no quedan placeholders.
- Confirmación de que las 12 imágenes de `src/imgs` cargan correctamente.
- Resultado de build y lint.
- Capturas revisadas en desktop, tablet y mobile.
