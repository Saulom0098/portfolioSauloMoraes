'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Users } from 'lucide-react';
import { getEducation } from '../data/education';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'graduation':
      return <GraduationCap className="w-6 h-6" />;
    case 'course':
      return <BookOpen className="w-6 h-6" />;
    case 'certification':
      return <Award className="w-6 h-6" />;
    case 'workshop':
      return <Users className="w-6 h-6" />;
    default:
      return <GraduationCap className="w-6 h-6" />;
  }
};

export default function Education() {
  const { language } = useLanguage();
  const education = getEducation();

  return (
    <section id="education" className="py-20 section-bg-light bg-scroll">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {t('education', language)}
          </h2>
          <p className="text-lg text-neutral-light max-w-2xl mx-auto">
            {t('educationDescription', language)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg-light rounded-lg p-6 shadow-lg border border-neutral-light hover-neutral-light transition-all duration-300 overflow-hidden relative group"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-pattern-circles opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-tech rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-medium font-medium text-sm">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-light">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-neutral-light mb-4 line-clamp-3">
                  {item.description}
                </p>

                {item.subjects && item.subjects.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                      {t('mainSubjects', language)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded hover:scale-105 transition-transform duration-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                      {t('achievements', language)}
                    </h4>
                    <div className="overflow-y-auto max-h-24 custom-scrollbar">
                      <ul className="list-disc list-inside text-sm text-neutral-light space-y-1">
                        {item.achievements.map((achievement, achIndex) => (
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

                {item.certificate && (
                  <div className="mt-4 pt-4 border-t border-neutral-light">
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors hover:scale-105"
                    >
                      <Award className="w-4 h-4 mr-1" />
                      {t('viewCertificate', language)}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 