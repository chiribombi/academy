import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">1. Información básica sobre protección de datos</h2>
          <p className="mb-4">
            De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR), le informamos que:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Responsable:</strong> [Nombre de tu empresa]</li>
            <li><strong>Finalidad:</strong> Gestionar la relación comercial y enviar comunicaciones sobre nuestros servicios.</li>
            <li><strong>Legitimación:</strong> Ejecución de un contrato, consentimiento del interesado.</li>
            <li><strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal.</li>
            <li><strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">2. Recogida de datos personales</h2>
          <p className="mb-4">
            Los datos personales que tratamos son:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Datos identificativos (nombre, apellidos)</li>
            <li>Datos de contacto (email, teléfono)</li>
            <li>Datos académicos y profesionales</li>
            <li>Datos de los servicios contratados</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">3. Finalidad del tratamiento</h2>
          <p className="mb-4">
            Tratamos sus datos personales con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gestión de la matriculación en nuestros cursos</li>
            <li>Prestación de servicios de formación</li>
            <li>Gestión administrativa y contable</li>
            <li>Envío de comunicaciones comerciales sobre nuestros servicios (con su consentimiento)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">4. Conservación de los datos</h2>
          <p>
            Los datos personales se conservarán mientras se mantenga la relación comercial y no se solicite su supresión. 
            Una vez finalizada la relación, los datos se conservarán bloqueados durante los plazos de prescripción legal 
            (generalmente 5 años) para atender posibles responsabilidades.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">5. Ejercicio de derechos</h2>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad 
            enviando un email a [tu-email@dominio.com] o por correo postal a [tu dirección]. En caso de no obtener 
            satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Agencia Española 
            de Protección de Datos (www.aepd.es).
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
