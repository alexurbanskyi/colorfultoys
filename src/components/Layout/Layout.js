import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './Layout.css'

function Layout() {
  return (
    <div className='main'>
      <Header/>
      <div className='layout'>
         <SideBar/>
         <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout