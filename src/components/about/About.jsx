import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsPatchCheckFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            
            <div className="about__frontend">
              <h3>FRONTEND DEVELOPMENT</h3>
              <div className="about__skills">
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>React JS</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>Javascript</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>HTML</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>CSS</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>Bootstrap</h4>
                </article>
              </div>
            </div>

            <div className="about__backend">
              <h3>BACKEND DEVELOPMENT</h3>
              <div className="about__skills">
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>Python</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>C</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>Javascript</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>Rust</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>SQL</h4>
                </article>
                <article className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <h4>DDMS</h4>
                </article>
              </div>
            </div>

          </div>

          <p>
            Hey! Glad you made it this far :) <br></br>
            I'm currently a 4th-year undergrad (+1 year for a Master's program graduating in 2025)
            at the University of Chicago studying Computer Science and Philosophy. 
            I'm an aspiring software engineer with experience in application and web develpoment,
            as well as databases (both RDMS and distributed database systems).
            My love for programming stems from its unique and powerful capabilities 
            in rewarding creative thinking. The element of creativity is highly prevalent
            in my identity&mdash;be it dancer, reader, or programmer.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About