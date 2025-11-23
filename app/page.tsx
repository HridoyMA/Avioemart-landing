import { Suspense } from 'react';
import { HeroSection } from '@/components/sections';
import { ProfessionalsSection } from '@/components/sections/ProfessionalsSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { SupplierPortalSection } from '@/components/sections/SupplierPortalSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CTASection } from '@/components/sections/CTASection';

// Loading placeholder component
const SectionLoader = () => (
  <div className="py-16 sm:py-24 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

export default function Home() {
  return (
    <>
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
    </>
  );
}
