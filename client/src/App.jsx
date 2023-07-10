import './App.css';
import Homepage from './Components/Home.jsx';
import Content from './Components/Content.jsx';
import About from './Components/About.jsx';
import Stars from './Components/Stars.jsx';
import Courses from './Components/Courses.jsx';
import Testseries from './Components/Testseries.jsx';
import Footer from './Components/Footer.jsx';

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
