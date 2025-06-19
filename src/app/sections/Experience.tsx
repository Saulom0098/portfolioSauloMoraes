'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Users, Database, Cloud, Server, Code2, LineChart } from 'lucide-react';
import { getExperiences } from '../data/experience';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

const getIcon = (category?: string) => {
  if (!category || typeof category !== 'string') {
    return <Building className="w-6 h-6" />;
  }
  switch (category.toLowerCase()) {
    case 'business':
      return <Users className="w-6 h-6" />;
    case 'infrastructure':
      return <Server className="w-6 h-6" />;
    case 'cloud':
      return <Cloud className="w-6 h-6" />;
    case 'development':
      return <Code2 className="w-6 h-6" />;
    case 'bi':
      return <LineChart className="w-6 h-6" />;
    case 'database':
      return <Database className="w-6 h-6" />;
    default:
      return <Building className="w-6 h-6" />;
  }
};

export default function Experience() {
  const { language } = useLanguage();
  const experience = getExperiences();

  return (
    <section id="experience" className="py-20 section-bg-medium bg-pattern-hexagons bg-fixed relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {t('experience', language)}
          </h2>
          <p className="text-lg text-neutral-light max-w-2xl mx-auto">
            {t('experienceDescription', language)}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-600"></div>

            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                <div className="ml-16">
                  <div className="card-bg-light rounded-lg p-6 shadow-lg border border-neutral-light hover-neutral-light transition-all duration-300 overflow-hidden relative group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-pattern-circles opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-tech rounded-lg group-hover:scale-110 transition-transform duration-300">
                            {getIcon(job.category)}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-neutral-dark line-clamp-2">
                              {job.title}
                            </h3>
                            <p className="text-neutral-medium font-medium">
                              {job.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-light">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      <p className="text-neutral-light mb-4 line-clamp-3">
                        {job.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                          {t('responsibilities', language)}
                        </h4>
                        <div className="overflow-y-auto max-h-32 custom-scrollbar">
                          <ul className="list-disc list-inside text-sm text-neutral-light space-y-1">
                            {job.responsibilities.map((responsibility, respIndex) => (
                              <motion.li
                                key={respIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="line-clamp-2"
                              >
                                {responsibility}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {job.achievements && job.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                            {t('achievements', language)}
                          </h4>
                          <div className="overflow-y-auto max-h-32 custom-scrollbar">
                            <ul className="list-disc list-inside text-sm text-neutral-light space-y-1">
                              {job.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="line-clamp-2"
                                >
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {job.technologies && job.technologies.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-neutral-light">
                          <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                            {t('technologiesUsed', language)}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded hover:scale-105 transition-transform duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 