import React, {useState} from 'react'
import '../StyleSheets/home.css'
import logo from '../Assets/srp-logo.png'

function Home() {
const navLinks = document.querySelectorAll('.icons a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

const [click, setClick] = useState(true);
const togglebutton= () =>{
  setClick(!click)
      }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="icons">
        <a href="">Results</a>
        <a href="#invisible">Courses</a>
      </div>
        <button id='login-button'>Login/Resister</button>
      <div className="menu-icon" id='hamburger' onClick={togglebutton}>
        <i className={click ? 'fa fa-bars' : 'fa-solid fa-xmark'}/>
      </div>
      <div className={click ? "dropdown-icons" : "dropdown-icons open"}>
        <a href="">Results</a>
        <a href="">Courses</a>
        <button id='login-button-mobile'>Login/Resister</button>
      </div>
    </nav>
  )
}
export default Home