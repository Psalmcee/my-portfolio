
import CaseStudies from '@/components/CaseStudies';
import AdvertLogos from '@/components/AdvertLogos';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import TechnologiesWeUse from '@/components/TechnologiesWeUse';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
  {/* Hero Section */}
  <Hero />
 <AdvertLogos />
  <WhatWeDo />
  <CaseStudies />
  <TechnologiesWeUse />
  <StickyCTA />
  <Footer />
    </div>
  );
}