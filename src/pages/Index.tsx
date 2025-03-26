
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";
import RequestForm from "../components/RequestForm";
import Footer from "../components/Footer";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hashval = target.getAttribute('href');
        const targetElement = document.querySelector(hashval as string);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL
          window.history.pushState(null, '', hashval);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CoursesSection />
      <RequestForm />
      <Footer />
    </div>
  );
};

export default Index;
