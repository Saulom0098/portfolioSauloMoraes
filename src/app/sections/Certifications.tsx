'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  LineChart,
  FileText,
  Users,
  Globe,
  Zap,
  ChevronRight
} from 'lucide-react';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';

const certifications = {
  pt: [
    {
      name: 'Senac Informática',
      category: 'Formação Técnica',
      icon: <GraduationCap className="w-8 h-8" />,
      description: 'Programação de Sistemas/Web, Administração de Redes, Manutenção de Computadores',
      details: [
        'Programação de Sistemas',
        'Programação Web',
        'Administração de Redes',
        'Manutenção de Computadores',
        'Pacote Office',
        'Excel Avançado e Power BI'
      ]
    },
    {
      name: 'Excel Avançado',
      category: 'Business Intelligence',
      icon: <LineChart className="w-8 h-8" />,
      description: 'Análise de dados e relatórios avançados',
      details: [
        'Fórmulas avançadas',
        'Tabelas dinâmicas',
        'Gráficos interativos',
        'Macros e VBA',
        'Análise de dados',
        'Relatórios executivos'
      ]
    },
    {
      name: 'Power BI',
      category: 'Business Intelligence',
      icon: <LineChart className="w-8 h-8" />,
      description: 'Criação de dashboards e relatórios',
      details: [
        'Criação de dashboards',
        'Modelagem de dados',
        'DAX e fórmulas',
        'Visualizações avançadas',
        'Relatórios interativos',
        'Publicação e compartilhamento'
      ]
    },
    {
      name: 'Análise de Sistemas',
      category: 'Análise e Negócios',
      icon: <Users className="w-8 h-8" />,
      description: 'UML, RUP, Jira, Modelagem de Processos',
      details: [
        'Levantamento de requisitos',
        'Modelagem UML',
        'Metodologia RUP',
        'Ferramentas Jira',
        'Modelagem de processos',
        'Documentação técnica'
      ]
    },
    {
      name: 'Banco de Dados',
      category: 'Tecnologia',
      icon: <Database className="w-8 h-8" />,
      description: 'PostgreSQL, MySQL, Oracle, MongoDB',
      details: [
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'MongoDB',
        'Modelagem de dados',
        'Consultas SQL'
      ]
    },
    {
      name: 'Cloud & DevOps',
      category: 'Infraestrutura',
      icon: <Cloud className="w-8 h-8" />,
      description: 'AWS, Azure, Docker, Git, CI/CD',
      details: [
        'Microsoft Azure',
        'Amazon AWS',
        'Docker',
        'Git e GitHub',
        'CI/CD',
        'Migração para nuvem'
      ]
    },
    {
      name: 'Desenvolvimento Web',
      category: 'Programação',
      icon: <Code2 className="w-8 h-8" />,
      description: 'React, Vue.js, Node.js (nível técnico)',
      details: [
        'React.js',
        'Vue.js',
        'Node.js',
        'HTML/CSS',
        'JavaScript',
        'Desenvolvimento front-end'
      ]
    },
    {
      name: 'Infraestrutura',
      category: 'Suporte',
      icon: <Server className="w-8 h-8" />,
      description: 'Windows, Linux, Redes, Suporte Técnico',
      details: [
        'Windows Server',
        'Linux',
        'Redes e cabeamento',
        'Suporte técnico N1/N2',
        'Montagem e manutenção',
        'Configuração de rede'
      ]
    },
    {
      name: 'Pacote Office',
      category: 'Produtividade',
      icon: <FileText className="w-8 h-8" />,
      description: 'Word, Excel, PowerPoint, Access',
      details: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Microsoft Access',
        'Automação Office',
        'Templates e macros'
      ]
    },
    {
      name: 'Inglês Técnico',
      category: 'Idiomas',
      icon: <Globe className="w-8 h-8" />,
      description: 'Leitura e escrita técnica avançada',
      details: [
        'Leitura técnica avançada',
        'Escrita técnica',
        'Conversação intermediária',
        'Documentação em inglês',
        'Comunicação profissional',
        'Terminologia técnica'
      ]
    },
    {
      name: 'Automação',
      category: 'Processos',
      icon: <Zap className="w-8 h-8" />,
      description: 'Scripts e rotinas para automação de tarefas',
      details: [
        'Scripts de automação',
        'Rotinas automatizadas',
        'Processos internos',
        'Integração de sistemas',
        'Otimização de workflows',
        'Redução de tarefas manuais'
      ]
    },
    {
      name: 'APIs e Integração',
      category: 'Desenvolvimento',
      icon: <Code2 className="w-8 h-8" />,
      description: 'APIs REST, Postman, Insomnia',
      details: [
        'APIs REST',
        'Postman',
        'Insomnia',
        'Integração de sistemas',
        'Testes de API',
        'Documentação de APIs'
      ]
    },
  ],
  en: [
    {
      name: 'Senac Informatics',
      category: 'Technical Training',
      icon: <GraduationCap className="w-8 h-8" />,
      description: 'Systems/Web Programming, Network Administration, Computer Maintenance',
      details: [
        'Systems Programming',
        'Web Programming',
        'Network Administration',
        'Computer Maintenance',
        'Office Package',
        'Advanced Excel and Power BI'
      ]
    },
    {
      name: 'Advanced Excel',
      category: 'Business Intelligence',
      icon: <LineChart className="w-8 h-8" />,
      description: 'Advanced data analysis and reporting',
      details: [
        'Advanced formulas',
        'Pivot tables',
        'Interactive charts',
        'Macros and VBA',
        'Data analysis',
        'Executive reports'
      ]
    },
    {
      name: 'Power BI',
      category: 'Business Intelligence',
      icon: <LineChart className="w-8 h-8" />,
      description: 'Dashboard and report creation',
      details: [
        'Dashboard creation',
        'Data modeling',
        'DAX and formulas',
        'Advanced visualizations',
        'Interactive reports',
        'Publishing and sharing'
      ]
    },
    {
      name: 'Systems Analysis',
      category: 'Analysis and Business',
      icon: <Users className="w-8 h-8" />,
      description: 'UML, RUP, Jira, Process Modeling',
      details: [
        'Requirements gathering',
        'UML modeling',
        'RUP methodology',
        'Jira tools',
        'Process modeling',
        'Technical documentation'
      ]
    },
    {
      name: 'Database',
      category: 'Technology',
      icon: <Database className="w-8 h-8" />,
      description: 'PostgreSQL, MySQL, Oracle, MongoDB',
      details: [
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'MongoDB',
        'Data modeling',
        'SQL queries'
      ]
    },
    {
      name: 'Cloud & DevOps',
      category: 'Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      description: 'AWS, Azure, Docker, Git, CI/CD',
      details: [
        'Microsoft Azure',
        'Amazon AWS',
        'Docker',
        'Git and GitHub',
        'CI/CD',
        'Cloud migration'
      ]
    },
    {
      name: 'Web Development',
      category: 'Programming',
      icon: <Code2 className="w-8 h-8" />,
      description: 'React, Vue.js, Node.js (technical level)',
      details: [
        'React.js',
        'Vue.js',
        'Node.js',
        'HTML/CSS',
        'JavaScript',
        'Front-end development'
      ]
    },
    {
      name: 'Infrastructure',
      category: 'Support',
      icon: <Server className="w-8 h-8" />,
      description: 'Windows, Linux, Networks, Technical Support',
      details: [
        'Windows Server',
        'Linux',
        'Networks and cabling',
        'N1/N2 technical support',
        'Assembly and maintenance',
        'Network configuration'
      ]
    },
    {
      name: 'Office Package',
      category: 'Productivity',
      icon: <FileText className="w-8 h-8" />,
      description: 'Word, Excel, PowerPoint, Access',
      details: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Microsoft Access',
        'Office automation',
        'Templates and macros'
      ]
    },
    {
      name: 'Technical English',
      category: 'Languages',
      icon: <Globe className="w-8 h-8" />,
      description: 'Advanced technical reading and writing',
      details: [
        'Advanced technical reading',
        'Technical writing',
        'Intermediate conversation',
        'English documentation',
        'Professional communication',
        'Technical terminology'
      ]
    },
    {
      name: 'Automation',
      category: 'Processes',
      icon: <Zap className="w-8 h-8" />,
      description: 'Scripts and routines for task automation',
      details: [
        'Automation scripts',
        'Automated routines',
        'Internal processes',
        'Systems integration',
        'Workflow optimization',
        'Manual task reduction'
      ]
    },
    {
      name: 'APIs and Integration',
      category: 'Development',
      icon: <Code2 className="w-8 h-8" />,
      description: 'REST APIs, Postman, Insomnia',
      details: [
        'REST APIs',
        'Postman',
        'Insomnia',
        'Systems integration',
        'API testing',
        'API documentation'
      ]
    },
  ]
};

export default function Certifications() {
  const { language } = useLanguage();
  const certificationsData = certifications[language as keyof typeof certifications] || certifications.pt;

  return (
    <section id="certifications" className="py-20 section-bg-medium bg-pattern-grid bg-fixed relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {t('certifications', language)}
          </h2>
          <p className="text-lg text-neutral-light max-w-2xl mx-auto">
            {t('certificationsDescription', language)}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-64"
              >
                {/* Card Base */}
                <div className="absolute inset-0 card-bg-light rounded-lg p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-light flex flex-col justify-center items-center text-center cursor-pointer group-hover:scale-105 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 overflow-hidden">
                  <div className="text-primary-600 dark:text-primary-400 mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {cert.icon}
                  </div>
                  <h4 className="text-base font-semibold text-neutral-dark mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-neutral-light line-clamp-3 px-2">
                    {cert.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>

                {/* Hover Content Overlay */}
                <div className="absolute inset-0 card-bg-light rounded-lg p-4 shadow-xl border border-neutral-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-primary-600 dark:text-primary-400">
                        {cert.icon}
                      </div>
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-neutral-200 dark:bg-neutral-600 px-2 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-neutral-dark mb-2 line-clamp-2">
                      {cert.name}
                    </h4>
                    
                    <div className="flex-1 overflow-hidden">
                      <h5 className="text-xs font-medium text-neutral-medium mb-2">
                        {t('knowledge', language)}
                      </h5>
                      <div className="overflow-y-auto max-h-24 custom-scrollbar">
                        <ul className="space-y-1">
                          {cert.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-xs text-neutral-light flex items-start">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="line-clamp-1">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="card-bg-light rounded-lg p-8 shadow-sm border border-neutral-light max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-dark mb-2">
              {t('continuousTraining', language)}
            </h3>
            <p className="text-neutral-light">
              {t('continuousTrainingDescription', language)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 