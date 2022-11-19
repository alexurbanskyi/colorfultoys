import React from 'react'
import './Header.css'
import logo from '../../images/LogoNew.png'
import back from '../../images/back.png'
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Header({basketList}) {

  const orderList = basketList.length;

  return (
    <div className='header' style={{ backgroundImage: `url(${back})` }}>
      <img src={logo}/>
      <Link className='basket-link' to='basket'>
        <SlBasket size={'35px'}/>
        {
          !(orderList === 0) ? <div className='basket-pcs'>{orderList}</div> : null
        }
      </Link>
    </div>
  )
}

export default Header