import React, { useState } from 'react'
import "./Header.css"
import Login from '../../Landing/Login/Login'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Landing/Auth/Modal'
const Header = () => {
    const[modal, setModal] = useState(false)
    const openModal = () => {
      setModal(true)
    }
    const closeModal = () => {
      setModal(false)
    }
    const navigate = useNavigate()
    const handlenavigate = () => {
      navigate("/contact")
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
                {/* <li className>Zones</li> */}
                <li className='' onClick={handlenavigate}>Contacts</li>
            </ul>
        </div>
         <button className='button_header' onClick={openModal}>Get Started</button>
      </div>
      {
        modal &&  <Modal closeModal={closeModal}/>
      }
     
    </div>
  )
}

export default Header
