import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'
import dino from '../../images/dino.png'
import flower from '../../images/flower.png'
import fly from '../../images/fly.png'

function SideBar() {
  return (
   <div className='sidebar'>
      {/* <div className='sidebar-title'>Каталог</div> */}
      <nav className='nav'>
        <div className='nav-list'>
          <NavLink className='link' to='/'><img className='icon' src={dino}/></NavLink>
          <NavLink className='link' to='fly'><img className='icon' src={fly}/></NavLink>
          <NavLink className='link' to='flowers'><img className='icon' src={flower}/></NavLink>
        </div>
      </nav>
   </div>
  )
}

export default SideBar