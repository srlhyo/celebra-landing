import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

const detalhes = [
  {
    titulo: 'Questionário de marca própria',
    texto: 'Cores, logótipo e tom de voz do teu negócio em cada questionário — o cliente sente que está a falar contigo, não com uma ferramenta genérica.',
  },
  {
    titulo: 'Painel de administração',
    texto: 'Lista de clientes, estado de cada evento — Recebido, Em Preparação, Confirmado, Concluído — tudo visível de imediato.',
  },
  {
    titulo: 'Dashboard com estatísticas',
    texto: 'Próximos eventos, estilos e paletas mais pedidos — uma visão rápida de como o negócio está a correr.',
  },
  {
    titulo: 'Tipos de evento configuráveis',
    texto: 'Editor visual para criar e ajustar campos, perguntas e obrigatoriedade, sem precisar de programar nada.',
  },
];

export default function Funcionalidades() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-28 lg:py-36 bg-creme text-sepia">
      <div className="max-w-6xl mx-auto">
        <Eyebrow light>Em detalhe</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl leading-tight text-carvao"
        >
          Pensado para o dia a dia real de um negócio de eventos.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          {detalhes.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l-2 border-dourado pl-6"
            >
              <h3 className="font-display text-2xl text-carvao mb-2">{d.titulo}</h3>
              <p className="text-sepia/80 leading-relaxed">{d.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
