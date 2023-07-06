import './App.css';
import Homepage from './Components/Home';
import Content from './Components/Content';
import About from './Components/About';
import Stars from './Components/Stars';
import Courses from './Components/Courses';
import Testseries from './Components/Testseries';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Content />
      <About />
      <Stars />
      <Courses />
      <Testseries />
      <Footer />
    </div>
  );
}

export default App;
