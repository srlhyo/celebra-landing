import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import InviteCardStatic from '../components/InviteCardStatic';
import { usePrefersReducedMotion, useIsMobile } from '../hooks';

const InviteCardScene = lazy(() => import('../components/InviteCardScene'));

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const use3D = !reducedMotion && !isMobile;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-10 lg:px-20 pt-28 pb-16">
      {/* Glow ambiente dourado */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-dourado/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-dourado">
            Plataforma para negócios de eventos
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mt-6 text-marfim">
            Cada convite,{' '}
            <span className="italic text-dourado">uma experiência</span>{' '}
            à tua marca.
          </h1>

          <p className="mt-6 text-lg text-marfim/70 max-w-md leading-relaxed">
            O Celebra organiza todo o caminho entre o primeiro contacto e o dia do evento —
            convites com a tua marca, questionários por etapas e um painel que mostra
            tudo o que precisas de saber, sem código.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#comecar"
              className="px-7 py-3.5 bg-dourado text-carvao font-medium rounded-full hover:bg-marfim transition-colors duration-300"
            >
              Começar gratuitamente
            </a>
            <a
              href="#como-funciona"
              className="px-7 py-3.5 border border-marfim/30 text-marfim rounded-full hover:border-dourado hover:text-dourado transition-colors duration-300"
            >
              Ver como funciona
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[26rem] lg:h-[32rem]"
        >
          {use3D ? (
            <Suspense fallback={<InviteCardStatic />}>
              <InviteCardScene reducedMotion={reducedMotion} />
            </Suspense>
          ) : (
            <div className="flex items-center justify-center h-full">
              <InviteCardStatic />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
