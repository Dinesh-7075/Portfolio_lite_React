import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe'
import Section from './Components/Section';
import SectionData from './Data/SectionData';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AboutMe />
        {
          SectionData.map((val)=> {
            return <Section title={val.title} des={val.des} id={val.title}/>
          })
        }
        <Footer />
    </div>
  );
}

export default App;
