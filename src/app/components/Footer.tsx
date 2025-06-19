'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Saulo Gabriel</h3>
            <p className="mb-4 line-clamp-4">
              {t('footerDescription', language) || 'Desenvolvedor Full Stack e Analista de Sistemas, especializado em criar soluções tecnológicas inovadoras e eficientes.'}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Saulom0098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors flex-shrink-0"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/saulo-moraes-897418248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors flex-shrink-0"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{t('quickLinks', language)}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  {t('home', language)}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  {t('about', language)}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  {t('experience', language)}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  {t('projects', language)}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  {t('skills', language)}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  {t('contact', language)}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{t('contactSection', language)}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:devwebsg@gmail.com"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  devwebsg@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/559884476541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors block truncate"
                >
                  (98) 98447-6541
                </a>
              </li>
              <li className="pt-4">
                <p className="line-clamp-1">{t('atendimento', language)}</p>
                <p className="line-clamp-1">{t('atendimentoSemana', language)}</p>
                <p className="line-clamp-1">{t('atendimentoSabado', language)}</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center overflow-hidden"
        >
          <p className="line-clamp-1">
            &copy; {currentYear} Saulo Gabriel. {t('allRightsReserved', language)}
          </p>
          <p className="mt-2 text-sm line-clamp-2">
            {t('developedWith', language)}
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 