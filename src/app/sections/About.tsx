'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Code2, Database, Cloud, Server, LineChart, Users } from 'lucide-react';
import { AboutIllustration } from '../components/Illustrations';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  {
    icon: <Users className="w-6 h-6" />,
    titleKey: 'businessAnalysis',
    descriptionKey: 'businessAnalysisDesc',
  },
  {
    icon: <Server className="w-6 h-6" />,
    titleKey: 'infrastructureSupport',
    descriptionKey: 'infrastructureSupportDesc',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    titleKey: 'cloudDevOps',
    descriptionKey: 'cloudDevOpsDesc',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    titleKey: 'frontendDevelopment',
    descriptionKey: 'frontendDevelopmentDesc',
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    titleKey: 'businessIntelligence',
    descriptionKey: 'businessIntelligenceDesc',
  },
  {
    icon: <Database className="w-6 h-6" />,
    titleKey: 'database',
    descriptionKey: 'databaseDesc',
  },
];

export default function About() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (illustrationRef.current) {
      gsap.to(illustrationRef.current, {
        x: -30,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <section id="about" className="py-20 section-bg-light bg-scroll">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              {t('about', language)}
            </h2>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto mb-12">
              {t('aboutDescription', language)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 card-bg-light rounded-lg shadow-sm border border-neutral-light hover-neutral-light transition-all duration-300 overflow-hidden relative group"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-pattern-circles opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-primary-600 dark:text-primary-400 mb-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-base font-semibold text-neutral-dark mb-2 line-clamp-2">
                      {t(skill.titleKey, language)}
                    </h3>
                    <p className="text-sm text-neutral-light line-clamp-4">
                      {t(skill.descriptionKey, language)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block relative"
            ref={illustrationRef}
          >
            <div className="relative">
              <AboutIllustration className="w-full max-w-lg mx-auto" />
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-business rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-creative rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <Cloud className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 