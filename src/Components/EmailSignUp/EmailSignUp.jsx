import React from 'react';
import '../EmailSignUp/EmailSignUp.css'

const EmailSignup = (props) => {
  return (
    <div className="email-signup">
      <input 
        type="email" 
        placeholder={props.placeholder || "Ingresa tu email"} 
        className="email-input" 
      />
      <button className="subscribe-button">
        {props.buttonText || "Suscríbete ahora"}
      </button>
    </div>
  );
};

export default EmailSignup;

  