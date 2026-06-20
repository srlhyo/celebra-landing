import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

const planos = [
  {
    nome: 'Gratuito',
    preco: '0€',
    periodo: '/mês',
    activo: true,
    items: [
      '1 tipo de evento',
      'Até 10 convites por mês',
      'Painel de administração básico',
      'Marca Celebra visível no questionário',
    ],
    cta: 'Começar agora',
  },
  {
    nome: 'Essencial',
    preco: '29€',
    periodo: '/mês',
    activo: false,
    items: [
      'Tipos de evento ilimitados',
      'Convites ilimitados',
      'Dashboard completo',
      'Questionário 100% com a tua marca',
      'Suporte por email',
    ],
    cta: 'Brevemente',
  },
  {
    nome: 'Negócio',
    preco: 'Sob consulta',
    periodo: '',
    activo: false,
    items: [
      'Múltiplas pessoas a gerir',
      'Onboarding dedicado',
      'Suporte prioritário',
      'Integrações personalizadas',
    ],
    cta: 'Brevemente',
  },
];

export default function Precos() {
  return (
    <section id="precos" className="px-6 sm:px-10 lg:px-20 py-28 lg:py-36 bg-carvao">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Preços</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl mt-4 leading-tight"
          >
            Começa de graça. Cresce quando precisares.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {planos.map((plano, i) => (
            <motion.div
              key={plano.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                plano.activo
                  ? 'border-dourado bg-gradient-to-b from-dourado/10 to-transparent'
                  : 'border-marfim/15'
              }`}
            >
              {!plano.activo && (
                <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-wider text-marfim/40 border border-marfim/20 rounded-full px-2.5 py-1">
                  Em breve
                </span>
              )}

              <h3 className="font-display text-2xl">{plano.nome}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl text-dourado">{plano.preco}</span>
                <span className="text-marfim/50 text-sm">{plano.periodo}</span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plano.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-marfim/70">
                    <span className="text-dourado mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plano.activo ? '#comecar' : undefined}
                aria-disabled={!plano.activo}
                className={`mt-8 text-center py-3 rounded-full font-medium transition-colors duration-300 ${
                  plano.activo
                    ? 'bg-dourado text-carvao hover:bg-marfim cursor-pointer'
                    : 'border border-marfim/20 text-marfim/40 cursor-not-allowed pointer-events-none'
                }`}
              >
                {plano.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-marfim/40 text-sm mt-10 font-mono">
          Valores do plano Essencial são ilustrativos e sujeitos a revisão.
        </p>
      </div>
    </section>
  );
}
