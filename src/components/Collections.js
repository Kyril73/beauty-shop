import React from 'react'
import '../components/collections.scss'
import bannerOneImg from '../images/banner-1.jpg'
import bannerTwoImg from '../images/banner-2.jpg'

function Collections() {
  return (
    <div className="--md">
      {/* collections */}
      <section id="collections">
        <h2 className="section-title">Collections</h2>
        <div className="collections__grid">
          <div className="banner">
            <img src={bannerOneImg} alt="banner img" className="banner__img" />
            <div className="banner__text">
              <h2>Lipstick Collection</h2>
              <a href="#" className="btn btn--link">SHOP NOW</a>
            </div>
          </div>
          <div className="banner">
            <img src={bannerTwoImg} alt="banner img" className="banner__img" />
            <div className="banner__text">
              <h2>Lipstick Collection</h2>
              <a href="#" className="btn btn--link">SHOP NOW</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections
