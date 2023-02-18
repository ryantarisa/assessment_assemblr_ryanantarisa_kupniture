import React from "react"
import "./style.css"
import logo from "../../components/assets/images/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <img className="logo" src={logo} alt='' />
            <p>Here you can explore the Kupniture story and learn more about our heritage and the events that shaped us.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Samarinda, Kalimantan Timur, 75119 , Indonesia. </li>
              <li>Email: Customer-care@kupniture.com</li>
              <li>Phone: +62 821 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
