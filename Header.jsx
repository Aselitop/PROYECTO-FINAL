// Importamos React para usar JSX
import React from 'react';

// Importamos el componente Menu que será usado dentro del Header
import Menu from './Menu';

function Header() {
  return (
    <header> {/* Componente HTML <header> que representa la cabecera de la página */}
      <h1>Sitiesito web (Algo bien)</h1> {/* Título de la cabecera */}
      <Menu /> {/* Aquí se inserta el componente Menu, que muestra la navegación */}
    </header>
  );
}

// Exportamos el componente Header para que pueda ser usado en otros archivos
export default Header;
