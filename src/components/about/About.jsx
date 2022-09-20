import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id='about'>
      <h5>GET TO KNOW</h5>
      <h2>ABOUT ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>FRONT-END DEVELOPMENT</h5>
              <ul>
                <li><small>React JS</small></li>
                <li><small>Javascript</small></li>
                <li><small>HTML</small></li>
                <li><small>CSS</small></li>
                <li><small>Bootstrap</small></li>
              </ul>
            </article>
            <article className='about__card'>
              <h5>BACK-END DEVELOPMENT</h5>
              <ul>
                <li><small>Python</small></li>
                <li><small>C</small></li>
                <li><small>Java</small></li>
              </ul>
            </article>
          </div>

          <p>
            Hey! Glad you made it this far :) <br></br>
            I'm currently a third-year undergrad at the University of Chicago, 
            and an aspiring software engineer specializing in web development!
            My love for programming stems from its unique and powerful capabilities 
            in rewarding creativity. The element of creativity is highly prevalent
            in my identity&mdash;dancer, coder, writer.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About