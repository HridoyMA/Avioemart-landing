import { lazy, Suspense } from 'react';
import { Header } from './components/layout';
import { Footer } from './components/layout';
import { HeroSection } from './components/sections';

// Lazy load sections below the fold for better performance
const ProfessionalsSection = lazy(() => import('./components/sections/ProfessionalsSection').then(module => ({ default: module.ProfessionalsSection })));
const MetricsSection = lazy(() => import('./components/sections/MetricsSection').then(module => ({ default: module.MetricsSection })));
const SupplierPortalSection = lazy(() => import('./components/sections/SupplierPortalSection').then(module => ({ default: module.SupplierPortalSection })));
const FeaturesSection = lazy(() => import('./components/sections/FeaturesSection').then(module => ({ default: module.FeaturesSection })));
const CTASection = lazy(() => import('./components/sections/CTASection').then(module => ({ default: module.CTASection })));

// Loading placeholder component
const SectionLoader = () => (
  <div className="py-16 sm:py-24 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <ProfessionalsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MetricsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SupplierPortalSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
