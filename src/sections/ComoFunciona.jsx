import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';
import produtoPainel from '../assets/img/produto-painel.jpg';
import produtoQuestionario from '../assets/img/produto-questionario.jpg';
import produtoDashboard from '../assets/img/produto-dashboard.jpg';

const passos = [
  {
    numero: '01',
    titulo: 'Cria o tipo de evento',
    texto: 'Define os passos e as perguntas do questionário — casamento, batizado, ou o que precisares.',
    imagem: produtoPainel,
    alt: 'Painel do Celebra a mostrar a lista de tipos de evento e clientes',
  },
  {
    numero: '02',
    titulo: 'Envia o convite',
    texto: 'Cada cliente recebe um link único, com a tua marca, pronto a abrir no telemóvel.',
    imagem: produtoQuestionario,
    alt: 'Convite do Celebra aberto num telemóvel, com a marca do negócio',
  },
  {
    numero: '03',
    titulo: 'O cliente preenche',
    texto: 'Um questionário por etapas, bonito e simples, sem fricção.',
    imagem: produtoQuestionario,
    alt: 'Questionário multi-passos do Celebra a ser preenchido',
  },
  {
    numero: '04',
    titulo: 'Geres tudo no painel',
    texto: 'Acompanha o estado de cada evento e imprime o briefing para a equipa no terreno.',
    imagem: produtoDashboard,
    alt: 'Dashboard do Celebra com estatísticas e estado dos eventos',
  },
];

export default function ComoFunciona() {
  const [activo, setActivo] = useState(0);
  const passo = passos[activo];

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

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 mt-20 items-start">
          {/* Lista de passos clicável */}
          <div className="space-y-2">
            {passos.map((p, i) => {
              const isActive = i === activo;
              return (
                <button
                  key={p.numero}
                  onClick={() => setActivo(i)}
                  className={`w-full text-left rounded-xl px-5 py-4 transition-colors duration-300 border ${
                    isActive
                      ? 'bg-dourado/10 border-dourado/40'
                      : 'border-transparent hover:bg-marfim/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? 'border-dourado text-dourado' : 'border-marfim/25 text-marfim/50'
                      }`}
                    >
                      {p.numero}
                    </span>
                    <h3
                      className={`font-display text-xl sm:text-2xl transition-colors duration-300 ${
                        isActive ? 'text-marfim' : 'text-marfim/55'
                      }`}
                    >
                      {p.titulo}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-marfim/65 leading-relaxed mt-2 pl-12 overflow-hidden"
                      >
                        {p.texto}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Janela de preview com a imagem do passo activo */}
          <div className="relative h-[20rem] sm:h-[26rem] lg:h-[30rem]">
            <div className="absolute -inset-6 bg-dourado/10 blur-3xl rounded-full pointer-events-none" />
            <div
              className="relative h-full rounded-xl overflow-hidden border border-dourado/25"
              style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7), 0 0 40px -10px rgba(201,168,76,0.15)' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activo}
                  src={passo.imagem}
                  alt={passo.alt}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
