import React from 'react'
import profile from './assests/freelancers/albert.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <div className='nav-logo'>
            <a href='/'>Logo</a>
        </div>
        <div className='nav-search'>
            <input className='nav-input' type='text' placeholder=''></input>
            <button className='nav-button'><i className='fa fa-search'/></button>
        </div>
        <div className='nav-link'>
            <a href='/home'>Post Project</a>
            <a href='/home'>Search Project</a>
            <a href='/home'><i className='fa-regular fa-message'/></a>
            <a href='/home'><i className='fa-regular fa-heart'/></a>
            <div className='nav-profile'>
                <div className='nav-img'>
                    <img src={profile} alt='profile'/>
                </div>
                <i className='fa fa-angle-down'/>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar