import React, { useState } from 'react'
import "./Header.css"
import Login from '../../Landing/Login/Login'
const Header = () => {
    const[modal, setModal] = useState(false)
    const openModal = () => {
      setModal(true)
    }
    const closeModal = () => {
      setModal(false)
    }
  return (
    <div className='header-container'>
      <div className='header-wrapper'>
        <div className='header-logo'>
            <p>FirstBite.</p>
        </div>
        <div className='header-list'>
            <ul>
                <li >Menu</li>
                <li className>Zones</li>
                <li className=''>Contacts</li>
            </ul>
        </div>
         <button className='button_header' onClick={openModal}>Login</button>
      </div>
      {
        modal &&  <Login closeModal={closeModal}/>
      }
     
    </div>
  )
}

export default Header
