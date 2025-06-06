import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const Home = () => {
  function openMenu() {
    document.body.classList += "menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <section id="landing">
      <div className="bg-img" id="bg-img">
        <nav>
          <div className="nav__container">
            <h1
              className="
              page__title 
              page__title--hover-effect 
              page__title--hover-effect--yellow"
            >
              MovieFlix
            </h1>
            <ul className="nav__link--list">
              <li>
                <Link to="/"
                  className="
              nav__link 
              nav__link--hover-effect 
              nav__link--hover-effect--yellow"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/"
                  className="
              nav__link 
              nav__link--hover-effect 
              nav__link--hover-effect--yellow"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="movies"
                  className="
              nav__link  
              nav__link--hover-effect
              nav__link--hover-effect--yellow
              nav__link--primary"
                >
                  Movies
                </Link>
              </li>
            </ul>
            <button className="btn__menu" onClick={() => openMenu()}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={() => closeMenu()}
              >
                <i className="fas fa-times"></i>
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <Link to="/"
                    className="menu__link"
                    onClick={() => closeMenu()}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/"
                    className="menu__link"
                    onClick={() => closeMenu()} 
                  >
                    Contact
                  </Link>
                </li>
                <li className="menu__list">
                  <Link
                    to="movies"
                    className="menu__link"
                    onClick={() => closeMenu()}
                  >
                    Movies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="overlay"></div>
          </div>
        </nav>
        <div className="container">
          <h1 className="intro__txt">Welcome to my Movie App!</h1>
          <Link to="movies">
            <button className="start__btn">Find Movies</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
