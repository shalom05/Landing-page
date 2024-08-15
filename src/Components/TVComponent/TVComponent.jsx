import React from 'react';
import '../TVComponent/TVComponent.css'

const TVComponent = () => {
  return (
    <div className="tv-component">
      <div className="tv-text">
        <h1>Disfruta en tu TV</h1>
        <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
      </div>
      <div className="tv-image">
      <a href="https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/08/12/64d815064c0a596065582141.webp" target="_blank" rel="noopener noreferrer"></a>
      <img src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/08/12/64d815064c0a596065582141.webp" alt="TV con contenido" />
      </div>
    </div>
  );
};

export default TVComponent;

  