import React from 'react';
import './CustomFooter.css';

const CustomFooter = () => {
  return (
    <div className="end-section">
      <div className="end-section-contact">
        <p>¿Preguntas? Llama al <a href="tel:018009171564">01 800 917 1564</a></p>
      </div>
      <div className="end-section-links">
        <div>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Relaciones con inversionistas</a>
          <a href="#">Formas de ver</a>
          <a href="#">Información corporativa</a>
          <a href="#">Solo en Netflix</a>
        </div>
        <div>
          <a href="#">Centro de ayuda</a>
          <a href="#">Empleo</a>
          <a href="#">Términos de uso</a>
          <a href="#">Contáctanos</a>
        </div>
        <div>
          <a href="#">Cuenta</a>
          <a href="#">Canjear tarjetas de regalo</a>
          <a href="#">Privacidad</a>
          <a href="#">Prueba de velocidad</a>
        </div>
        <div>
          <a href="#">Prensa</a>
          <a href="#">Comprar tarjetas de regalo</a>
          <a href="#">Preferencias de cookies</a>
          <a href="#">Avisos legales</a>
        </div>
      </div>
      <div className="end-section-language">
        <button>Español</button>
      </div>
      <div className="end-section-country">
        <p>Netflix Colombia</p>
      </div>
    </div>
  );
};

export default CustomFooter;
