import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Diary from '../components/Diary';
import Brands from '../components/Brands';
import CTA from '../components/CTA';

function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Diary />
      <Brands />
      <CTA />
    </div>
  );
}

export default HomePage;
