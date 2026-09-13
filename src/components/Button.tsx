import type { ReactNode } from 'react';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Button({ children, href, variant = 'primary', onClick }: { children: ReactNode; href: string; variant?: 'primary' | 'outline' | 'text'; onClick?: () => void }) {
  return <a className={`button button--${variant}`} href={href} onClick={onClick}>{children}<Arrow diagonal /></a>;
}
