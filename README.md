# 🌸 Kinesiología · Anais Droguett Canales

**Página web para dar a conocer los servicios de kinesiología de Anais y facilitar que sus pacientes pidan hora.**

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-F472B6?style=for-the-badge&logo=lucide&logoColor=white)

</div>

---

## ✨ ¿Qué es esto?

Una página de una sola vista (*landing page*), 100 % frontend y sin base de datos, pensada para que las personas conozcan a Anais, vean qué hace y cuánto cuesta, y le escriban directo por **WhatsApp** o **Instagram**.

El diseño es rosado y pastel, con formas redondeadas y tipografía amigable (**Baloo 2** y **Nunito**), en la misma línea de la web de Pocas Pulgas.

## 🩷 Qué incluye

| Sección | Qué muestra |
| --- | --- |
| **Hero** | Presentación, botones a WhatsApp e Instagram y datos clave |
| **Servicios** | Dolor muscular y articular, deportiva, respiratoria, neurológica, adulto mayor y domicilio |
| **Primera sesión** | Los 4 pasos de una atención: conversamos, evaluamos, trabajamos y seguimos en casa |
| **Valores** | Evaluación, sesión individual, pack de 5 sesiones y visita a domicilio |
| **Sobre mí** | Presentación de Anais y su formación en la UDLA |
| **Pedir hora** | Formulario que arma el mensaje y abre WhatsApp, sin guardar nada |
| **Preguntas frecuentes** | Acordeón con las dudas más comunes |
| **Footer** | Contacto y aviso de estudiante en formación |

Además: menú fijo, botón flotante de WhatsApp, diseño adaptable a celular y animaciones que respetan `prefers-reduced-motion`.

## 🛠️ Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para los iconos

## 🚀 Cómo correrlo en tu computador

Necesitas tener [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clona el repositorio
git clone https://github.com/<tu-usuario>/<nombre-del-repo>.git
cd <nombre-del-repo>

# 2. Instala las dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm run dev
```

Luego abre la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

Para generar la versión final:

```bash
npm run build     # crea la carpeta dist/
npm run preview   # la prueba en local
```

## 🗂️ Estructura

```
├── public/
│   ├── anais.jpeg        # Foto de Anais (sección "Sobre mí")
│   └── kine-hero.png     # Imagen principal del inicio
├── src/
│   ├── App.jsx           # Toda la página
│   ├── main.jsx
│   └── index.css         # Directivas de Tailwind
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ Cómo personalizarla

Casi todo lo que cambia con el tiempo está al inicio de `src/App.jsx`:

| Constante | Para qué sirve |
| --- | --- |
| `NOMBRE` | Nombre que aparece en la página |
| `WA_NUM` | Número de WhatsApp, con código de país y sin `+` |
| `IG`, `IG_USER` | Link y usuario de Instagram |
| `EMAIL` | Correo de contacto |
| `FOTO_HERO`, `FOTO_SOBRE` | Rutas de las imágenes dentro de `public/` |
| `servicios`, `pasos`, `precios`, `motivos`, `faqs` | Textos, precios y preguntas de cada sección |

**Imágenes:** si `public/kine-hero.png` no existe, la página dibuja por código una ilustración equivalente. Para usar otra foto, guárdala en `public/` con el mismo nombre o cambia la ruta en `FOTO_HERO`.

## 🌐 Publicarla gratis

Funciona en cualquier hosting de sitios estáticos:

- **[Vercel](https://vercel.com/)** o **[Netlify](https://www.netlify.com/)**: conecta el repositorio de GitHub y se publica solo con cada cambio. Comando de build `npm run build`, carpeta de salida `dist`.
- **GitHub Pages**: agrega `base: "/<nombre-del-repo>/"` en `vite.config.js` y publica el contenido de `dist/`.

## ⚠️ Aviso importante

Anais es **estudiante de Kinesiología de la Universidad de las Américas** (segundo año). Las atenciones se realizan en el marco de su formación y no reemplazan la evaluación de un médico u otro profesional de la salud titulado. Antes de publicar precios o promocionar atención a público, conviene confirmar con la universidad qué está permitido durante la etapa de formación y prácticas.

## 💌 Contacto

- 📸 Instagram: [@anahiis.dc](https://www.instagram.com/anahiis.dc/)

---

<div align="center">

Hecho con 💗 para Anais, te amo.

</div>
