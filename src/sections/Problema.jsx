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

export default function Problema() {
  return (
    <section className="relative px-6 sm:px-10 lg:px-20 py-28 lg:py-36 bg-carvao">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid sm:grid-cols-2 gap-px mt-16 bg-marfim/10 rounded-2xl overflow-hidden">
          {sintomas.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-carvao p-8 sm:p-10"
            >
              <h3 className="font-display text-xl text-dourado mb-2">{s.titulo}</h3>
              <p className="text-marfim/65 leading-relaxed">{s.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
