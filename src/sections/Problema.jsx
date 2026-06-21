import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

const sintomas = [
  {
    titulo: 'Formulários genéricos',
    texto: 'O cliente preenche um Google Forms com a cara de outra empresa, não a tua.',
  },
  {
    titulo: 'Informação dispersa',
    texto: 'Medidas, gostos, horários e moradas espalhados entre WhatsApp, email e papel.',
  },
  {
    titulo: 'Sem visão do conjunto',
    texto: 'Não há forma rápida de ver quantos eventos estão em preparação esta semana.',
  },
  {
    titulo: 'Briefing feito à pressa',
    texto: 'A equipa chega ao local sem um documento claro do que foi acordado com o cliente.',
  },
];

// Pequenos "fragmentos" do caos — recortes inclinados que simulam
// notas, mensagens e abas dispersas, para tornar o problema visível
// e não só descrito em texto.
const fragmentos = [
  { tipo: 'whatsapp', texto: 'Oi! Confirma a morada da quinta?', rot: -6, top: '4%', left: '2%' },
  { tipo: 'nota', texto: 'paleta: dourado ou champanhe??', rot: 4, top: '40%', left: '0%' },
  { tipo: 'aba', texto: 'Resposta_Formulário_v3_FINAL(2).pdf', rot: -3, top: '74%', left: '6%' },
  { tipo: 'whatsapp', texto: '12 pessoas têm restrição alimentar', rot: 5, top: '14%', left: '52%' },
  { tipo: 'nota', texto: 'falta confirmar horário do DJ', rot: -4, top: '54%', left: '58%' },
  { tipo: 'aba', texto: 'Google Forms (respostas) - Cópia', rot: 3, top: '86%', left: '48%' },
];

function Fragmento({ tipo, texto, rot, top, left }) {
  const base = 'absolute px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-sm shadow-lg shadow-black/40 max-w-[150px] sm:max-w-[220px]';
  const estilos = {
    whatsapp: 'bg-[#DCF8C6] text-[#1A1A1A] rounded-2xl rounded-tl-sm font-body',
    nota: 'bg-[#FFF3B0] text-[#3D2F1A] font-body -rotate-1',
    aba: 'bg-marfim/95 text-sepia rounded-md border-t-2 border-dourado font-mono text-[11px]',
  };

  return (
    <div
      className={`${base} ${estilos[tipo]}`}
      style={{ top, left, transform: `rotate(${rot}deg)` }}
    >
      {texto}
    </div>
  );
}

export default function Problema() {
  return (
    <section className="relative px-6 sm:px-10 lg:px-20 py-28 lg:py-36 bg-carvao overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>O dia a dia sem isto</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl leading-tight"
        >
          Organizar eventos de luxo não devia parecer um caos de abas abertas.
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 mt-16 items-center">
          {/* Colagem visual do caos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-[22rem] sm:h-[26rem] order-2 lg:order-1"
            aria-hidden="true"
          >
            {fragmentos.map((f, i) => (
              <motion.div
                key={f.texto}
                initial={{ opacity: 0, scale: 0.85, rotate: f.rot - 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: f.rot }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Fragmento {...f} />
              </motion.div>
            ))}
          </motion.div>

          {/* Lista de sintomas */}
          <div className="grid gap-8 order-1 lg:order-2">
            {sintomas.map((s, i) => (
              <motion.div
                key={s.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-l-2 border-marfim/15 pl-6"
              >
                <h3 className="font-display text-xl text-dourado mb-1">{s.titulo}</h3>
                <p className="text-marfim/65 leading-relaxed">{s.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-2xl sm:text-3xl text-center mt-24 max-w-2xl mx-auto leading-snug"
        >
          E se tudo isto coubesse <span className="text-dourado italic">num só sítio</span>?
        </motion.p>
      </div>
    </section>
  );
}
