import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../Media/logo.png'

export default function Navbar() {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {  // Change this value if you want to trigger color change at a different scroll distance
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <nav id='navbar' className={navbarColor ? 'navbar-colored' : 'navbar-transparent'}>
        <img className="navLogo" src={logo}></img>
        <div className='navLinks'>
            <ul>
                <li> <a href='#aboutSection' >About</a></li>
                <li> <a href='#ExperienceSection'>Experience</a> </li>
                <li> <a href='#projectsSection'> Projects</a></li>
                <li> <a href='#ContactSection'> Contact</a></li>
            </ul>
        </div>
    </nav>

  )
}
