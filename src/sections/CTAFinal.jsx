import { motion } from 'framer-motion';

export default function CTAFinal() {
  return (
    <section id="comecar" className="relative px-6 sm:px-10 lg:px-20 py-32 lg:py-40 bg-carvao-suave overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50rem] h-[50rem] rounded-full bg-dourado/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight"
        >
          O próximo evento já pode começar{' '}
          <span className="italic text-dourado">organizado</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-marfim/65"
        >
          Cria a tua conta gratuita e envia o primeiro convite ainda hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="https://dlm-app.netlify.app/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-4 bg-dourado text-carvao font-medium rounded-full hover:bg-marfim transition-colors duration-300 text-lg"
          >
            Começar gratuitamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
