import React from 'react';
import '../Footer/Footer.css'

const Footer = (props) => {
  return (
    <footer>
      <p id='Inc'>{props.text || "© 2024 Netflix, Inc."}</p>
    </footer>
  );
};


export default Footer; 
  