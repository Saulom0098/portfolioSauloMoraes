import React from 'react';

// Infraestrutura Illustration
export const InfraImage: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#1e293b" />
    
    {/* Server rack */}
    <rect x="150" y="80" width="100" height="160" fill="#475569" stroke="#64748b" strokeWidth="2" />
    
    {/* Server units */}
    <rect x="155" y="85" width="90" height="20" fill="#0ea5e9" />
    <rect x="155" y="110" width="90" height="20" fill="#10b981" />
    <rect x="155" y="135" width="90" height="20" fill="#f59e0b" />
    <rect x="155" y="160" width="90" height="20" fill="#ef4444" />
    <rect x="155" y="185" width="90" height="20" fill="#8b5cf6" />
    <rect x="155" y="210" width="90" height="20" fill="#06b6d4" />
    
    {/* Network connections */}
    <circle cx="120" cy="100" r="8" fill="#0ea5e9" />
    <circle cx="120" cy="125" r="8" fill="#10b981" />
    <circle cx="120" cy="150" r="8" fill="#f59e0b" />
    <circle cx="120" cy="175" r="8" fill="#ef4444" />
    <circle cx="120" cy="200" r="8" fill="#8b5cf6" />
    <circle cx="120" cy="225" r="8" fill="#06b6d4" />
    
    {/* Connection lines */}
    <path d="M 128 100 L 155 95" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 128 125 L 155 120" stroke="#10b981" strokeWidth="2" />
    <path d="M 128 150 L 155 145" stroke="#f59e0b" strokeWidth="2" />
    <path d="M 128 175 L 155 170" stroke="#ef4444" strokeWidth="2" />
    <path d="M 128 200 L 155 195" stroke="#8b5cf6" strokeWidth="2" />
    <path d="M 128 225 L 155 220" stroke="#06b6d4" strokeWidth="2" />
    
    {/* Floating elements */}
    <circle cx="280" cy="80" r="6" fill="#0ea5e9" opacity="0.6" />
    <circle cx="300" cy="100" r="4" fill="#10b981" opacity="0.6" />
    <circle cx="280" cy="120" r="5" fill="#f59e0b" opacity="0.6" />
    <circle cx="300" cy="140" r="3" fill="#ef4444" opacity="0.6" />
    
    {/* Status indicators */}
    <circle cx="240" cy="95" r="3" fill="#10b981" />
    <circle cx="240" cy="120" r="3" fill="#10b981" />
    <circle cx="240" cy="145" r="3" fill="#f59e0b" />
    <circle cx="240" cy="170" r="3" fill="#10b981" />
    <circle cx="240" cy="195" r="3" fill="#ef4444" />
    <circle cx="240" cy="220" r="3" fill="#10b981" />
  </svg>
);

// Automação Illustration
export const AutomacaoImage: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#0f172a" />
    
    {/* Code editor */}
    <rect x="80" y="60" width="240" height="180" fill="#1e293b" rx="8" />
    <rect x="90" y="70" width="220" height="20" fill="#475569" rx="3" />
    
    {/* Code lines */}
    <rect x="100" y="100" width="80" height="2" fill="#64748b" />
    <rect x="100" y="105" width="60" height="2" fill="#64748b" />
    <rect x="100" y="110" width="90" height="2" fill="#64748b" />
    <rect x="100" y="115" width="70" height="2" fill="#64748b" />
    <rect x="100" y="120" width="85" height="2" fill="#64748b" />
    <rect x="100" y="125" width="65" height="2" fill="#64748b" />
    <rect x="100" y="130" width="75" height="2" fill="#64748b" />
    <rect x="100" y="135" width="55" height="2" fill="#64748b" />
    <rect x="100" y="140" width="80" height="2" fill="#64748b" />
    <rect x="100" y="145" width="70" height="2" fill="#64748b" />
    <rect x="100" y="150" width="90" height="2" fill="#64748b" />
    <rect x="100" y="155" width="60" height="2" fill="#64748b" />
    <rect x="100" y="160" width="75" height="2" fill="#64748b" />
    <rect x="100" y="165" width="85" height="2" fill="#64748b" />
    <rect x="100" y="170" width="65" height="2" fill="#64748b" />
    <rect x="100" y="175" width="80" height="2" fill="#64748b" />
    <rect x="100" y="180" width="70" height="2" fill="#64748b" />
    <rect x="100" y="185" width="90" height="2" fill="#64748b" />
    <rect x="100" y="190" width="60" height="2" fill="#64748b" />
    <rect x="100" y="195" width="75" height="2" fill="#64748b" />
    <rect x="100" y="200" width="85" height="2" fill="#64748b" />
    <rect x="100" y="205" width="65" height="2" fill="#64748b" />
    <rect x="100" y="210" width="80" height="2" fill="#64748b" />
    <rect x="100" y="215" width="70" height="2" fill="#64748b" />
    <rect x="100" y="220" width="90" height="2" fill="#64748b" />
    <rect x="100" y="225" width="60" height="2" fill="#64748b" />
    
    {/* Terminal */}
    <rect x="80" y="250" width="240" height="40" fill="#1e293b" rx="8" />
    <rect x="90" y="260" width="220" height="20" fill="#475569" rx="3" />
    <text x="100" y="275" fill="#10b981" fontSize="12" fontFamily="monospace">$ npm run build</text>
    
    {/* Floating elements */}
    <circle cx="50" cy="80" r="8" fill="#0ea5e9" opacity="0.6" />
    <circle cx="350" cy="120" r="6" fill="#10b981" opacity="0.6" />
    <circle cx="50" cy="160" r="5" fill="#f59e0b" opacity="0.6" />
    <circle cx="350" cy="200" r="4" fill="#ef4444" opacity="0.6" />
    
    {/* Connection lines */}
    <path d="M 58 80 Q 70 60 90 80" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 344 120 Q 360 100 380 120" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 55 160 Q 70 140 90 160" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 346 200 Q 360 180 380 200" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);

// Business Intelligence Illustration
export const BIImage: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background */}
    <rect width="400" height="300" fill="#f8fafc" className="dark:fill-gray-800" />
    
    {/* Dashboard */}
    <rect x="60" y="60" width="280" height="180" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" rx="8" />
    
    {/* Header */}
    <rect x="70" y="70" width="260" height="20" fill="#0ea5e9" rx="3" />
    <text x="200" y="83" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Dashboard Analytics</text>
    
    {/* Chart 1 - Bar chart */}
    <rect x="80" y="110" width="20" height="40" fill="#0ea5e9" />
    <rect x="110" y="120" width="20" height="30" fill="#10b981" />
    <rect x="140" y="105" width="20" height="45" fill="#f59e0b" />
    <rect x="170" y="115" width="20" height="35" fill="#ef4444" />
    <rect x="200" y="100" width="20" height="50" fill="#8b5cf6" />
    <rect x="230" y="125" width="20" height="25" fill="#06b6d4" />
    
    {/* Chart 2 - Line chart */}
    <path d="M 80 200 Q 120 180 160 190 Q 200 170 240 185 Q 280 160 320 175" stroke="#0ea5e9" strokeWidth="3" fill="none" />
    <circle cx="80" cy="200" r="3" fill="#0ea5e9" />
    <circle cx="120" cy="180" r="3" fill="#0ea5e9" />
    <circle cx="160" cy="190" r="3" fill="#0ea5e9" />
    <circle cx="200" cy="170" r="3" fill="#0ea5e9" />
    <circle cx="240" cy="185" r="3" fill="#0ea5e9" />
    <circle cx="280" cy="160" r="3" fill="#0ea5e9" />
    <circle cx="320" cy="175" r="3" fill="#0ea5e9" />
    
    {/* Chart 3 - Pie chart */}
    <circle cx="320" cy="120" r="25" fill="#10b981" />
    <path d="M 320 95 A 25 25 0 0 1 340 110 L 320 120 Z" fill="#f59e0b" />
    <path d="M 340 110 A 25 25 0 0 1 320 145 L 320 120 Z" fill="#ef4444" />
    <path d="M 320 145 A 25 25 0 0 1 300 110 L 320 120 Z" fill="#8b5cf6" />
    
    {/* Metrics */}
    <rect x="80" y="220" width="80" height="15" fill="#f1f5f9" rx="3" />
    <text x="120" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Revenue</text>
    
    <rect x="170" y="220" width="80" height="15" fill="#f1f5f9" rx="3" />
    <text x="210" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Growth</text>
    
    <rect x="260" y="220" width="80" height="15" fill="#f1f5f9" rx="3" />
    <text x="300" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Users</text>
    
    {/* Floating elements */}
    <circle cx="50" cy="80" r="6" fill="#0ea5e9" opacity="0.6" />
    <circle cx="350" cy="100" r="4" fill="#10b981" opacity="0.6" />
    <circle cx="50" cy="160" r="5" fill="#f59e0b" opacity="0.6" />
    <circle cx="350" cy="180" r="3" fill="#ef4444" opacity="0.6" />
    
    {/* Connection lines */}
    <path d="M 56 80 Q 70 60 90 80" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 346 100 Q 360 80 380 100" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 55 160 Q 70 140 90 160" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 347 180 Q 360 160 380 180" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
); 