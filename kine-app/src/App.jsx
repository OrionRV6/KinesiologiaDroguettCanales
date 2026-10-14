import { useState } from "react";
import {
  Heart, Sparkles, Activity, Dumbbell, Wind, Brain, Accessibility, Home,
  MapPin, Clock, ChevronDown, GraduationCap,
  ShieldCheck, CalendarHeart, Send, Check, HeartHandshake,
} from "lucide-react";

/* ───────── Datos editables ───────── */
const NOMBRE = "Anais Droguett Canales";
const WA_NUM = "56952411472";
const IG = "https://www.instagram.com/anahiis.dc/";
const IG_USER = "@anahiis.dc";
const EMAIL = "droguettcanales1722@gmail.com";
// Foto de Anais (sección "Sobre mí"): guárdala en la carpeta /public.
const FOTO_SOBRE = "/anais.jpeg";
const wa = (txt) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(txt)}`;
const WA = wa("Hola Anais! Quiero agendar una hora de kinesiología.");

const servicios = [
  { icon: Activity, t: "Dolor muscular y articular", d: "Espalda, cuello, hombro, rodilla y tobillo. Evaluación, ejercicio terapéutico y educación para que el dolor no vuelva." },
  { icon: Dumbbell, t: "Kinesiología deportiva", d: "Recuperación de lesiones, retorno seguro al deporte y prevención para quienes entrenan o juegan seguido." },
  { icon: Wind, t: "Kinesiología respiratoria", d: "Ejercicios de respiración y técnicas para mejorar la capacidad pulmonar y la tolerancia al esfuerzo." },
  { icon: Brain, t: "Rehabilitación neurológica", d: "Trabajo de equilibrio, fuerza y movilidad para recuperar autonomía en el día a día." },
  { icon: Accessibility, t: "Adulto mayor", d: "Fuerza funcional, marcha y prevención de caídas, con ejercicios simples y adaptados a cada persona." },
  { icon: Home, t: "Atención a domicilio", d: "Voy hasta tu casa en Providencia y comunas cercanas. Ideal si te cuesta salir o prefieres tu espacio." },
];

const pasos = [
  { t: "Conversamos", d: "Me cuentas qué te duele, desde cuándo y qué te gustaría volver a hacer." },
  { t: "Evaluamos", d: "Revisamos movilidad, fuerza y postura para entender el origen de la molestia." },
  { t: "Trabajamos", d: "Ejercicio terapéutico y técnicas manuales básicas, explicadas paso a paso." },
  { t: "Seguimos en casa", d: "Te llevas una rutina corta y clara para avanzar entre sesiones." },
];

const precios = [
  { t: "Evaluación inicial", p: "$20.000", d: "45 min · anamnesis, evaluación funcional y plan de trabajo" },
  { t: "Sesión individual", p: "$25.000", d: "50 min · ejercicio terapéutico y educación" },
  { t: "Pack 5 sesiones", p: "$110.000", d: "$22.000 por sesión · el más elegido", destacado: true },
  { t: "Sesión a domicilio", p: "$32.000", d: "Desde · Providencia y comunas cercanas" },
];

const motivos = [
  "Dolor de espalda", "Dolor de cuello", "Dolor de rodilla u hombro", "Lesión deportiva",
  "Post operatorio", "Adulto mayor", "Respiratorio", "Otro motivo",
];

const faqs = [
  ["¿Necesito orden médica?", "No es obligatoria para consultar. Si ya tienes un diagnóstico, exámenes o indicaciones de tu médico, tráelos o envíamelos: ayudan mucho."],
  ["¿Cuánto dura una sesión?", "La evaluación inicial dura unos 45 minutos y las sesiones siguientes entre 50 y 60, según lo que necesites."],
  ["¿Dónde atiendes?", "En Providencia y comunas cercanas, además de visitas a domicilio. Al escribirme coordinamos el lugar más cómodo para ti."],
  ["¿Cómo pago?", "Por transferencia o efectivo, al terminar la sesión. Los packs se pagan al inicio."],
  ["¿Quién te supervisa?", "Estudio Kinesiología en la Universidad de las Américas. Mi formación y mis prácticas son guiadas por docentes y profesionales titulados."],
];

const Corazon = ({ className = "" }) => (
  <Heart className={className} fill="currentColor" strokeWidth={0} aria-hidden="true" />
);

const WhatsAppIcon = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3Zm0 23.7c-1.95 0-3.86-.53-5.53-1.52l-.4-.24-3.96 1.02 1.06-3.86-.26-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16 21.9 26.7 16.003 26.7Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
  </svg>
);

const InstagramIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

/* Foto de Anais; si la imagen no existe todavía, muestra un corazón rosado */
function Foto({ src, className = "" }) {
  const [ok, setOk] = useState(true);
  if (!ok)
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 text-white ${className}`}>
        <Corazon className="w-1/3 h-1/3" />
      </div>
    );
  return <img src={src} alt="Anais Droguett Canales" onError={() => setOk(false)} className={`object-cover ${className}`} />;
}

/* Imagen del hero: usa /kine-hero.jpg si existe; si no, esta ilustración de personas haciendo ejercicio */
const FOTO_HERO = "/kine-hero.jpg";

function IlustracionKine() {
  const cabeza = { fill: "#FFE4E6", stroke: "#BE185D", strokeWidth: 4 };
  const brazo = { stroke: "#F472B6", strokeWidth: 12 };
  const pierna = { stroke: "#F472B6", strokeWidth: 13 };
  const torso = { stroke: "#BE185D", strokeWidth: 26 };
  return (
    <svg viewBox="0 0 400 420" className="w-full h-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Personas haciendo ejercicio y estiramientos">
      <defs>
        <linearGradient id="kfondo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE4EE" />
          <stop offset="1" stopColor="#F9A8D4" />
        </linearGradient>
      </defs>
      <rect width="400" height="420" fill="url(#kfondo)" />
      <circle cx="320" cy="85" r="55" fill="#fff" opacity=".45" />
      <circle cx="55" cy="310" r="85" fill="#fff" opacity=".25" />
      <g stroke="#fff" strokeWidth="4" strokeLinecap="round">
        <path d="M200 50v16M192 58h16" /><path d="M45 80v12M39 86h12" /><path d="M360 200v12M354 206h12" />
      </g>
      <rect x="35" y="338" width="330" height="16" rx="8" fill="#F472B6" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Estiramiento con brazos arriba */}
        <polyline points="95,250 80,336" {...pierna} />
        <polyline points="95,250 112,336" {...pierna} />
        <polyline points="95,190 65,150 55,112" {...brazo} />
        <polyline points="95,190 125,150 135,112" {...brazo} />
        <line x1="95" y1="188" x2="95" y2="250" {...torso} />
        <circle cx="95" cy="150" r="17" {...cabeza} />
        {/* Zancada con brazos abiertos */}
        <polyline points="210,240 160,285 118,336" {...pierna} />
        <polyline points="210,240 262,262 262,336" {...pierna} />
        <polyline points="205,190 165,215 150,190" {...brazo} />
        <polyline points="205,190 250,215 265,190" {...brazo} />
        <line x1="205" y1="180" x2="210" y2="240" {...torso} />
        <circle cx="203" cy="140" r="18" {...cabeza} />
        {/* Sentadilla con brazos al frente */}
        <polyline points="308,255 345,275 330,336" {...pierna} />
        <polyline points="308,255 335,282 316,336" stroke="#F9A8D4" strokeWidth="13" />
        <polyline points="318,208 360,212" {...brazo} />
        <line x1="318" y1="198" x2="308" y2="255" {...torso} />
        <circle cx="318" cy="168" r="17" {...cabeza} />
      </g>
    </svg>
  );
}

function HeroImagen() {
  const [ok, setOk] = useState(true);
  if (!ok) return <IlustracionKine />;
  return <img src={FOTO_HERO} alt="Kinesiología y ejercicio" onError={() => setOk(false)} className="w-full h-full object-cover" />;
}

/* ───────── Pedir hora (arma un mensaje de WhatsApp, sin base de datos) ───────── */
function PedirHora() {
  const [f, setF] = useState({ nombre: "", motivo: motivos[0], modalidad: "Presencial", horario: "Mañana" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const enviar = () => {
    const msg = `Hola Anais! Soy ${f.nombre || "(mi nombre)"}. Quiero pedir una hora de kinesiología.\nMotivo: ${f.motivo}\nModalidad: ${f.modalidad}\nHorario preferido: ${f.horario}`;
    window.open(wa(msg), "_blank", "noreferrer");
  };
  const campo = "w-full rounded-2xl border-2 border-pink-100 bg-pink-50/60 px-4 py-3 font-semibold text-[#831843] focus:border-pink-400 focus:outline-none";
  return (
    <div className="bg-white rounded-[2.5rem] p-7 md:p-9 shadow-2xl shadow-pink-200/70 border border-pink-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center"><CalendarHeart className="w-6 h-6" /></span>
        <div>
          <h3 className="display text-2xl font-extrabold text-[#9D174D] leading-tight">Pide tu hora</h3>
          <p className="text-sm text-pink-900/70">Completa y se abre WhatsApp con tu mensaje listo.</p>
        </div>
      </div>
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-bold text-pink-900">Tu nombre</span>
          <input value={f.nombre} onChange={set("nombre")} placeholder="Ej: María" className={`${campo} mt-1`} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-pink-900">¿Qué te trae por aquí?</span>
          <select value={f.motivo} onChange={set("motivo")} className={`${campo} mt-1`}>
            {motivos.map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-bold text-pink-900">Modalidad</span>
            <select value={f.modalidad} onChange={set("modalidad")} className={`${campo} mt-1`}>
              <option>Presencial</option><option>A domicilio</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-bold text-pink-900">Horario</span>
            <select value={f.horario} onChange={set("horario")} className={`${campo} mt-1`}>
              <option>Mañana</option><option>Tarde</option><option>Noche</option><option>Fin de semana</option>
            </select>
          </label>
        </div>
        <button onClick={enviar} className="w-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-lg rounded-full py-3.5 shadow-lg shadow-pink-300 transition flex items-center justify-center gap-2">
          <Send className="w-5 h-5" /> Enviar por WhatsApp
        </button>
      </div>
    </div>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-3xl border border-pink-100 overflow-hidden">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 font-bold text-[#9D174D] hover:bg-pink-50 transition">
        {q}
        <ChevronDown className={`w-5 h-5 shrink-0 text-pink-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-6 pb-5 text-pink-950/75 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF5F8] text-[#831843]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap');
        .display { font-family: 'Baloo 2', 'Nunito', sans-serif; }
        a:focus-visible, button:focus-visible { outline: 3px solid #BE185D; outline-offset: 3px; }
        html { scroll-behavior: smooth; }
        @keyframes flotar { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        .flotar { animation: flotar 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .flotar { animation: none; } }
      `}</style>

      {/* Barra superior */}
      <div className="bg-[#BE185D] text-white text-sm py-2 px-4 text-center">
        Estudiante de Kinesiología UDLA · Atención en Providencia y a domicilio ·{" "}
        <a href={WA} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-pink-200">Escríbeme por WhatsApp</a>
      </div>

      {/* Navegación */}
      <nav className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
            <span className="display text-2xl font-extrabold text-[#9D174D] leading-none">Kinesiología Droguett Canales</span>
          </a>
          <div className="hidden md:flex gap-7 text-sm font-bold">
            <a href="#servicios" className="hover:text-pink-500 transition">Servicios</a>
            <a href="#sesion" className="hover:text-pink-500 transition">Cómo trabajo</a>
            <a href="#precios" className="hover:text-pink-500 transition">Precios</a>
            <a href="#sobre-mi" className="hover:text-pink-500 transition">Sobre mí</a>
            <a href="#preguntas" className="hover:text-pink-500 transition">Preguntas</a>
          </div>
          <a href="#pedir-hora" className="bg-pink-500 text-white px-5 py-2 rounded-full font-bold hover:bg-pink-600 transition shadow-md shadow-pink-200 flex items-center gap-2">
            <CalendarHeart className="w-5 h-5" /> Agendar hora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FFE4EE] to-[#FFF5F8]">
        <Corazon className="absolute -top-6 left-4 w-28 h-28 text-pink-200 rotate-[-15deg]" />
        <Corazon className="absolute bottom-8 left-1/3 w-16 h-16 text-rose-200 rotate-[20deg]" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="display font-extrabold leading-[0.95] text-[#9D174D] text-6xl md:text-7xl">
              Muévete sin dolor
              <span className="block mt-4">
                <span className="inline-block bg-pink-500 text-white rounded-[2rem] px-6 py-1 -rotate-2 shadow-lg shadow-pink-300 text-4xl md:text-5xl">
                  kinesiología
                </span>
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-pink-950/75 max-w-md">
              Atención cercana, explicada con calma y pensada para que vuelvas a hacer lo que te gusta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="bg-[#16A34A] text-white px-7 py-3 rounded-full font-bold hover:bg-[#15803D] shadow-lg shadow-green-200 transition flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" /> Hablar por WhatsApp
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="bg-[#BE185D] text-white px-7 py-3 rounded-full font-bold hover:bg-[#9D174D] shadow-lg shadow-pink-200 transition flex items-center gap-2">
                <InstagramIcon className="w-5 h-5" /> Ver Instagram
              </a>
              <a href="#precios" className="bg-white border-2 border-[#BE185D] text-[#BE185D] px-7 py-3 rounded-full font-bold hover:bg-pink-50 transition">
                Ver precios
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-pink-900/80">
              <span className="flex items-center gap-2"><GraduationCap className="w-5 h-5 text-pink-500" /> Universidad de las Américas</span>
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-pink-500" /> Providencia y alrededores</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-pink-500" /> Respuesta rápida</span>
            </div>
          </div>

          <div className="relative mx-auto w-72 h-80 md:w-96 md:h-[26rem] flotar">
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] rotate-2 shadow-2xl shadow-pink-300 ring-8 ring-white/70">
              <HeroImagen />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-4 py-2 shadow-lg display font-bold text-[#BE185D] -rotate-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Tu cuerpo lo agradece
            </div>
          </div>
        </div>
      </header>

      {/* Servicios */}
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="display text-4xl md:text-5xl font-extrabold text-[#9D174D] text-center">Cómo puedo ayudarte</h2>
        <p className="text-center text-pink-950/70 mt-3 mb-12">Áreas de la kinesiología en las que trabajo, con ejercicio y educación en el centro.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div key={s.t} className={`p-7 bg-white border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-100 transition ${i % 2 ? "rounded-[2rem_2rem_0.75rem_2rem]" : "rounded-[2rem_0.75rem_2rem_2rem]"}`}>
              <div className="w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-4"><s.icon className="w-7 h-7" /></div>
              <h3 className="display text-xl font-bold text-[#9D174D]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pink-950/75">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo es una sesión */}
      <section id="sesion" className="bg-[#FFE4EE] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-extrabold text-[#9D174D] text-center">Así es tu primera sesión</h2>
          <p className="text-center text-pink-950/70 mt-3 mb-12">Sin apuro y sin términos raros.</p>
          <div className="grid md:grid-cols-4 gap-5">
            {pasos.map((p, i) => (
              <div key={p.t} className="bg-white rounded-[2rem] p-6 shadow-lg shadow-pink-200/60">
                <span className="display w-10 h-10 rounded-full bg-pink-500 text-white font-extrabold flex items-center justify-center text-lg mb-3">{i + 1}</span>
                <h3 className="display text-xl font-bold text-[#9D174D]">{p.t}</h3>
                <p className="mt-1 text-sm text-pink-950/75 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="display text-4xl md:text-5xl font-extrabold text-[#9D174D] text-center">Valores</h2>
        <p className="text-center text-pink-950/70 mt-3 mb-12">Precios claros, sin sorpresas. Consulta por convenios y horarios especiales.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {precios.map((p) => (
            <div key={p.t} className={`rounded-[2rem] p-7 flex flex-col ${p.destacado ? "bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-2xl shadow-pink-300 lg:-translate-y-3" : "bg-white border border-pink-100"}`}>
              <h3 className="display text-xl font-bold">{p.t}</h3>
              <p className={`display text-4xl font-extrabold mt-3 ${p.destacado ? "" : "text-pink-600"}`}>{p.p}</p>
              <p className={`mt-3 text-sm leading-relaxed ${p.destacado ? "text-pink-50" : "text-pink-950/70"}`}>{p.d}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 max-w-2xl mx-auto grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold">
          {["Plan de ejercicios para la casa", "Seguimiento por WhatsApp entre sesiones", "Boleta o comprobante si lo necesitas", "Reagendamiento con aviso previo"].map((x) => (
            <li key={x} className="flex items-center gap-2"><Check className="w-5 h-5 text-pink-500 shrink-0" /> {x}</li>
          ))}
        </ul>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="px-4 pb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border border-pink-100 shadow-xl shadow-pink-100 p-8 md:p-12 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-[45%_55%_60%_40%/50%_40%_60%_50%] shadow-xl shadow-pink-200 ring-4 ring-pink-100">
              <Foto src={FOTO_SOBRE} className="w-full h-full" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="display text-4xl font-extrabold text-[#9D174D]">Hola, soy {NOMBRE.split(" ")[0]}</h2>
            <p className="mt-4 text-pink-950/80 leading-relaxed">
              Estudio Kinesiología en la Universidad de las Américas y estoy en mi segundo año. Me encanta entender cómo se mueve el cuerpo y explicarlo de forma simple para que cada persona sea parte de su recuperación.
            </p>
            <p className="mt-3 text-pink-950/80 leading-relaxed">
              El próximo año comienzo mis prácticas clínicas y quiero seguir aprendiendo contigo: escucho, evalúo con cuidado y trabajo siempre dentro de lo que mi formación me permite.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
              <span className="bg-pink-100 text-pink-800 rounded-full px-4 py-2 flex items-center gap-2"><HeartHandshake className="w-4 h-4" /> Trato cercano</span>
              <span className="bg-pink-100 text-pink-800 rounded-full px-4 py-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Basado en evidencia</span>
              <span className="bg-pink-100 text-pink-800 rounded-full px-4 py-2 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> En formación UDLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pedir hora */}
      <section id="pedir-hora" className="bg-gradient-to-br from-[#BE185D] to-[#EC4899] px-4 py-20 relative overflow-hidden">
        <Corazon className="absolute -left-8 -bottom-8 w-44 h-44 text-white/10 rotate-[20deg]" />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="display text-4xl md:text-5xl font-extrabold">¡Agenda ahora!</h2>
            <p className="mt-4 text-lg text-pink-50 max-w-md">
              Cuéntame qué necesitas y coordinamos día, hora y lugar. También puedes escribirme directo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="bg-[#16A34A] hover:bg-[#22C55E] transition px-6 py-3 rounded-full font-bold shadow-lg shadow-pink-900/30 flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" /> Enviar mensaje por WhatsApp
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="bg-white text-[#BE185D] hover:bg-pink-50 transition px-6 py-3 rounded-full font-bold shadow-lg shadow-pink-900/30 flex items-center gap-2">
                <InstagramIcon className="w-5 h-5" /> Ver Instagram
              </a>
            </div>
          </div>
          <PedirHora />
        </div>
      </section>

      {/* Preguntas */}
      <section id="preguntas" className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="display text-4xl md:text-5xl font-extrabold text-[#9D174D] text-center mb-10">Preguntas frecuentes</h2>
        <div className="space-y-3">{faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}</div>
      </section>

      <footer className="bg-white border-t border-pink-100 py-8 px-4 text-center text-sm text-pink-950/70">
        <p className="display text-lg font-bold text-[#9D174D]">{NOMBRE} · Kinesiología</p>
        <p>Providencia, Santiago, y atención a domicilio.</p>
        <p className="mt-1">WhatsApp: +56 9 5241 1472 · Instagram {IG_USER}</p>
        <p className="mt-1">
          Correo:{" "}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-[#9D174D] underline underline-offset-2 hover:text-pink-500">{EMAIL}</a>
        </p>
        <p className="mt-3 max-w-2xl mx-auto text-xs text-pink-950/55">
          Anais es estudiante de Kinesiología de la Universidad de las Américas. Las atenciones se realizan en el marco de su formación y no reemplazan la evaluación de un médico u otro profesional de la salud titulado.
        </p>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a href={WA} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-xl shadow-green-900/30 hover:bg-[#15803D] hover:scale-105 transition">
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
