import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">1. Objeto y aceptación</h2>
          <p className="mb-4">
            Los presentes términos y condiciones regulan el uso del servicio de formación profesional 
            ofrecido a través de esta plataforma. El acceso y uso de los servicios implica la aceptación 
            expresa y sin reservas de estos términos y condiciones.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">2. Servicios ofrecidos</h2>
          <p className="mb-4">
            Ofrecemos servicios de formación profesional en:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Programación TIA PORTAL</li>
            <li>Programación WinCC Unified</li>
            <li>Starter Universal Robots</li>
          </ul>
          <p className="mt-4">
            Los cursos se imparten de forma presencial y tienen una duración especificada en la descripción de cada curso.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">3. Proceso de matriculación</h2>
          <p className="mb-4">
            Para matricularse en nuestros cursos, el alumno deberá:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Completar el formulario de solicitud de información</li>
            <li>Recibir la confirmación de plaza disponible</li>
            <li>Realizar el pago del curso</li>
            <li>Recibir la confirmación de matrícula</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">4. Precios y forma de pago</h2>
          <p>
            Los precios de los cursos se establecen en la información específica de cada uno. 
            El pago deberá realizarse según las condiciones establecidas en el momento de la matriculación. 
            Los precios incluyen el IVA y cualquier otro impuesto aplicable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">5. Política de cancelación</h2>
          <p>
            Las cancelaciones deberán comunicarse con un mínimo de 7 días de antelación al inicio del curso. 
            Las cancelaciones realizadas fuera de este plazo no darán derecho a la devolución del importe abonado.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">6. Modificaciones del programa</h2>
          <p>
            Nos reservamos el derecho a realizar cambios en los programas de los cursos, fechas o profesorado 
            por causas justificadas, garantizando siempre la calidad de la formación y el cumplimiento de los 
            objetivos del curso.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">7. Propiedad intelectual</h2>
          <p>
            Todo el material didáctico entregado durante el curso está protegido por derechos de propiedad 
            intelectual. No está permitida su reproducción, distribución o modificación sin autorización expresa.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">8. Legislación aplicable</h2>
          <p>
            Estos términos y condiciones se rigen por la legislación española. Para cualquier controversia que 
            pudiera surgir, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
