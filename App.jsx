
// Importando las librerías y componentes necesarios
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router para manejar rutas
import Header from './components/Header.jsx'; // Componente del encabezado
import Footer from './components/Footer.jsx'; // Componente del pie de página
import Section from './components/Section.jsx'; // Componente para las secciones principales
import FormPage from './components/FormPage.jsx'; // Componente para la página de contacto (con formulario)

// Componente principal de la app
function App() {
  return (
    <Router> {/* El Router envuelve toda la app y permite navegar entre rutas */}
      <div className="App"> {/* Contenedor principal */}
        <Header /> {/* El encabezado estará visible en todas las páginas */}
        
        <Routes> {/* Aquí definimos las rutas de la app */}
          {/* Ruta para la página principal (inicio) */}
          <Route path="/" element={<Section title="Inicio" content="Bienvenido a nuestra página web de la FACULTAD DE INFORMATICA." />} />
          
          {/* Ruta para la página "Sobre Nosotros" */}
          <Route path="/about" element={<Section title="Sobre Nosotros" content="La carrera de Informática se centra en el estudio y desarrollo de sistemas, software y aplicaciones digitales, así como en la resolución de problemas técnicos mediante el uso de computadoras y tecnología. A lo largo de la formación, se adquieren habilidades para diseñar, implementar y mantener sistemas informáticos que son fundamentales en diversos sectores, como la industria, la salud, la educación, la ciencia y el entretenimiento. Es una carrera que exige creatividad, análisis crítico y un interés por la innovación tecnológica, y ofrece un amplio abanico de oportunidades profesionales en un mundo cada vez más digitalizado." />} />
          
          {/* Ruta para la página de contacto (con un formulario) */}
          <Route path="/contact" element={<FormPage />} />
        </Routes>
        
        <Footer /> {/* El pie de página también estará visible en todas las páginas */}
      </div>
    </Router>
  );
}

export default App; // Exportamos el componente para poder usarlo en otros archivos
