import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object | object[];
}

const SITE_ORIGIN = 'https://garrisonplumbingnc.com';

function setTag(selector: string, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data: object | object[]) {
  const id = 'page-jsonld';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSeo(meta: SeoMeta) {
  const location = useLocation();
  useEffect(() => {
    document.title = meta.title;
    setTag('meta[name="description"]', 'content', meta.description);
    const canonical = meta.canonical || `${SITE_ORIGIN}${location.pathname}`;
    setLink('canonical', canonical);
    setTag('meta[property="og:title"]', 'content', meta.ogTitle || meta.title);
    setTag('meta[property="og:description"]', 'content', meta.ogDescription || meta.description);
    setTag('meta[property="og:type"]', 'content', meta.ogType || 'website');
    setTag('meta[property="og:url"]', 'content', canonical);
    setTag('meta[name="twitter:title"]', 'content', meta.ogTitle || meta.title);
    setTag('meta[name="twitter:description"]', 'content', meta.ogDescription || meta.description);
    if (meta.jsonLd) setJsonLd(meta.jsonLd);
    window.scrollTo(0, 0);
  }, [meta.title, meta.description, meta.canonical, meta.ogTitle, meta.ogDescription, meta.ogType, JSON.stringify(meta.jsonLd), location.pathname]);
}

export { SITE_ORIGIN };
