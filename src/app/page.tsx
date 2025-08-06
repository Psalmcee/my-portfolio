
import CaseStudies from '@/components/CaseStudies';
import AdvertLogos from '@/components/AdvertLogos';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <AdvertLogos />
     <CaseStudies /> 
      <Footer />
    </div>
  );
}