import React from 'react'
import Header from '../Components/Fixed/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Fixed/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
