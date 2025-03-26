
import React, { useEffect, useRef } from 'react';
import { Clock, Users, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  hours: number;
  students: number;
  level: string;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  hours,
  students,
  level,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="group rounded-2xl bg-white border border-border hover-lift overflow-hidden opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-6">{description}</p>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="flex flex-col items-center justify-center p-3 bg-secondary/50 rounded-lg">
            <Clock className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs font-medium text-foreground/70">{hours} horas</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-secondary/50 rounded-lg">
            <Users className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs font-medium text-foreground/70">{students}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-secondary/50 rounded-lg">
            <Award className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs font-medium text-foreground/70">{level}</span>
          </div>
        </div>
        
        <a 
          href="#form" 
          className="block w-full py-3 text-center text-white bg-primary rounded-full transition-colors hover:bg-primary/90"
        >
          Solicitar información
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
