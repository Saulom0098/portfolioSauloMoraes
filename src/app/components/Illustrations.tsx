import React from 'react';

// Hero Illustration - Analista de TI trabalhando
export const HeroIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#f8fafc" className="dark:fill-gray-800" />
    
    {/* Desk */}
    <rect x="50" y="200" width="300" height="20" fill="#64748b" />
    <rect x="60" y="180" width="280" height="20" fill="#475569" />
    
    {/* Computer */}
    <rect x="120" y="120" width="160" height="100" fill="#1e293b" rx="8" />
    <rect x="130" y="130" width="140" height="80" fill="#0ea5e9" />
    <rect x="140" y="140" width="120" height="60" fill="#ffffff" />
    
    {/* Code lines on screen */}
    <rect x="150" y="150" width="80" height="2" fill="#64748b" />
    <rect x="150" y="155" width="60" height="2" fill="#64748b" />
    <rect x="150" y="160" width="90" height="2" fill="#64748b" />
    <rect x="150" y="165" width="70" height="2" fill="#64748b" />
    <rect x="150" y="170" width="85" height="2" fill="#64748b" />
    <rect x="150" y="175" width="65" height="2" fill="#64748b" />
    
    {/* Person */}
    <circle cx="200" cy="80" r="25" fill="#fbbf24" />
    <rect x="175" y="105" width="50" height="60" fill="#3b82f6" />
    <rect x="185" y="115" width="30" height="40" fill="#ffffff" />
    
    {/* Arms */}
    <rect x="160" y="110" width="15" height="40" fill="#fbbf24" rx="7" />
    <rect x="225" y="110" width="15" height="40" fill="#fbbf24" rx="7" />
    
    {/* Coffee cup */}
    <rect x="280" y="160" width="20" height="25" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
    <rect x="285" y="155" width="10" height="5" fill="#64748b" />
    
    {/* Papers */}
    <rect x="80" y="160" width="25" height="35" fill="#ffffff" stroke="#64748b" strokeWidth="1" />
    <rect x="85" y="165" width="15" height="2" fill="#64748b" />
    <rect x="85" y="170" width="12" height="2" fill="#64748b" />
    <rect x="85" y="175" width="14" height="2" fill="#64748b" />
    
    {/* Floating elements */}
    <circle cx="320" cy="100" r="8" fill="#0ea5e9" opacity="0.6" />
    <circle cx="80" cy="120" r="6" fill="#10b981" opacity="0.6" />
    <circle cx="350" cy="180" r="5" fill="#f59e0b" opacity="0.6" />
    
    {/* Connection lines */}
    <path d="M 320 100 Q 340 80 360 100" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 80 120 Q 60 100 40 120" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);

// About Illustration - Análise de sistemas
export const AboutIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#f8fafc" className="dark:fill-gray-800" />
    
    {/* Central brain/network */}
    <circle cx="200" cy="150" r="40" fill="#0ea5e9" opacity="0.2" />
    <circle cx="200" cy="150" r="30" fill="#0ea5e9" opacity="0.4" />
    <circle cx="200" cy="150" r="20" fill="#0ea5e9" />
    
    {/* Connection nodes */}
    <circle cx="100" cy="80" r="15" fill="#10b981" />
    <circle cx="300" cy="80" r="15" fill="#f59e0b" />
    <circle cx="100" cy="220" r="15" fill="#ef4444" />
    <circle cx="300" cy="220" r="15" fill="#8b5cf6" />
    <circle cx="80" cy="150" r="15" fill="#06b6d4" />
    <circle cx="320" cy="150" r="15" fill="#84cc16" />
    
    {/* Connection lines */}
    <path d="M 200 150 L 100 80" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 200 150 L 300 80" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 200 150 L 100 220" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 200 150 L 300 220" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 200 150 L 80 150" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 200 150 L 320 150" stroke="#0ea5e9" strokeWidth="2" />
    
    {/* Icons in nodes */}
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DB</text>
    <text x="300" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">API</text>
    <text x="100" y="225" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">UI</text>
    <text x="300" y="225" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">BI</text>
    <text x="80" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CL</text>
    <text x="320" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DEV</text>
    
    {/* Floating data elements */}
    <rect x="50" y="50" width="60" height="20" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="3" />
    <text x="80" y="63" textAnchor="middle" fill="#64748b" fontSize="10">Data</text>
    
    <rect x="290" y="50" width="60" height="20" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="3" />
    <text x="320" y="63" textAnchor="middle" fill="#64748b" fontSize="10">Logic</text>
    
    <rect x="50" y="230" width="60" height="20" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="3" />
    <text x="80" y="243" textAnchor="middle" fill="#64748b" fontSize="10">Design</text>
    
    <rect x="290" y="230" width="60" height="20" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="3" />
    <text x="320" y="243" textAnchor="middle" fill="#64748b" fontSize="10">Analytics</text>
    
    {/* Animated dots */}
    <circle cx="150" cy="120" r="3" fill="#0ea5e9">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="120" r="3" fill="#10b981">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="150" cy="180" r="3" fill="#f59e0b">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="250" cy="180" r="3" fill="#ef4444">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.5s" />
    </circle>
  </svg>
);

// Projects Illustration - Desenvolvimento de projetos
export const ProjectsIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#f8fafc" className="dark:fill-gray-800" />
    
    {/* Project cards stack */}
    <rect x="80" y="120" width="120" height="80" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" rx="8" />
    <rect x="85" y="125" width="110" height="15" fill="#0ea5e9" rx="3" />
    <rect x="90" y="145" width="80" height="3" fill="#64748b" />
    <rect x="90" y="150" width="60" height="3" fill="#64748b" />
    <rect x="90" y="155" width="70" height="3" fill="#64748b" />
    <rect x="90" y="160" width="50" height="3" fill="#64748b" />
    
    <rect x="100" y="110" width="120" height="80" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" rx="8" />
    <rect x="105" y="115" width="110" height="15" fill="#10b981" rx="3" />
    <rect x="110" y="135" width="80" height="3" fill="#64748b" />
    <rect x="110" y="140" width="60" height="3" fill="#64748b" />
    <rect x="110" y="145" width="70" height="3" fill="#64748b" />
    <rect x="110" y="150" width="50" height="3" fill="#64748b" />
    
    <rect x="120" y="100" width="120" height="80" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" rx="8" />
    <rect x="125" y="105" width="110" height="15" fill="#f59e0b" rx="3" />
    <rect x="130" y="125" width="80" height="3" fill="#64748b" />
    <rect x="130" y="130" width="60" height="3" fill="#64748b" />
    <rect x="130" y="135" width="70" height="3" fill="#64748b" />
    <rect x="130" y="140" width="50" height="3" fill="#64748b" />
    
    {/* Code editor */}
    <rect x="220" y="80" width="150" height="120" fill="#1e293b" rx="8" />
    <rect x="230" y="90" width="130" height="20" fill="#475569" rx="3" />
    <rect x="235" y="95" width="20" height="10" fill="#0ea5e9" rx="2" />
    <rect x="260" y="95" width="15" height="10" fill="#10b981" rx="2" />
    <rect x="280" y="95" width="15" height="10" fill="#f59e0b" rx="2" />
    
    {/* Code lines */}
    <rect x="235" y="120" width="80" height="2" fill="#64748b" />
    <rect x="235" y="125" width="60" height="2" fill="#64748b" />
    <rect x="235" y="130" width="90" height="2" fill="#64748b" />
    <rect x="235" y="135" width="70" height="2" fill="#64748b" />
    <rect x="235" y="140" width="85" height="2" fill="#64748b" />
    <rect x="235" y="145" width="65" height="2" fill="#64748b" />
    <rect x="235" y="150" width="75" height="2" fill="#64748b" />
    <rect x="235" y="155" width="55" height="2" fill="#64748b" />
    <rect x="235" y="160" width="80" height="2" fill="#64748b" />
    <rect x="235" y="165" width="70" height="2" fill="#64748b" />
    <rect x="235" y="170" width="90" height="2" fill="#64748b" />
    <rect x="235" y="175" width="60" height="2" fill="#64748b" />
    <rect x="235" y="180" width="75" height="2" fill="#64748b" />
    
    {/* Terminal */}
    <rect x="80" y="220" width="120" height="60" fill="#1e293b" rx="8" />
    <rect x="90" y="230" width="100" height="15" fill="#475569" rx="3" />
    <rect x="95" y="235" width="10" height="5" fill="#ef4444" rx="2" />
    <rect x="110" y="235" width="10" height="5" fill="#f59e0b" rx="2" />
    <rect x="125" y="235" width="10" height="5" fill="#10b981" rx="2" />
    
    <text x="95" y="255" fill="#10b981" fontSize="12" fontFamily="monospace">$ npm start</text>
    <text x="95" y="270" fill="#ffffff" fontSize="12" fontFamily="monospace">Server running on port 3000</text>
    
    {/* Floating elements */}
    <circle cx="350" cy="50" r="8" fill="#0ea5e9" opacity="0.6" />
    <circle cx="50" cy="80" r="6" fill="#10b981" opacity="0.6" />
    <circle cx="350" cy="250" r="5" fill="#f59e0b" opacity="0.6" />
    
    {/* Connection lines */}
    <path d="M 350 50 Q 370 30 390 50" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 50 80 Q 30 60 10 80" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 350 250 Q 370 230 390 250" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);

// Contact Illustration - Comunicação e contato
export const ContactIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#f8fafc" className="dark:fill-gray-800" />
    
    {/* Envelope */}
    <rect x="150" y="120" width="100" height="60" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
    <path d="M 150 120 L 200 150 L 250 120" stroke="#64748b" strokeWidth="2" fill="none" />
    
    {/* Message content */}
    <rect x="160" y="130" width="80" height="3" fill="#64748b" />
    <rect x="160" y="135" width="60" height="3" fill="#64748b" />
    <rect x="160" y="140" width="70" height="3" fill="#64748b" />
    <rect x="160" y="145" width="50" height="3" fill="#64748b" />
    <rect x="160" y="150" width="65" height="3" fill="#64748b" />
    <rect x="160" y="155" width="55" height="3" fill="#64748b" />
    
    {/* Phone */}
    <rect x="80" y="200" width="60" height="80" fill="#1e293b" rx="8" />
    <rect x="85" y="205" width="50" height="60" fill="#0ea5e9" rx="3" />
    <rect x="90" y="210" width="40" height="50" fill="#ffffff" />
    <circle cx="110" cy="270" r="8" fill="#1e293b" />
    
    {/* Social media icons */}
    <circle cx="300" cy="120" r="20" fill="#0ea5e9" />
    <text x="300" y="127" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">in</text>
    
    <circle cx="300" cy="170" r="20" fill="#1e293b" />
    <text x="300" y="177" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">gh</text>
    
    <circle cx="300" cy="220" r="20" fill="#10b981" />
    <text x="300" y="227" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">wa</text>
    
    {/* Connection lines */}
    <path d="M 200 150 L 280 120" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" />
    <path d="M 200 150 L 280 170" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,5" />
    <path d="M 200 150 L 280 220" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
    
    {/* Floating message bubbles */}
    <circle cx="120" cy="80" r="15" fill="#0ea5e9" opacity="0.8" />
    <text x="120" y="87" textAnchor="middle" fill="white" fontSize="12">Hi!</text>
    
    <circle cx="280" cy="60" r="12" fill="#10b981" opacity="0.8" />
    <text x="280" y="67" textAnchor="middle" fill="white" fontSize="10">Hello</text>
    
    <circle cx="320" cy="100" r="10" fill="#f59e0b" opacity="0.8" />
    <text x="320" y="106" textAnchor="middle" fill="white" fontSize="8">👋</text>
    
    {/* Animated dots */}
    <circle cx="180" cy="100" r="3" fill="#0ea5e9">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="95" r="3" fill="#10b981">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="220" cy="100" r="3" fill="#f59e0b">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="1s" />
    </circle>
  </svg>
);

// Skills Illustration - Competências técnicas
export const SkillsIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#f8fafc" className="dark:fill-gray-800" />
    
    {/* Skill bars */}
    <rect x="80" y="80" width="200" height="20" fill="#e2e8f0" rx="10" />
    <rect x="85" y="85" width="180" height="10" fill="#0ea5e9" rx="5" />
    <text x="290" y="95" fill="#64748b" fontSize="12">90%</text>
    
    <rect x="80" y="110" width="200" height="20" fill="#e2e8f0" rx="10" />
    <rect x="85" y="115" width="160" height="10" fill="#10b981" rx="5" />
    <text x="290" y="125" fill="#64748b" fontSize="12">80%</text>
    
    <rect x="80" y="140" width="200" height="20" fill="#e2e8f0" rx="10" />
    <rect x="85" y="145" width="140" height="10" fill="#f59e0b" rx="5" />
    <text x="290" y="155" fill="#64748b" fontSize="12">70%</text>
    
    <rect x="80" y="170" width="200" height="20" fill="#e2e8f0" rx="10" />
    <rect x="85" y="175" width="120" height="10" fill="#ef4444" rx="5" />
    <text x="290" y="185" fill="#64748b" fontSize="12">60%</text>
    
    <rect x="80" y="200" width="200" height="20" fill="#e2e8f0" rx="10" />
    <rect x="85" y="205" width="100" height="10" fill="#8b5cf6" rx="5" />
    <text x="290" y="215" fill="#64748b" fontSize="12">50%</text>
    
    {/* Skill icons */}
    <circle cx="60" cy="90" r="15" fill="#0ea5e9" />
    <text x="60" y="97" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DB</text>
    
    <circle cx="60" cy="120" r="15" fill="#10b981" />
    <text x="60" y="127" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">API</text>
    
    <circle cx="60" cy="150" r="15" fill="#f59e0b" />
    <text x="60" y="157" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">UI</text>
    
    <circle cx="60" cy="180" r="15" fill="#ef4444" />
    <text x="60" y="187" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CL</text>
    
    <circle cx="60" cy="210" r="15" fill="#8b5cf6" />
    <text x="60" y="217" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">BI</text>
    
    {/* Floating elements */}
    <circle cx="320" cy="80" r="8" fill="#0ea5e9" opacity="0.6" />
    <circle cx="340" cy="100" r="6" fill="#10b981" opacity="0.6" />
    <circle cx="320" cy="120" r="5" fill="#f59e0b" opacity="0.6" />
    <circle cx="340" cy="140" r="7" fill="#ef4444" opacity="0.6" />
    <circle cx="320" cy="160" r="4" fill="#8b5cf6" opacity="0.6" />
    
    {/* Connection lines */}
    <path d="M 320 80 Q 340 60 360 80" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 340 100 Q 360 80 380 100" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 320 120 Q 340 100 360 120" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 340 140 Q 360 120 380 140" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 320 160 Q 340 140 360 160" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);
