import { useState } from 'react';
import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';
import Lightbox from '../components/Lightbox';
import produtoPainel from '../assets/img/produto-painel.jpg';
import produtoQuestionario from '../assets/img/produto-questionario.jpg';
import produtoDashboard from '../assets/img/produto-dashboard.jpg';

const funcionalidades = [
  {
    titulo: 'Tipos de evento à medida',
    texto: 'Cria Casamento, Batizado, Aniversário, ou o que o teu negócio precisar — campos e perguntas próprios, sem código.',
    imagem: produtoPainel,
    alt: 'Painel do Celebra com a lista de clientes e os estados de cada evento',
    orientacao: 'landscape',
  },
  {
    titulo: 'Convites com a tua marca',
    texto: 'Cada cliente recebe um link único, com as tuas cores, o teu logótipo e o teu tom de voz — o questionário sente-se como uma extensão do teu negócio, não de uma ferramenta genérica.',
    imagem: produtoQuestionario,
    alt: 'Questionário multi-passos do Celebra aberto num telemóvel, com a marca do negócio',
    orientacao: 'portrait',
  },
  {
    titulo: 'Painel com tudo à vista',
    texto: 'Estado de cada evento, dashboard com estatísticas e briefing pronto a imprimir para a equipa.',
    imagem: produtoDashboard,
    alt: 'Dashboard do Celebra com estatísticas de eventos, próximo evento e gráficos',
    orientacao: 'landscape',
  },
];

function ProductShot({ imagem, alt, orientacao, onExpand }) {
  return (
    <div className="relative">
      {/* Glow dourado ambiente para a imagem "saltar" do fundo escuro */}
      <div className="absolute -inset-6 bg-dourado/10 blur-3xl rounded-full pointer-events-none" />

      <button
        type="button"
        onClick={onExpand}
        aria-label={`Ver imagem ampliada: ${alt}`}
        className={`group relative overflow-hidden rounded-xl border border-dourado/25 cursor-zoom-in w-full ${
          orientacao === 'portrait' ? 'aspect-[490/1000] max-w-xs mx-auto' : 'aspect-[1024/512]'
        }`}
        style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7), 0 0 40px -10px rgba(201,168,76,0.15)' }}
      >
        <img
          src={imagem}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-carvao/0 group-hover:bg-carvao/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs uppercase tracking-wider text-marfim bg-carvao/70 border border-dourado/40 rounded-full px-4 py-2">
            Ver ampliado
          </span>
        </div>
      </button>
    </div>
  );
}

export default function Solucao() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const expandir = (imagem, alt) => {
    setLightboxSrc(imagem);
    setLightboxAlt(alt);
  };

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
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <span className="font-mono text-sm text-dourado">0{i + 1}</span>
                <h3 className="font-display text-3xl mt-3 mb-4">{f.titulo}</h3>
                <p className="text-marfim/70 text-lg leading-relaxed max-w-md">{f.texto}</p>
              </div>
              <ProductShot
                imagem={f.imagem}
                alt={f.alt}
                orientacao={f.orientacao}
                onExpand={() => expandir(f.imagem, f.alt)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={() => setLightboxSrc(null)} />
    </section>
  );
}
