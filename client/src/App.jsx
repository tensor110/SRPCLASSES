import './App.css';
import Navbar from './Components/Navbar.jsx';
import Content from './Components/Content.jsx';
import About from './Components/About.jsx';
import Stars from './Components/Stars.jsx';
import Courses from './Components/Courses.jsx';
import Testseries from './Components/Testseries.jsx';
import Footer from './Components/Footer.jsx';
import Login from './Components/Login.jsx';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Content />
      <About />
      <Stars />
      <Courses />
      <Testseries />
      <Footer /> */}
      <Login />
    </div>
  );
}

export default App;
