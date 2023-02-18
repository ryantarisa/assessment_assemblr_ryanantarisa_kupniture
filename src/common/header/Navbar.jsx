import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu

  return (
    <>
      <header className='header'>
        <div className='container center'>
          <div className='navlink'>
              <ul className='link d_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/furniture'>furniture</Link>
              </li>
              <li>
                <Link to='/product'>product</Link>
              </li>
              <li>
                <Link to='/store'>store</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
