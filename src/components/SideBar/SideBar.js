import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
  return (
   <div className='sidebar'>
      <div>Каталог</div>
      <nav className='nav'>
        <div className='nav-list'>
          <NavLink className='link' to='fly'>FLY</NavLink>
          <NavLink className='link' to='dino'>DINO</NavLink>
        </div>
      </nav>
   </div>
  )
}

export default SideBar