import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import LiveProjects from "@/components/LiveProjects";
import OpenSource from "@/components/OpenSource";
import DevSecOpsWorkflow from "@/components/DevSecOps";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Timeline />
        <CaseStudies />
        <LiveProjects />
        <OpenSource />
        <DevSecOpsWorkflow />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
