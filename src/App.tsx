import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import HeroSlider from './sections/HeroSlider';
import Vision from './sections/Vision';
import Pourquoi from './sections/Pourquoi';
import Services from './sections/Services';
import Domaines from './sections/Domaines';
import Methodologie from './sections/Methodologie';
import Equipe from './sections/Equipe';
import Localisation from './sections/Localisation';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useLenis();

  useEffect(() => {
    // Add loaded class for initial animations
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="relative bg-navy min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSlider />
        <Vision />
        <Pourquoi />
        <Services />
        <Domaines />
        <Methodologie />
        <Equipe />
        <Localisation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
