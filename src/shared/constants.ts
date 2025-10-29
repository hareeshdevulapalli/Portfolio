// Shared constants
export const APP_CONFIG = {
  name: 'Alex Rodriguez - Frontend Engineer Portfolio',
  description: 'Frontend-focused Software Engineer with 6+ years building accessible, high-performance UI systems in React, Angular, and modern web stacks.',
  author: 'Alex Rodriguez',
  version: '1.0.0',
  contact: {
    email: 'alex@example.com',
    linkedin: 'https://linkedin.com/in/alexrodriguez',
    github: 'https://github.com/alexrodriguez',
    location: 'San Francisco, CA'
  }
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const ANIMATION_DURATION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms'
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060
} as const;
