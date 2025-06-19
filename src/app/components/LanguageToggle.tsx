'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative p-2 rounded-lg glass-effect text-gray-300 hover:text-white transition-colors neon-glow-cyan"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: language === 'pt' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <Globe className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
} 