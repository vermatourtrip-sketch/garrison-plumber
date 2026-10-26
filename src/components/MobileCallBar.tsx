import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/business';

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-200 bg-white/95 px-4 py-3 shadow-nav backdrop-blur supports-[backdrop-filter]:bg-white/90 lg:hidden">
      <a
        href={PHONE_TEL}
        aria-label={`Call Garrison Plumbing at ${PHONE_DISPLAY}`}
        className="btn-primary flex w-full items-center justify-center gap-2"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
