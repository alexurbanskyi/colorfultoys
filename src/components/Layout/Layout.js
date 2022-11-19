import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './Layout.css'

function Layout({basketList}) {
  console.log('BASKETLIST --->', basketList)
  return (
    <div className='main'>
      <Header basketList={basketList}/>
      <div className='layout'>
          <SideBar/>
          <div className='outlet'>
            <Outlet />
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout