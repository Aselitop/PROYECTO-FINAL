// Importamos React para poder usar JSX
import React from 'react';

function Section({ title, content }) {  // Recibe props title y content
  return (
    <section> {/* Componente <section> que representa una sección de contenido */}
      <h2>{title}</h2> {/* Muestra el título pasado como prop */}
      <p>{content}</p> {/* Muestra el contenido pasado como prop */}
    </section>
  );
}

// Exportamos el componente Section para que pueda ser utilizado en otros archivos
export default Section;
