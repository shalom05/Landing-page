// Header.js
import React from 'react';

function Header() {
    return (
      <header>
        <div className="header-content">
          <img 
            src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" 
            alt="Netflix logo" 
            className="netflix-logo" 
          />
          <div className="header-links">
            <button className="login-button">Iniciar sesión</button>
            <select className="language-selector">
              <option value="en">Inglés</option>
              <option value="es">Español</option>
              <option value="fr">Francés</option>
              {/* Agrega más idiomas según sea necesario */}
            </select>
          </div>
        </div>
      </header>
    );
}
  

export default Header; // Exportación por defecto
