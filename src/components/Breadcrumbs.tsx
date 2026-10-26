import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-charcoal-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.to && !last ? (
                <Link to={item.to} className="font-medium text-charcoal-600 hover:text-accent-700">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? 'font-semibold text-navy-900' : ''} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="h-4 w-4 text-charcoal-400" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
