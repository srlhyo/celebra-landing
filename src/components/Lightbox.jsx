import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ src, alt, onClose }) {
  // Fecha com Escape, e bloqueia o scroll do body enquanto o modal está aberto
  useEffect(() => {
    if (!src) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 bg-carvao/90 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full rounded-xl border border-dourado/30 shadow-2xl shadow-black/70 object-contain"
          />

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 rounded-full border border-marfim/30 text-marfim flex items-center justify-center hover:border-dourado hover:text-dourado transition-colors duration-300"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
