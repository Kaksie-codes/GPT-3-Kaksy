import React from 'react';
// import '../../App.css'
import './navbar.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
            <p>Sign In</p>
            <button>Sign Up</button>
        </div>
        <nav id={showMenu ? 'reveal' : ''} className={showMenu ? 'scale-up-center' : ''}>
          <ul className='nav__links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">what is GPT?</a></li>
            <li><a href="#">OpenAI</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Library</a></li>
          </ul>
          <div className="links">
            <p>Sign In</p>
            <button>Sign Up</button>
          </div>
        </nav> 
        <button className="nav__menu" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setShowMenu(true)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setShowMenu(true)}/>}
        </button>
      </div>      
    </header>
  )
}

export default Navbar