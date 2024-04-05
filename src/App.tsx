import "./App.css";
import Footer from "./layout/Footer";
import { Toaster } from "./components/ui/toaster";
import Topbar from "./layout/Topbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Tech from "./pages/Tech";
import SectionContainer from "./layout/SectionContainer";
import { useNavigation } from "./hooks/useNavigation";
import NavTypes from "./types/navTypes";
import "./lib/scalePathSegments";

function App() {
  const { current, handleNavigate, refs } = useNavigation();

  return (
    <div className="dark font-mono overflow-hidden">
      <Topbar handleNavigate={handleNavigate} currentSection={current} />
      <SectionContainer ref={refs[NavTypes.HOME]}>
        <Hero handleNavigate={handleNavigate} />
      </SectionContainer>
      <div className="container">
        <SectionContainer ref={refs[NavTypes.PROFILE]}>
          <About />
        </SectionContainer>

        <SectionContainer ref={refs[NavTypes.TECH]}>
          <Tech />
        </SectionContainer>

        <SectionContainer ref={refs[NavTypes.PROJECTS]}>
          <Projects />
        </SectionContainer>

        <SectionContainer ref={refs[NavTypes.RESUME]}>
          <Resume />
        </SectionContainer>

        <SectionContainer ref={refs[NavTypes.CONTACT]} isLast>
          <Contact />
          <Footer />
        </SectionContainer>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
