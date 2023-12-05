import './App.css';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Intro from './Components/intro/Intro';
import Navbar from './Components/navbar/Navbar';
import Skill from './Components/skill/Skill';
import Works from './Components/works/Works';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
