import './Logo.css'
import React from 'react'

const Logo = () => {
  return (
    <div className='logo'>
        <div className='chain'>
          <div className='chainLink'></div>
          <div className='chainLink'></div>
          <div className='chainSupport'></div>
          <div className='chainHook'></div>
          <a className='logoContainer' href="">
            <img className="logo-img" src="/imgs/logobg.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Logo