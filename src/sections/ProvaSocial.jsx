import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

export default function ProvaSocial() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-24 lg:py-32 bg-carvao-suave">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>A origem</Eyebrow>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl sm:text-3xl mt-6 leading-relaxed text-marfim/90"
        >
          Construído a partir de um negócio real de decoração e eventos de luxo —
          não nasceu numa folha de cálculo, nasceu a resolver problemas reais
          no terreno, evento a evento.
        </motion.p>
      </div>
    </section>
  );
}
