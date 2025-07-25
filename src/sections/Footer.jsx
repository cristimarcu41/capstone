import React from 'react'
import logo from '../Logo2.png'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-col footer-logo-col">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li><a href="tel:+123456789">+1 234 567 89</a></li>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
            <li><a href="/">Location</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Social</h4>
          <ul className="footer-links">
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
