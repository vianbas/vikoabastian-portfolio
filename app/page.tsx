import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
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
        <CaseStudies />
        <DevSecOpsWorkflow />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
