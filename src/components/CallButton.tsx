import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/business';

export function CallButton({
  variant = 'primary',
  size = 'md',
  label = `Call ${PHONE_DISPLAY}`,
  ctaLabel,
  className = '',
}: {
  variant?: 'primary' | 'navy' | 'outline' | 'ghost';
  size?: 'md' | 'lg' | 'sm';
  label?: string;
  ctaLabel?: string;
  className?: string;
}) {
  const variantClass =
    variant === 'primary' ? 'btn-primary' : variant === 'navy' ? 'btn-navy' : variant === 'outline' ? 'btn-outline' : 'btn-ghost';
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'px-4 py-2 text-sm' : '';
  return (
    <a
      href={PHONE_TEL}
      aria-label={ctaLabel || `Call Garrison Plumbing at ${PHONE_DISPLAY}`}
      className={`${variantClass} ${sizeClass} ${className}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function ServiceLink({
  to,
  children,
  className = '',
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-1.5 font-semibold text-accent-700 hover:text-accent-800 ${className}`}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
