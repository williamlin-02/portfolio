import React from 'react'
import Resume from '../../assets/resume.pdf'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className='btn btn-primary'>Download Resume</a>
        <a href="https://www.linkedin.com/in/williamlin02/" className='btn btn-primary'><BsLinkedin/>  LinkedIn</a>
        <a href="https://github.com/williamlin-02" className='btn btn-primary'><FaGithub/>  GitHub</a>
        <a href="#contact" className='btn btn-primary'>Email</a>
    </div>
  )
}

export default CTA