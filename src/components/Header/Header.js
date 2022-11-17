import React from 'react'
import './Header.css'
import logo from '../../images/LogoNew.png'
import back from '../../images/back.png'
import { SlBasket } from "react-icons/sl";

function Header() {
  return (
    <div className='header' style={{ backgroundImage: `url(${back})` }}>
      <img src={logo}/>
      <div className='basket' onClick={() => console.log('BUY!!')}>
        <SlBasket size={'35px'}/>
      </div>
    </div>
  )
}

export default Header