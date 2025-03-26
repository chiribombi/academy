import React, { useState, useRef, useEffect } from 'react';
import { toast } from "sonner";
import { Check } from 'lucide-react';
import { submitForm } from '../lib/api';

const RequestForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    acceptance: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prev) => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitForm(formState);
      
      if (result.success) {
        toast.success("Solicitud enviada correctamente", {
          description: "Nos pondremos en contacto contigo pronto",
          action: {
            label: "Cerrar",
            onClick: () => console.log("Closed")
          }
        });
        
        setFormState({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: '',
          acceptance: false
        });
      } else {
        toast.error("Error", {
          description: result.message,
          action: {
            label: "Cerrar",
            onClick: () => console.log("Closed")
          }
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        action: {
          label: "Cerrar",
            onClick: () => console.log("Closed")
          }
        });
      } finally {
        setIsSubmitting(false);
      }
    };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="form" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            ¿Interesado en nuestros cursos?
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Solicita más información
          </h2>
          
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Completa el formulario y un asesor educativo se pondrá en contacto contigo para resolver todas tus dudas.
          </p>
        </div>
        
        <div 
          ref={formRef} 
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-border p-6 sm:p-10 opacity-0"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="course" className="block text-sm font-medium text-foreground">
                  Curso de interés <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  value={formState.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none bg-white"
                >
                  <option value="" disabled>Selecciona un curso</option>
                  <option value="tia-portal">Programación TIA PORTAL</option>
                  <option value="wincc-unified">Programación WinCC Unified</option>
                  <option value="universal-robots">Starter Universal Robots</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Mensaje o consulta
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none resize-none"
                placeholder="Escribe aquí tu consulta o mensaje"
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="acceptance"
                  name="acceptance"
                  type="checkbox"
                  required
                  checked={formState.acceptance}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border border-border rounded text-primary focus:ring-primary/25"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptance" className="text-foreground/80">
                  Acepto la <a href="/politica-privacidad" className="text-primary hover:underline">política de privacidad</a>, los{' '}
                  <a href="/terminos-condiciones" className="text-primary hover:underline">términos y condiciones</a> y el{' '}
                  <a href="/aviso-legal" className="text-primary hover:underline">aviso legal</a> <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-primary text-white rounded-full font-medium transition-colors hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar solicitud"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
