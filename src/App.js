import './App.css';
import { Contact } from './Components/Contact/Contact';
import { Intro } from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import { Skills } from './Components/Skills/Skills';
import { Works } from './Components/Works/Works';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div>
    <Navbar />
    <Intro />
     <Skills/>
    <Works/>
    <Contact/> 
    <Footer/>
    </div>
  );
}

export default App;
