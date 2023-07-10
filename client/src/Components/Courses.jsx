import React from 'react'
import jeelogo from '../Assets/jee-main logo.png'
import '../StyleSheets/courses.css';

function Courses() {
  return (
  <>
  <div id="invisible"></div>
  <div id="courses-container">
        <div id='courses-heading'>
            <p>Courses for <span>2023</span></p>
        </div>
    <div id="courses">
        <div className="course1">
            <div className="course-logo">
                <img src={jeelogo} alt="" />
            </div>
            <div className="course-name">
                JEE Main Crash Course
            </div>
            <p className="course-description">
                The most trusted Crash Course
            </p>
            <a href='' className='course-join'>Join now</a>
        </div>
        <div className="course1">
            <div className="course-logo">
                <img src={jeelogo} alt="" />
            </div>
            <div className="course-name">
                JEE Main Crash Course
            </div>
            <p className="course-description">
                The most trusted Crash Course
            </p>
            <a href='' className='course-join'>Join now</a>
        </div>
        <div className="course1">
            <div className="course-logo">
                <img src={jeelogo} alt="" />
            </div>
            <div className="course-name">
                JEE Main Crash Course
            </div>
            <p className="course-description">
                The most trusted Crash Course
            </p>
            <a href='' className='course-join'>Join now</a>
        </div>
    </div>
  </div>
  </>
  )
}

export default Courses