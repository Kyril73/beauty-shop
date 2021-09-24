import React from 'react'
import '../components/footer.scss'
import logoLight from '../images/logo-light.png'
import paymentImg from '../images/payment.bmp'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid container--md">
        <div className="footer__grid__item">
          <a href="#" className="footer__logo">
            <img src={logoLight} alt="Logo Light" />
          </a>
          <p className="footer__about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt culpa quod provident.
          </p>
          <img src={paymentImg} alt="payment" />
        </div>
        <div className="footer__grid__item">
          <h6>SHOPPING</h6>
          <ul className="footer__links">
            <li><a href="#">Clothing Store</a></li>
            <li><a href="#">Trending Products</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>
        <div className="footer__grid__item">
          <h6>Links</h6>
          <ul className="footer__links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Return and Exchange</a></li>
          </ul>
        </div>
        <div className="footer__grid__item">
          <h6>NEWS LETTER</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, voluptatum.</p>
          <form action="/#" className="news-letter">
            <input type="email" className="email-input" placeholder="Your Email" />
            <button type="submit">
              <i className="bx bx-envelope"></i>
              </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; COPYRIGHT GOES HERE 2021
      </div>
    </footer>
  )
}

export default Footer
