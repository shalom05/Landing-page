import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Asegúrate de que el CSS esté configurado para Netflix

function App() {
  return (
    <>
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
      <main>
        <h1>Películas y series ilimitadas y mucho más</h1>
        <p>Disfruta de las mejores películas y series en cualquier momento y lugar.</p>
        <p id='abajo'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
        <div className="email-signup">
          <input 
            type="email" 
            placeholder="Ingresa tu email" 
            className="email-input" 
          />
          <button className="subscribe-button">Suscríbete ahora</button>
        </div>
      </main>
      <footer>
        <p>© 2024 Netflix, Inc.</p>
      </footer>
    </>
  );
}

export default App;
