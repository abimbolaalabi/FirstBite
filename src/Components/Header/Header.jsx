import React, { useState } from 'react'
import "./Header.css"
const Header = () => {
    const[active, setActive] = useState("menu")
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
         <button className='button_header'>Login</button>
      </div>
     
    </div>
  )
}

export default Header
