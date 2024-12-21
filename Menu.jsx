// Importamos React para usar JSX
import React from 'react';
// Importamos Link desde react-router-dom para navegar entre páginas sin recargar
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav> {/* Componente <nav> que representa la barra de navegación */}
      <ul> {/* Lista no ordenada para los enlaces de navegación */}
        <li><Link to="/">Inicio</Link></li> {/* Enlace a la página de inicio */}
        <li><Link to="/about">Sobre Nosotros</Link></li> {/* Enlace a la página "Sobre Nosotros" */}
        <li><Link to="/contact">Contacto</Link></li> {/* Enlace a la página de contacto */}
      </ul>
    </nav>
  );
}

// Exportamos el componente Menu para que pueda ser utilizado en otros archivos
export default Menu;
