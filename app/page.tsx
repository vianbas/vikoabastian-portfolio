import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import LiveProjects from "@/components/LiveProjects";
import DevSecOpsWorkflow from "@/components/DevSecOps";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Timeline />
        <CaseStudies />
        <LiveProjects />
        <DevSecOpsWorkflow />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
