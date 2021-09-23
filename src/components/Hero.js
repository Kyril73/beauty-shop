import React from 'react'
import '../components/hero.scss'
import headerImg from "../images/header-1.png"


function Hero() {
  return (
    <div>
      <section id="hero">
        <div className="hero container--md">
          <div className="hero__content">
            <h2>TOP COLLECTIONS</h2>
            <h1>new Design 2021</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, veritatis.</p>
            <a href="/#" className="btn btn--filled">SHOP NOW</a>
          </div>
          <img src={headerImg} alt="hero" className="hero__img" />
        </div>
      </section>
    </div>
  )
}

export default Hero
