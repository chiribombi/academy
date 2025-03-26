import React, { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: "Programación TIA PORTAL",
      description: "En este curso destinado a profesionales interesados en adquirir conocimientos de programación de PLC's Siemens para el control de plantas o máquinas, te enseñaremos a instalar, configurar y programar de forma sencilla mediante el software TIA Portal.",
      image: "/tia-portal-v14.jpg",
      hours: 16,
      students: 324,
      level: "Profesional"
    },
    {
      title: "WinCC Unified",
      description: "Para profesionales interesados en adquirir conocimientos de programación de HMI y desarrollar visualizaciones en Siemens para el control de plantas o máquinas, te enseñaremos a instalar, configurar y programar pantallas de forma sencilla.",
      image: "/wincc-unified.jpg",
      hours: 16,
      students: 216,
      level: "Profesional"
    },
    {
      title: "Starter Universal Robots",
      description: "En este curso destinado a profesionales interesados en adquirir conocimientos de programación de robots colaborativos Universal Robots, te enseñaremos a instalar, configurar y programar robots de forma sencilla.",
      image: "/universal-robots.jpg",
      hours: 16,
      students: 158,
      level: "Profesional"
    }
  ];

  return (
    <section id="courses" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Nuestros cursos
          </div>
          
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            Formación especializada para el futuro digital
          </h2>
          
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Nuestros cursos combinan teoría y práctica para proporcionarte las habilidades que demanda el mercado tecnológico actual.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              hours={course.hours}
              students={course.students}
              level={course.level}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
