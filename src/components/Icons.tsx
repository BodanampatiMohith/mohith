import React from 'react'

// Custom hand-drawn style icons - minimal, professional, monochrome
export const FBIIcons = {
  // Tech icons
  PythonIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="50" cy="30" r="10" />
      <circle cx="50" cy="70" r="10" />
      <path d="M50 40 L50 60" strokeLinecap="round" />
      <path d="M35 45 Q50 35 65 45" />
      <path d="M35 55 Q50 65 65 55" />
    </svg>
  ),
  
  JavaIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M30 40 L40 60 L50 40 L60 60 L70 40" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="30" r="8" />
      <path d="M50 70 L50 85" strokeLinecap="round" />
      <circle cx="50" cy="90" r="5" />
    </svg>
  ),

  JavaScriptIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="20" y="20" width="60" height="60" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 40 L60 60 M60 40 L40 60" strokeLinecap="round" />
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  ),

  ReactIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="50" cy="50" r="8" />
      <ellipse cx="50" cy="50" rx="30" ry="15" />
      <ellipse cx="50" cy="50" rx="30" ry="15" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="30" ry="15" transform="rotate(120 50 50)" />
    </svg>
  ),

  DatabaseIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="50" cy="25" rx="25" ry="12" />
      <path d="M25 25 L25 75 Q25 85 50 85 Q75 85 75 75 L75 25" />
      <ellipse cx="50" cy="75" rx="25" ry="12" />
      <path d="M25 50 Q25 60 50 60 Q75 60 75 50" />
    </svg>
  ),

  MLIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 70 L40 30 L60 50 L80 20" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="70" r="3" fill="currentColor" />
      <circle cx="40" cy="30" r="3" fill="currentColor" />
      <circle cx="60" cy="50" r="3" fill="currentColor" />
      <circle cx="80" cy="20" r="3" fill="currentColor" />
      <rect x="15" y="15" width="70" height="70" />
    </svg>
  ),

  CodeIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M30 40 L20 50 L30 60" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 40 L80 50 L70 60" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 30 L60 70" strokeLinecap="round" />
    </svg>
  ),

  CloudIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 60 Q20 45 35 40 Q40 25 55 25 Q75 25 80 40 Q95 42 95 60 Z" />
      <path d="M35 65 L50 55 L65 65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  FileIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M25 15 L75 15 L75 85 L25 85 Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 30 L65 30" strokeLinecap="round" />
      <path d="M35 45 L65 45" strokeLinecap="round" />
      <path d="M35 60 L65 60" strokeLinecap="round" />
      <path d="M35 75 L65 75" strokeLinecap="round" />
    </svg>
  ),

  EvidenceTagIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="25" y="20" width="50" height="65" rx="3" />
      <circle cx="50" cy="35" r="4" />
      <line x1="30" y1="50" x2="70" y2="50" strokeLinecap="round" />
      <line x1="30" y1="65" x2="70" y2="65" strokeLinecap="round" />
      <path d="M50 80 L45 90 L50 88 L55 90 Z" fill="currentColor" />
    </svg>
  ),

  FingerprintIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="50" cy="50" rx="35" ry="40" />
      <path d="M50 15 Q30 30 30 50 Q30 70 50 75 Q70 70 70 50" />
      <path d="M50 25 Q35 40 35 50 Q35 65 50 68 Q65 65 65 50" />
      <path d="M50 35 Q40 45 40 50 Q40 60 50 62 Q60 60 60 50" />
    </svg>
  ),

  ScanlineIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="20" y="20" width="60" height="60" />
      <line x1="20" y1="25" x2="80" y2="25" />
      <line x1="20" y1="35" x2="80" y2="35" />
      <line x1="20" y1="45" x2="80" y2="45" />
      <line x1="20" y1="55" x2="80" y2="55" />
      <line x1="20" y1="65" x2="80" y2="65" />
      <line x1="20" y1="75" x2="80" y2="75" />
    </svg>
  ),

  ToolsIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M30 50 L50 30 L70 50 L50 70 Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="8" />
      <path d="M50 20 L50 10 M50 90 L50 80 M20 50 L10 50 M90 50 L80 50" strokeLinecap="round" />
    </svg>
  ),

  SecurityTagIcon: () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M50 15 L75 25 L75 50 Q75 75 50 85 Q25 75 25 50 L25 25 Z" />
      <path d="M45 50 L50 55 L60 45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

// Icon wrapper component
interface IconProps {
  icon: React.ReactNode
  size?: string
  color?: 'green' | 'red' | 'gray'
}

export const Icon: React.FC<IconProps> = ({ icon, size = 'w-8 h-8', color = 'green' }) => {
  const colorClass = {
    green: 'text-fbi-neon-green',
    red: 'text-fbi-red',
    gray: 'text-gray-300',
  }

  return <div className={`${size} ${colorClass[color]}`}>{icon}</div>
}
