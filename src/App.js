
import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import SectionBottom from './components/SectionBottom';
import About from './components/About';
import Container from './components/Container';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';
import CheckIp from './components/CheckIp';


function App() {
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
