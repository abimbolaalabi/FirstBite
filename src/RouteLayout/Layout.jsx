import React from 'react'
import Header from '../Components/Fixed/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Fixed/Footer/Footer'

const Layout = () => {
  const location = useLocation()
  const noHeaderRoutes = ["/profile", "/order", "/menu"]
  return (
    <div>
      {!noHeaderRoutes.includes(location.pathname) &&  <Header/>}
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
