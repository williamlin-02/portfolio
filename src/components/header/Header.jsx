import React from 'react'
import './header.css'
import CTA from './CTA'
import PFP from '../../assets/profile.JPG'
import HeaderSocials from './HeaderSocials'
// import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>William Lin</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="pfp">
          <img src={PFP} alt="pfp" />
        </div>

        <div className='header__email'>williamlin@uchicago.edu</div>
      </div>
    </header>
  )
}

export default Header