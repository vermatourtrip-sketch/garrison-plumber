import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServicePage from '@/pages/ServicePage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import ServiceAreaPage from '@/pages/ServiceAreaPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import AboutPage from '@/pages/AboutPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { SERVICES, AREAS, servicePath } from '@/data/business';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />

            {SERVICES.map((s) => (
              <Route key={`main-${s.slug}`} path={servicePath(s.slug)} element={<ServicePage />} />
            ))}

            {SERVICES.map((s) =>
              AREAS.filter((a) => a.slug !== 'pittsboro').map((a) => (
                <Route
                  key={`${s.slug}-${a.slug}`}
                  path={`/${s.slug}-${a.slug}-nc`}
                  element={<ServiceLocationPage />}
                />
              ))
            )}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
        <div className="h-20 lg:hidden" aria-hidden="true" />
      </div>
    </BrowserRouter>
  );
}

export default App;
