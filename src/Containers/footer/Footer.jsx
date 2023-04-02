import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='section__margin'>
      <div className="container footer__container">

        <div className="footer__top text-center">
            <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
            <a href="#" className="btn-secondary">Request Early Access</a>
        </div>     

        <div className="footer__links">   
               
          <div className="footer__links-group">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className="footer__links-group">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Overons</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Counters</a></li>
              <li><a href="#">Contact</a></li>
            </ul>            
          </div>

          <div className="footer__links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>              
              <li><a href="#">Contact</a></li>
            </ul>            
          </div>

          <div className="footer__links-group">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
              <li><a href="#">085-132567</a></li>
              <li><a href="#">info@payme.net</a></li>              
            </ul>            
          </div>          
        </div>
        
        <h4 className='copyright text-center'>© 2021 GPT-3. All rights reserved.</h4>
      </div>
    </footer>
  )
}

export default Footer