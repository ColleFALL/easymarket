// App.jsx — Composant racine qui assemble toutes les sections
import './index.css'
import Navbar          from './components/Navbar/Navbar'
import HeroSection     from './components/HeroSection/HeroSection'
import WhySection      from './components/WhySection/WhySection'
import HowItWorks      from './components/HowItWorks/HowItWorks'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import PricingSection  from './components/PricingSection/PricingSection'
import CTABanner       from './components/CTABanner/CTABanner'
import ClientsSection  from './components/ClientsSection/ClientsSection'
import OffresSection    from './components/OffresSection/OffresSection'

import PartnersSection from './components/PartnersSection/PartnersSection'
import ContactSection  from './components/ContactSection/ContactSection'
import Footer          from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhySection />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <ClientsSection />
      <OffresSection />
      <CTABanner />
      {/* <ShopsSection /> */}
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App