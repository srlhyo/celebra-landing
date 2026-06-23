import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-20 transition-all duration-300 ${
        scrolled ? 'py-4 bg-carvao/85 backdrop-blur-md border-b border-marfim/10' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-display text-2xl text-marfim">
          Celebra<span className="text-dourado">.</span>
        </span>

        <nav className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-wider text-marfim/70">
          <a href="#solucao" className="hover:text-dourado transition-colors">Produto</a>
          <a href="#como-funciona" className="hover:text-dourado transition-colors">Como funciona</a>
          <a href="#precos" className="hover:text-dourado transition-colors">Preços</a>
        </nav>

        <a
          href="https://celebra-doluxoamesa.netlify.app/admin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-dourado text-dourado rounded-full text-sm hover:bg-dourado hover:text-carvao transition-colors duration-300"
        >
          Começar
        </a>
      </div>
    </motion.header>
  );
}
