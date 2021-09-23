import React from 'react'
import darkLogo from '../images/logo-dark.png'

// topbar close
const topBarCloseBtn = document.getElementById("topbar__close");
if (topBarCloseBtn) {
  const topbar = document.querySelector(".topbar");
  topBarCloseBtn.addEventListener("click", () => {
    topbar.classList.add("hide")
  })
}

// toggle menu
const navbar = document.querySelector(".navbar__content")
const toggleMenu = document.getElementById("toggle-menu")
const clickCatcher = document.getElementById("body-click-catcher")
const links = document.querySelectorAll(".nav__link")

if(navbar && toggleMenu && clickCatcher){
  toggleMenu.addEventListener("click", ()=> {
    navbar.classList.add("show")
    clickCatcher.style.display = "block"
    document.body.style.overflow ="hidden"
  })

  function closeMenu (){
    navbar.classList.remove("show")
    clickCatcher.style.display = "none"
    document.body.style.overflow = "auto"
  }
  clickCatcher.addEventListener("click", closeMenu)
  links.forEach((link) => link.addEventListener("click", closeMenu))
}

function Header() {
  return (
    <div>
      <header>
        {/* Body click catcher */}
        <div id="body-click-catcher"></div>
        {/* topbar */}
        <div className="topbar">
          <p>Free shipping, 30-day or refund</p>
          <i className="bx bx-x" id="topbar__close"></i>
        </div>


        {/* navbar */}
        <div className="navbar" id="navbar">
          {/* mobile only */}
          <div className="navbar__mobile">
            <a href="/#" className="navbar__logo">
              <img src={darkLogo} alt="logo" />
            </a>
            <i className="bx bx-menu" id="toggle-menu"></i>
          </div>

          {/* nav content */}
          <div className="navbar__content container--md">
            {/* branding */}
            <a href="/#" className="navbar__logo">
              <img src={darkLogo} alt="logo" /> 
            </a>


            {/* nav menu */}
            <ul className="navbar__links">
              <li><a href="#" className="nav__link">Home</a></li>
              <li><a href="#collections" className="nav__link">Collections</a></li>
              <li><a href="#best-sellers" className="nav__link">Best sellers</a></li>
              <li><a href="#blogs" className="nav__link">Blog</a></li>
            </ul>

            {/* nav icons */}
            <div className="navbar__icons">
              <a href="#" title="search">
                <i className="bx bx-search-alt"></i>
              </a>
              <a href="#" title="wishlist">
                <i className="bx bx-heart"></i>
              </a>
              <a href="#" title="cart">
                <i className="bx bx-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
