
import './App.css';
import 'aos/dist/aos.css';
import Aos from "aos";

import Menu from './components/Menu';
import Header from './components/Header';
import SectionBottom from './components/SectionBottom';
import About from './components/About';
import Container from './components/Container';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';
import CheckIp from './components/CheckIp';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease"
    });
  });

  return (
    <div>
      <CheckIp/>
      <Menu/>
      <Header/>
      <SectionBottom clipath="clipath1"/>
      <About/>
      <SectionBottom clipath="clipath2"/>
      <Container/>
      <Skills/>
      <SectionBottom clipath="clipath3"/>
      <Work/>
      <Footer/>
    </div>
    
  );
}

export default App;
