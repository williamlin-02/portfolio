import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Tough</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__status">
          <p>
            I am currently looking for a Software Engineer Intern position!
            I'm open to many different types of companies and work environments,
            so please don't hesitate to reach out! Thank you :)
          </p>
        </div>
        <div className="contact__email">
          <HiOutlineMail className='contact__email-icon'/>
          <h4>Email</h4>
          <h5>williamlin@uchicago.edu</h5>
          <a href="mailto:williamlin@uchicago.edu">Send a message</a>
        </div>
      </div>
    </section>
  )
}

export default Contact