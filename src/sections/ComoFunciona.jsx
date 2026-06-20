import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

const passos = [
  {
    numero: '01',
    titulo: 'Cria o tipo de evento',
    texto: 'Define os passos e as perguntas do questionário — casamento, batizado, ou o que precisares.',
  },
  {
    numero: '02',
    titulo: 'Envia o convite',
    texto: 'Cada cliente recebe um link único, com a tua marca, pronto a abrir no telemóvel.',
  },
  {
    numero: '03',
    titulo: 'O cliente preenche',
    texto: 'Um questionário por etapas, bonito e simples, sem fricção.',
  },
  {
    numero: '04',
    titulo: 'Geres tudo no painel',
    texto: 'Acompanha o estado de cada evento e imprime o briefing para a equipa no terreno.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-6 sm:px-10 lg:px-20 py-28 lg:py-36 bg-carvao">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Como funciona</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl leading-tight"
        >
          Do primeiro contacto ao dia do evento, sem perder nada pelo caminho.
        </motion.h2>

        <div className="relative mt-20">
          {/* Linha de progresso vertical em mobile, horizontal em desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-marfim/15" />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {passos.map((p, i) => (
              <motion.div
                key={p.numero}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-carvao border border-dourado flex items-center justify-center font-mono text-sm text-dourado mb-6">
                  {p.numero}
                </div>
                <h3 className="font-display text-2xl mb-3">{p.titulo}</h3>
                <p className="text-marfim/65 leading-relaxed">{p.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
