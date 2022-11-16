import React from 'react'
import './Header.css'
import logo from '../../images/LogoNew.png'
import back from '../../images/back.png'

function Header() {
  return (
    <div className='header' style={{ backgroundImage: `url(${back})` }}>
      <img src={logo}/>
    </div>
  )
}

export default Header