'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Github, ExternalLink, Code2, Database, Cloud, Server } from 'lucide-react';
import { getProjects } from '../data/projects';
import { ProjectsIllustration } from '../components/Illustrations';
import { InfraImage, AutomacaoImage, BIImage } from '../components/ProjectImages';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend':
      return <Code2 className="w-6 h-6" />;
    case 'backend':
      return <Database className="w-6 h-6" />;
    case 'cloud':
      return <Cloud className="w-6 h-6" />;
    case 'devops':
      return <Server className="w-6 h-6" />;
    default:
      return <Code2 className="w-6 h-6" />;
  }
};

const getProjectImage = (imageType: string) => {
  switch (imageType) {
    case 'infra':
      return <InfraImage className="w-full h-full" />;
    case 'automacao':
      return <AutomacaoImage className="w-full h-full" />;
    case 'bi':
      return <BIImage className="w-full h-full" />;
    default:
      return <InfraImage className="w-full h-full" />;
  }
};

export default function Projects() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const projects = getProjects();

  useEffect(() => {
    if (illustrationRef.current) {
      gsap.to(illustrationRef.current, {
        y: 30,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <section id="projects" className="py-20 section-bg-light bg-pattern-waves bg-fixed relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              {t('projects', language)}
            </h2>
            <p className="text-lg text-neutral-light">
              {t('projectsDescription', language)}
            </p>
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
              <ProjectsIllustration className="w-full max-w-lg mx-auto" />
              {/* Floating Project Icons */}
              <motion.div
                className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-tech rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <Code2 className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-business rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-pattern-tech opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full">
                    {getProjectImage(project.image)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {getIcon(project.category)}
                      </div>
                      <span className="text-sm font-medium truncate">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white line-clamp-2">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col overflow-hidden">
                  <p className="text-neutral-light mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4 flex-shrink-0">
                    <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                      {t('technologiesUsed', language)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 flex-1 overflow-hidden">
                    <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                      {t('mainFeatures', language)}
                    </h4>
                    <div className="overflow-y-auto max-h-32 custom-scrollbar">
                      <ul className="list-disc list-inside text-sm text-neutral-light space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="line-clamp-2"
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-light flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      {t('code', language)}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-neutral-light hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {t('demo', language)}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 