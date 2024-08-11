import { useState } from 'react'
import MainContent from './Components/MainContent'
import Header from './Components/Header'
import Footer from './Components/Footer'
import EmailSignup from './Components/EmailSignUp'
import './App.css' // Asegúrate de que el CSS esté configurado para Netflix

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <EmailSignup />
      <Footer />
    </>
  );
}

export default App; 
