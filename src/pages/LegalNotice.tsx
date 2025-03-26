import React from 'react';

const LegalNotice = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">1. Información general</h2>
          <p className="mb-4">
            En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la 
            Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a 
            continuación los siguientes datos de información general de este sitio web:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Titular: [Nombre de la empresa]</li>
            <li>NIF/CIF: [Número fiscal]</li>
            <li>Domicilio: [Dirección completa]</li>
            <li>Email de contacto: [email@dominio.com]</li>
            <li>Teléfono: [Número de teléfono]</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">2. Finalidad</h2>
          <p className="mb-4">
            La finalidad del sitio web es proporcionar información sobre servicios de formación profesional 
            en el ámbito de la automatización industrial y la robótica colaborativa, así como facilitar la 
            matriculación en dichos cursos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">3. Condiciones de uso</h2>
          <p className="mb-4">
            La utilización del sitio web le otorga la condición de Usuario, e implica la aceptación completa 
            de todas las cláusulas y condiciones de uso incluidas en las páginas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aviso Legal</li>
            <li>Política de Privacidad</li>
            <li>Política de Cookies</li>
          </ul>
          <p className="mt-4">
            Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de 
            utilizar este sitio web.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">4. Propiedad intelectual e industrial</h2>
          <p>
            El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, 
            compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto 
            y/o gráficos, son propiedad del titular o, en su caso, dispone de licencia o autorización expresa 
            por parte de los autores.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">5. Responsabilidad</h2>
          <p>
            El titular no se hace responsable de la información y contenidos almacenados en foros, redes sociales 
            o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en esta web.
            Sin embargo, en cumplimiento de lo dispuesto en la LSSI-CE, se pone a disposición de todos los usuarios 
            la posibilidad de contactar para retirar o denunciar contenidos que pudieran resultar inapropiados o ilícitos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">6. Ley aplicable y jurisdicción</h2>
          <p>
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web 
            o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se 
            someten expresamente las partes, siendo competentes para la resolución de todos los conflictos 
            derivados o relacionados con su uso los Juzgados y Tribunales más cercanos a [Ciudad].
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
