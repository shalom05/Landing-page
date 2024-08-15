import React from 'react';
import '../MainContent/MainContent.css'

const MainContent = (props) => {
  return (
    <main>
      <h1 id='one'>{props.heading || "Películas y series ilimitadas y mucho más"}</h1>
      <p id='description'>{props.description || "Disfruta de las mejores películas y series en cualquier momento y lugar."}</p>
      <p id='abajo'>
        {props.subtext || "¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix."}
      </p>
    </main>
  );
};


export default MainContent;