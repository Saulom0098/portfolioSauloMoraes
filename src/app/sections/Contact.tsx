'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EmailIcon, GithubIcon, LinkedinIcon, WhatsAppIcon } from '../components/Icons';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aqui você pode implementar a lógica de envio do formulário
      // Por exemplo, usando um serviço de email como EmailJS ou uma API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação de envio
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 section-bg-light bg-scroll">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {t('contact', language)}
          </h2>
          <p className="text-lg text-neutral-light max-w-2xl mx-auto">
            {t('contactDescription', language)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 overflow-hidden"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-dark mb-4">
                {t('contactInfo', language)}
              </h3>
              <p className="text-neutral-light mb-6">
                {t('contactChannels', language)}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:devwebsg@gmail.com"
                className="flex items-center gap-3 text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors min-w-0 p-3 rounded-lg hover:bg-white/10 group"
              >
                <div className="p-2 bg-gradient-tech rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon className="w-6 h-6" />
                </div>
                <span className="truncate">devwebsg@gmail.com</span>
              </a>
              <a
                href="https://github.com/Saulom0098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors min-w-0 p-3 rounded-lg hover:bg-white/10 group"
              >
                <div className="p-2 bg-gradient-tech rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <span className="truncate">github.com/Saulom0098</span>
              </a>
              <a
                href="https://linkedin.com/in/saulo-moraes-897418248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors min-w-0 p-3 rounded-lg hover:bg-white/10 group"
              >
                <div className="p-2 bg-gradient-business rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="truncate">linkedin.com/in/saulo-moraes-897418248</span>
              </a>
              <a
                href="https://wa.me/559884476541"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors min-w-0 p-3 rounded-lg hover:bg-white/10 group"
              >
                <div className="p-2 bg-gradient-creative rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <span className="truncate">(98) 98447-6541</span>
              </a>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-neutral-dark mb-4">
                {t('location', language)}
              </h4>
              <p className="text-neutral-light">
                {t('locationCity', language)}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <div className="card-bg-light rounded-lg p-8 shadow-lg border border-neutral-light relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-pattern-circles opacity-5"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-medium mb-1"
                  >
                    {t('name', language)}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-neutral-medium bg-input-bg-light text-neutral-dark focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-medium mb-1"
                  >
                    {t('email', language)}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-neutral-medium bg-input-bg-light text-neutral-dark focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-medium mb-1"
                  >
                    {t('subject', language)}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-neutral-medium bg-input-bg-light text-neutral-dark focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-medium mb-1"
                  >
                    {t('message', language)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-medium bg-input-bg-light text-neutral-dark focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent resize-none transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 btn-bg-neutral rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? t('sending', language) : t('sendMessage', language)}
                </button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-center"
                  >
                    {t('messageSent', language)}
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 dark:text-red-400 text-center"
                  >
                    {t('errorSending', language)}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 