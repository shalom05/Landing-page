import { useState } from 'react'
import Footer from './Components/Footer/Footer';
import MainContent from './Components/MainContent/MainContent';
import EmailSignup from './Components/EmailSignUp/EmailSignUp';
import Header from './Components/Header/Header';
import TVComponent from './Components/TVComponent/TVComponent';
import FAQ from './Components/FAQ/FAQ';
import CustomFooter from './Components/CustomFooter/CustomFooter';


function App() {
  return (
    <>
      <Header/>
      <Footer/>
      <MainContent />
      <EmailSignup />
      <TVComponent/>
      <FAQ />
      <CustomFooter />
    </>
  );
}

export default App; 
