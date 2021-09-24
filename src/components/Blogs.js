import React from 'react'
import '../components/blogs.scss'
import blogOne from '../images/blog-1.jpg'
import blogTwo from '../images/blog-2.jpg'
import blogThree from '../images/blog-3.jpg'

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h2 className="section-title">Latest Blogs</h2>
      <div className="blogs__grid">
        <div className="blog__item">
          <div className="blog__item__img">
            <img src={blogOne} alt="blog" />
          </div>
          <div className="blog__item__text">
            <div className="date">
              <i className="bx bx-calendar-check"></i> 24 September 2021
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
            <a href="#" className="btn btn--link">READ MORE</a>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__item__img">
            <img src={blogTwo} alt="blog" />
          </div>
          <div className="blog__item__text">
            <div className="date">
              <i className="bx bx-calendar-check"></i> 24 September 2021
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
            <a href="#" className="btn btn--link">READ MORE</a>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__item__img">
            <img src={blogThree} alt="blog" />
          </div>
          <div className="blog__item__text">
            <div className="date">
              <i className="bx bx-calendar-check"></i> 24 September 2021
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
            <a href="#" className="btn btn--link">READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
