// Utilitário simples de i18n

// Adiciona tipagem para o objeto translations
interface Translation {
  [key: string]: string;
}

const translations: { pt: Translation; en: Translation } = {
  pt: {
    home: 'Home',
    skills: 'Habilidades',
    skillsDescription: 'Conheça minhas principais habilidades técnicas e competências profissionais, desenvolvidas através de experiência prática e formação acadêmica.',
    projects: 'Projetos',
    contacts: 'Contatos',
    about: 'Sobre',
    aboutDescription: 'Sou Saulo Gabriel Rodrigues de Moraes, analista de TI e desenvolvedor apaixonado por tecnologia e inovação. Atualmente cursando o 5º período de Ciência da Computação na Faculdade Anhanguera, busco atuar como Analista de TI ou Analista de Negócios. Minha experiência abrange análise de sistemas, levantamento de requisitos, infraestrutura de TI, automação de processos e transformação digital. Tenho experiência com metodologias ágeis e ferramentas corporativas como Jira, SAP e Azure DevOps.',
    experience: 'Experiência',
    education: 'Educação',
    certifications: 'Certificações',
    contact: 'Contato',
    welcome: 'Olá, eu sou',
    role: 'Analista de TI & Desenvolvedor',
    description: 'Atuando como Analista de TI ou Analista de Negócios, aplicando conhecimentos em análise de sistemas, levantamento de requisitos, infraestrutura, automação de processos e transformação digital.',
    contactMe: 'Entre em Contato',
    resume: 'Currículo',
    footerDescription: 'Desenvolvedor Full Stack e Analista de Sistemas, especializado em criar soluções tecnológicas inovadoras e eficientes.',
    quickLinks: 'Links Rápidos',
    contactSection: 'Contato',
    email: 'E-mail',
    location: 'Localização',
    locationCity: 'São Luís - MA, Brasil',
    atendimento: 'Horário de Atendimento:',
    atendimentoSemana: 'Segunda a Sexta: 9h às 18h',
    atendimentoSabado: 'Sábado: 9h às 13h',
    code: 'Código',
    demo: 'Demo',
    
    // Seção About
    businessAnalysis: 'Análise de Negócios',
    businessAnalysisDesc: 'Levantamento e documentação de requisitos, modelagem de processos, análise de sistemas e mapeamento de processos de negócio.',
    infrastructureSupportDesc: 'Suporte técnico N1/N2, gestão de redes, administração de sistemas Windows/Linux e manutenção de equipamentos.',
    cloudDevOpsDesc: 'Gestão de ambientes em nuvem Azure, automação de processos, integração de sistemas e migração para nuvem.',
    frontendDevelopment: 'Desenvolvimento Front-End',
    frontendDevelopmentDesc: 'Desenvolvimento de soluções front-end integradas a APIs, criação de sistemas e sites institucionais.',
    businessIntelligenceDesc: 'Painéis e relatórios com Power BI, análise de dados com Excel Avançado e Access.',
    databaseDesc: 'PostgreSQL, MySQL, Oracle, MongoDB e integração com APIs REST usando Postman e Insomnia.',
    
    // Seção Projects
    projectsDescription: 'Explore alguns dos projetos que desenvolvi, demonstrando minhas habilidades em desenvolvimento web, automação e análise de dados. Cada projeto representa uma solução única para desafios específicos.',
    technologiesUsed: 'Tecnologias Utilizadas:',
    mainFeatures: 'Principais Funcionalidades:',
    
    // Seção Skills
    analysisBusiness: 'Análise e Negócios',
    infrastructureSupport: 'Infraestrutura e Suporte',
    cloudDevOps: 'Cloud & DevOps',
    businessIntelligence: 'Business Intelligence',
    database: 'Banco de Dados',
    development: 'Desenvolvimento',
    languages: 'Idiomas',
    
    // Skills específicas
    requirementsGathering: 'Levantamento de Requisitos',
    processModeling: 'Modelagem de Processos',
    technicalSupport: 'Suporte Técnico N1/N2',
    assemblyMaintenance: 'Montagem e Manutenção',
    networksCabling: 'Redes e Cabeamento',
    networkConfiguration: 'Configuração de Rede',
    cloudMigration: 'Migração para Nuvem',
    dataAnalysis: 'Análise de Dados',
    reports: 'Relatórios',
    dashboards: 'Dashboards',
    automationScripts: 'Automação de Scripts',
    portuguese: 'Português',
    englishReadingWriting: 'Inglês - Leitura/Escrita',
    englishConversation: 'Inglês - Conversação',
    
    // Seção Contact
    contactDescription: 'Estou sempre aberto a novas oportunidades e parcerias. Sinta-se à vontade para entrar em contato através do formulário abaixo ou pelos meios de contato disponíveis.',
    contactInfo: 'Informações de Contato',
    contactChannels: 'Você pode me encontrar através dos seguintes canais:',
    name: 'Nome',
    subject: 'Assunto',
    message: 'Mensagem',
    sendMessage: 'Enviar Mensagem',
    sending: 'Enviando...',
    messageSent: 'Mensagem enviada com sucesso!',
    errorSending: 'Erro ao enviar mensagem. Tente novamente.',
    
    // Footer
    allRightsReserved: 'Todos os direitos reservados.',
    developedWith: 'Desenvolvido com ❤️ usando Next.js, Tailwind CSS e Framer Motion',
    
    // Categorias de projetos
    infrastructure: 'Infraestrutura',
    automation: 'Automação',
    
    // Títulos de projetos
    infrastructureManagement: 'Sistema de Gestão de Infraestrutura',
    processAutomation: 'Automação de Processos - Pulse',
    biDashboard: 'Dashboard de BI',
    
    // Descrições de projetos
    infrastructureManagementDesc: 'Sistema desenvolvido para o Grupo Mateus para gerenciamento de infraestrutura de TI, incluindo redes, equipamentos e suporte técnico.',
    processAutomationDesc: 'Sistema de automação de processos internos desenvolvido durante o período de trainee na Pulse, utilizando scripts e integração com APIs.',
    biDashboardDesc: 'Dashboard desenvolvido para análise de dados e métricas de negócio utilizando Power BI e Excel Avançado.',
    
    // Funcionalidades dos projetos
    networkEquipmentManagement: 'Gestão de equipamentos de rede',
    infrastructureMonitoring: 'Monitoramento de infraestrutura',
    supportRoutinesAutomation: 'Automação de rotinas de suporte',
    technicalDocumentation: 'Documentação técnica',
    internalProcessesAutomation: 'Automação de processos internos',
    restApiIntegration: 'Integração com APIs REST',
    processDocumentation: 'Documentação de processos',
    realTimeDataAnalysis: 'Análise de dados em tempo real',
    customReports: 'Relatórios personalizados',
    multipleSourcesIntegration: 'Integração com múltiplas fontes',
    reportExport: 'Exportação de relatórios',
    
    // Skills específicas adicionais
    umlRup: 'UML/RUP',
    jira: 'Jira',
    azureDevOps: 'Azure DevOps',
    sap: 'SAP',
    windows: 'Windows',
    linux: 'Linux',
    aws: 'AWS',
    azure: 'Azure',
    docker: 'Docker',
    git: 'Git',
    ciCd: 'CI/CD',
    powerBi: 'Power BI',
    advancedExcel: 'Excel Avançado',
    access: 'Access',
    postgresql: 'PostgreSQL',
    mysql: 'MySQL',
    oracle: 'Oracle',
    mongodb: 'MongoDB',
    restApis: 'APIs REST',
    postmanInsomnia: 'Postman/Insomnia',
    react: 'React',
    vueJs: 'Vue.js',
    nodeJs: 'Node.js',
    htmlCss: 'HTML/CSS',
    javascript: 'JavaScript',
    
    // Seção Certifications
    certificationsDescription: 'Certificações e formações que demonstram minha expertise em diferentes áreas da tecnologia e análise de sistemas.',
    continuousTraining: 'Formação Contínua',
    continuousTrainingDescription: 'Em constante busca por conhecimento e atualização nas tecnologias mais recentes do mercado, sempre focado em agregar valor aos projetos e organizações.',
    knowledge: 'Conhecimentos:',
  },
  en: {
    home: 'Home',
    skills: 'Skills',
    skillsDescription: 'Discover my main technical skills and professional competencies, developed through practical experience and academic training.',
    projects: 'Projects',
    contacts: 'Contacts',
    about: 'About',
    aboutDescription: 'I am Saulo Gabriel Rodrigues de Moraes, an IT analyst and developer passionate about technology and innovation. Currently in the 5th semester of Computer Science at Anhanguera College, I aim to work as an IT Analyst or Business Analyst. My experience includes systems analysis, requirements gathering, IT infrastructure, process automation, and digital transformation. I have experience with agile methodologies and corporate tools such as Jira, SAP, and Azure DevOps.',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications',
    contact: 'Contact',
    welcome: 'Hello, I am',
    role: 'IT Analyst & Developer',
    description: 'Working as an IT Analyst or Business Analyst, applying knowledge in systems analysis, requirements gathering, infrastructure, process automation, and digital transformation.',
    contactMe: 'Contact Me',
    resume: 'Resume',
    footerDescription: 'Full Stack Developer and Systems Analyst, specialized in creating innovative and efficient technology solutions.',
    quickLinks: 'Quick Links',
    contactSection: 'Contact',
    email: 'Email',
    location: 'Location',
    locationCity: 'São Luís - MA, Brazil',
    atendimento: 'Service Hours:',
    atendimentoSemana: 'Monday to Friday: 9am to 6pm',
    atendimentoSabado: 'Saturday: 9am to 1pm',
    code: 'Code',
    demo: 'Demo',
    
    // About Section
    businessAnalysis: 'Business Analysis',
    businessAnalysisDesc: 'Requirements gathering and documentation, process modeling, systems analysis and business process mapping.',
    infrastructureSupportDesc: 'N1/N2 technical support, network management, Windows/Linux system administration and equipment maintenance.',
    cloudDevOpsDesc: 'Azure cloud environment management, process automation, systems integration and cloud migration.',
    frontendDevelopment: 'Front-End Development',
    frontendDevelopmentDesc: 'Development of front-end solutions integrated with APIs, creation of institutional systems and websites.',
    businessIntelligenceDesc: 'Power BI dashboards and reports, data analysis with Advanced Excel and Access.',
    databaseDesc: 'PostgreSQL, MySQL, Oracle, MongoDB and REST API integration using Postman and Insomnia.',
    
    // Projects Section
    projectsDescription: 'Explore some of the projects I have developed, demonstrating my skills in web development, automation and data analysis. Each project represents a unique solution to specific challenges.',
    technologiesUsed: 'Technologies Used:',
    mainFeatures: 'Main Features:',
    
    // Skills Section
    analysisBusiness: 'Analysis & Business',
    infrastructureSupport: 'Infrastructure & Support',
    cloudDevOps: 'Cloud & DevOps',
    businessIntelligence: 'Business Intelligence',
    database: 'Database',
    development: 'Development',
    languages: 'Languages',
    
    // Specific skills
    requirementsGathering: 'Requirements Gathering',
    processModeling: 'Process Modeling',
    technicalSupport: 'Technical Support N1/N2',
    assemblyMaintenance: 'Assembly & Maintenance',
    networksCabling: 'Networks & Cabling',
    networkConfiguration: 'Network Configuration',
    cloudMigration: 'Cloud Migration',
    dataAnalysis: 'Data Analysis',
    reports: 'Reports',
    dashboards: 'Dashboards',
    automationScripts: 'Automation Scripts',
    portuguese: 'Portuguese',
    englishReadingWriting: 'English - Reading/Writing',
    englishConversation: 'English - Conversation',
    
    // Contact Section
    contactDescription: 'I am always open to new opportunities and partnerships. Feel free to contact me through the form below or through the available contact channels.',
    contactInfo: 'Contact Information',
    contactChannels: 'You can reach me through the following channels:',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message sent successfully!',
    errorSending: 'Error sending message. Please try again.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    developedWith: 'Developed with ❤️ using Next.js, Tailwind CSS and Framer Motion',
    
    // Project categories
    infrastructure: 'Infrastructure',
    automation: 'Automation',
    
    // Project titles
    infrastructureManagement: 'Infrastructure Management System',
    processAutomation: 'Process Automation - Pulse',
    biDashboard: 'BI Dashboard',
    
    // Project descriptions
    infrastructureManagementDesc: 'System developed for Grupo Mateus for IT infrastructure management, including networks, equipment and technical support.',
    processAutomationDesc: 'Internal process automation system developed during the trainee period at Pulse, using scripts and API integration.',
    biDashboardDesc: 'Dashboard developed for data analysis and business metrics using Power BI and Advanced Excel.',
    
    // Project features
    networkEquipmentManagement: 'Network equipment management',
    infrastructureMonitoring: 'Infrastructure monitoring',
    supportRoutinesAutomation: 'Support routines automation',
    technicalDocumentation: 'Technical documentation',
    internalProcessesAutomation: 'Internal processes automation',
    restApiIntegration: 'REST API integration',
    processDocumentation: 'Process documentation',
    realTimeDataAnalysis: 'Real-time data analysis',
    customReports: 'Custom reports',
    multipleSourcesIntegration: 'Multiple sources integration',
    reportExport: 'Report export',
    
    // Additional specific skills
    umlRup: 'UML/RUP',
    jira: 'Jira',
    azureDevOps: 'Azure DevOps',
    sap: 'SAP',
    windows: 'Windows',
    linux: 'Linux',
    aws: 'AWS',
    azure: 'Azure',
    docker: 'Docker',
    git: 'Git',
    ciCd: 'CI/CD',
    powerBi: 'Power BI',
    advancedExcel: 'Advanced Excel',
    access: 'Access',
    postgresql: 'PostgreSQL',
    mysql: 'MySQL',
    oracle: 'Oracle',
    mongodb: 'MongoDB',
    restApis: 'REST APIs',
    postmanInsomnia: 'Postman/Insomnia',
    react: 'React',
    vueJs: 'Vue.js',
    nodeJs: 'Node.js',
    htmlCss: 'HTML/CSS',
    javascript: 'JavaScript',
    
    // Certifications Section
    certificationsDescription: 'Certifications and training that demonstrate my expertise in different areas of technology and systems analysis.',
    continuousTraining: 'Continuous Training',
    continuousTrainingDescription: 'Constantly seeking knowledge and updating on the latest market technologies, always focused on adding value to projects and organizations.',
    knowledge: 'Knowledge:',
  }
};

export function t(key: string, lang: 'pt' | 'en'): string {
  if (!translations[lang]) lang = 'pt';
  return translations[lang][key] || translations['pt'][key] || key;
} 