import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.03)_100%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Formación especializada en tecnología
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-balance animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              Domina la <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">programación</span> y la <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary">robótica</span>
            </h1>
            
            <p ref={subtitleRef} className="text-lg sm:text-xl text-foreground/80 max-w-2xl opacity-0">
              Cursos diseñados para transformar tu pasión por la tecnología en habilidades profesionales. Aprende con expertos y da forma al futuro digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <a href="#courses" className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:shadow-primary/10 text-center">
                Ver cursos
              </a>
              <a href="#form" className="px-8 py-3 bg-white text-foreground font-medium rounded-full border border-border hover:border-primary/20 transition-all shadow-sm hover:shadow-md text-center">
                Solicitar información
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">+1,000 estudiantes</p>
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-foreground/80">4.9</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 mix-blend-multiply z-10"></div>
                <div className="w-full h-full bg-[url('/ur30.jpeg')] bg-cover bg-center animate-scale-in"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 rounded-2xl overflow-hidden rotate-6 animate-floating">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20 mix-blend-multiply z-10"></div>
                <div className="w-full h-full bg-[url('/plc.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="absolute -top-8 -left-8 w-64 h-64 rounded-2xl overflow-hidden -rotate-6 animate-floating" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-accent/20 mix-blend-multiply z-10"></div>
                <div className="w-full h-full bg-[url('/siemens.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
