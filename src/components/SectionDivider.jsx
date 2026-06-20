import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative w-full flex justify-center py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-32 bg-gradient-to-r from-transparent via-dourado to-transparent origin-center"
      />
    </div>
  );
}
