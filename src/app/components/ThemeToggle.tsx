'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg glass-effect text-gray-300 hover:text-white transition-colors neon-glow-purple"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
} 