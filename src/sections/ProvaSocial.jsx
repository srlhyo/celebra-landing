import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

export default function ProvaSocial() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-24 lg:py-32 bg-carvao-suave">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-full border border-dourado/60 flex items-center justify-center mx-auto mb-8"
        >
          <span className="font-display text-2xl text-dourado">C</span>
        </motion.div>

        <Eyebrow>A origem</Eyebrow>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl mt-6 leading-relaxed text-marfim/90"
        >
          Construído a partir de um negócio real de decoração e eventos de luxo —
          não nasceu numa folha de cálculo, nasceu a resolver problemas reais
          no terreno, evento a evento.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-20 bg-gradient-to-r from-transparent via-dourado to-transparent mx-auto mt-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xs tracking-[0.15em] uppercase text-marfim/40 mt-6"
        >
          Do Luxo à Mesa — eventos e decoração, Portugal
        </motion.p>
      </div>
    </section>
  );
}
