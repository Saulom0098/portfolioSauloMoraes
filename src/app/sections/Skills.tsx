'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Server, LineChart, Users, Globe } from 'lucide-react';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';
import { getSkills } from '../data/skills';

const skillCategories = [
  {
    titleKey: 'analysisBusiness',
    icon: <Users className="w-6 h-6" />,
    skills: [
      { nameKey: 'requirementsGathering', level: 85 },
      { nameKey: 'processModeling', level: 80 },
      { nameKey: 'umlRup', level: 75 },
      { nameKey: 'jira', level: 85 },
      { nameKey: 'azureDevOps', level: 80 },
      { nameKey: 'sap', level: 70 },
    ],
  },
  {
    titleKey: 'infrastructureSupport',
    icon: <Server className="w-6 h-6" />,
    skills: [
      { nameKey: 'technicalSupport', level: 90 },
      { nameKey: 'assemblyMaintenance', level: 85 },
      { nameKey: 'networksCabling', level: 80 },
      { nameKey: 'windows', level: 85 },
      { nameKey: 'linux', level: 75 },
      { nameKey: 'networkConfiguration', level: 80 },
    ],
  },
  {
    titleKey: 'cloudDevOps',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { nameKey: 'azure', level: 80 },
      { nameKey: 'aws', level: 70 },
      { nameKey: 'docker', level: 75 },
      { nameKey: 'git', level: 85 },
      { nameKey: 'ciCd', level: 75 },
      { nameKey: 'cloudMigration', level: 80 },
    ],
  },
  {
    titleKey: 'businessIntelligence',
    icon: <LineChart className="w-6 h-6" />,
    skills: [
      { nameKey: 'powerBi', level: 85 },
      { nameKey: 'advancedExcel', level: 90 },
      { nameKey: 'access', level: 80 },
      { nameKey: 'dataAnalysis', level: 85 },
      { nameKey: 'reports', level: 85 },
      { nameKey: 'dashboards', level: 80 },
    ],
  },
  {
    titleKey: 'database',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { nameKey: 'postgresql', level: 80 },
      { nameKey: 'mysql', level: 85 },
      { nameKey: 'oracle', level: 70 },
      { nameKey: 'mongodb', level: 75 },
      { nameKey: 'restApis', level: 80 },
      { nameKey: 'postmanInsomnia', level: 85 },
    ],
  },
  {
    titleKey: 'development',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { nameKey: 'react', level: 75 },
      { nameKey: 'vueJs', level: 70 },
      { nameKey: 'nodeJs', level: 75 },
      { nameKey: 'htmlCss', level: 85 },
      { nameKey: 'javascript', level: 80 },
      { nameKey: 'automationScripts', level: 80 },
    ],
  },
  {
    titleKey: 'languages',
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { nameKey: 'portuguese', level: 100 },
      { nameKey: 'englishReadingWriting', level: 85 },
      { nameKey: 'englishConversation', level: 70 },
    ],
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const skills = getSkills();

  return (
    <section id="skills" className="py-20 section-bg-medium bg-scroll">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {t('skills', language)}
          </h2>
          <p className="text-lg text-neutral-light max-w-2xl mx-auto">
            {t('skillsDescription', language)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg-light rounded-lg p-6 shadow-sm border border-neutral-light hover-neutral-light transition-all duration-300 overflow-hidden relative group"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-pattern-hexagons opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark line-clamp-1">
                    {t(category.titleKey, language)}
                  </h3>
                </div>

                <div className="space-y-4 overflow-hidden">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.nameKey}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-1 min-w-0">
                        <span className="text-sm font-medium text-neutral-medium truncate pr-2">
                          {t(skill.nameKey, language)}
                        </span>
                        <span className="text-sm text-neutral-light flex-shrink-0">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-neutral-200 dark:bg-neutral-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 rounded-full relative"
                        >
                          {/* Progress Bar Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 