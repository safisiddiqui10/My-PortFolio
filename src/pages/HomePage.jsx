import About from '../components/sections/About';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
// import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import { usePageMeta } from '../hooks/usePageMeta';

/** Single-page portfolio: every section in order. */
export default function HomePage() {
  usePageMeta({ path: '/' });

  return (
    <>
      <Hero />
      <About />
      {/* Experience is hidden for now; see components/sections/Experience.jsx */}
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
