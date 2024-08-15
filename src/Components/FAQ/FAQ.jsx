import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    '¿Qué es Netflix?',
    '¿Cuánto cuesta Netflix?',
    '¿Dónde puedo ver Netflix?',
    '¿Cómo cancelo?',
    '¿Qué puedo ver en Netflix?',
    '¿Es bueno Netflix para los niños?'
  ];

  return (
    <div className="faq-container">
      <h2>Preguntas frecuentes</h2>
      {questions.map((question, index) => (
        <div 
          key={index} 
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleQuestion(index)}
        >
          <div className="faq-question">
            {question}
            <span className="plus-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {/* Aquí puedes agregar la respuesta correspondiente */}
              <p>Respuesta a la pregunta "{question}".</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
