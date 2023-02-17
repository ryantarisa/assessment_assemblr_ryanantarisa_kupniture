import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container center'>
          <div className='navlink'>
            {/* <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}> */}
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
