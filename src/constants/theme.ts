export const COLORS = {
  primary: '#818cf8',
  secondary: '#6366f1',
  background: {
    start: 'from-slate-950/90',
    end: 'to-slate-900/90'
  }
} as const;

export const ANIMATIONS = {
  card: {
    duration: 0.8,
    ease: "power3.out"
  },
  hover: {
    scale: 1.02,
    duration: 0.3
  }
} as const;