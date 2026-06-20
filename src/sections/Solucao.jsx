import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';
import mesaEvento from '../assets/img/mesa-evento.jpg';
import ramoFlores from '../assets/img/ramo-flores.jpg';
import canapes from '../assets/img/canapes.jpg';

const funcionalidades = [
  {
    titulo: 'Tipos de evento à medida',
    texto: 'Cria Casamento, Batizado, Aniversário, ou o que o teu negócio precisar — campos e perguntas próprios, sem código.',
    imagem: mesaEvento,
    alt: 'Mesa de evento de luxo com candeeiros de cristal e centros de mesa florais',
  },
  {
    titulo: 'Convites com a tua marca',
    texto: 'Cada cliente recebe um link único, com as tuas cores, o teu logótipo e o teu tom de voz.',
    imagem: ramoFlores,
    alt: 'Ramo de rosas em tons creme e rosa sobre fundo dourado desfocado',
  },
  {
    titulo: 'Painel com tudo à vista',
    texto: 'Estado de cada evento, dashboard com estatísticas e briefing pronto a imprimir para a equipa.',
    imagem: canapes,
    alt: 'Mesa de canapés e aperitivos organizados em camadas, prontos a servir',
  },
];

export default function Solucao() {
  return (
    <section id="solucao" className="px-6 sm:px-10 lg:px-20 py-28 lg:py-36 bg-carvao-suave">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>A solução</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl leading-tight"
        >
          Tudo o que um evento precisa, num só sítio.
        </motion.h2>

        <div className="mt-20 space-y-24">
          {funcionalidades.map((f, i) => (
            <motion.div
              key={f.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <span className="font-mono text-sm text-dourado">0{i + 1}</span>
                <h3 className="font-display text-3xl mt-3 mb-4">{f.titulo}</h3>
                <p className="text-marfim/70 text-lg leading-relaxed max-w-md">{f.texto}</p>
              </div>
              <div className="overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/11] border border-dourado/15">
                <img
                  src={f.imagem}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
