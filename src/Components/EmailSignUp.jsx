import React from 'react';

function EmailSignup() {
    return (
      <div className="email-signup">
        <input 
          type="email" 
          placeholder="Ingresa tu email" 
          className="email-input" 
        />
        <button className="subscribe-button">Suscríbete ahora</button>
      </div>
    );
}

export default EmailSignup;

  