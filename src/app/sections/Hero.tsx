'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { EmailIcon, GithubIcon, LinkedinIcon, WhatsAppIcon, FileTextIcon } from '../components/Icons';
import Image from 'next/image';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (illustrationRef.current) {
      gsap.to(illustrationRef.current, {
        y: 50,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-tech bg-floating-icons bg-fixed">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left overflow-hidden"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6 line-clamp-3">
              {t('welcome', language)}{' '}n
              <span className="text-primary-600 dark:text-primary-400">Saulo Gabriel</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-neutral-medium mb-8 line-clamp-2">
              {t('role', language)}
            </h2>
            <p className="text-lg text-neutral-light mb-8 max-w-lg mx-auto md:mx-0 line-clamp-4">
              {t('description', language)}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('contactMe', language)}
              </a>
              <a
                href="/assets/cv-saulo-gabriel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FileTextIcon className="w-5 h-5" />
                {t('resume', language)}
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <a
                href="mailto:devwebsg@gmail.com"
                className="text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Email"
              >
                <EmailIcon className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Saulom0098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/saulo-moraes-897418248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/559884476541"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block overflow-hidden relative h-[400px]"
            ref={illustrationRef}
          >
            {/* Parallax SVGs */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              <motion.div
                className="absolute left-10 top-10"
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              >
                <Image src="/globe.svg" alt="Globe" width={80} height={80} />
              </motion.div>
              <motion.div
                className="absolute right-10 top-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              >
                <Image src="/window.svg" alt="Window" width={60} height={60} />
              </motion.div>
              <motion.div
                className="absolute left-1/2 top-1/2"
                animate={{ y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              >
                <Image src="/next.svg" alt="Next.js" width={120} height={40} />
              </motion.div>
              <motion.div
                className="absolute left-20 bottom-10"
                animate={{ y: [0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
              >
                <Image src="/vercel.svg" alt="Vercel" width={80} height={60} />
              </motion.div>
              <motion.div
                className="absolute right-20 bottom-10"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              >
                <Image src="/file.svg" alt="File" width={50} height={50} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 