import { useState } from "react";

import logo from "../../assets/img/logo.png";
import styles from "./header.module.scss";
import pageContainer from "../wrapper/_wrapper.module.scss";

import { NavLink } from "react-router-dom";

const Header = () => {
  // const [isHover, setIsHover] = useState(false);

  // const mouseEnter = () => {
  //   setIsHover(true);
  // };
  // const mouseOut = () => {
  //   setIsHover(false);
  // };
  // // const hoverStyle = {
  // //   fontWeight: 700,
  // // };

  return (
    <header className={styles.page__header}>
      <div className={pageContainer.page__container}>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
              aria-controls="navmenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={`${styles.menu__icon} navbar-toggler-icon`}
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item nav-item__home me-md-5">
                  <NavLink
                    className={`${styles.nav__link} nav-link_home`}
                    to="/"
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: isActive ? "underline" : "none",
                      // fontWeight: isHover ? "bold" : "normal",
                    })}
                    // // style={hoverStyle}
                    // onMouseEnter={mouseEnter}
                    // onMouseLeave={mouseOut}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item nav-item__about me-5">
                  <NavLink
                    to="/About"
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: isActive ? "underline" : "none",
                    })}
                    className={`${styles.nav__link} nav-link_about`}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item nav-item__services me-5">
                  <NavLink
                    className={`${styles.nav__link} nav-link_services`}
                    to="/Services"
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: isActive ? "underline" : "none",
                    })}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item nav-item_teams me-5">
                  <NavLink
                    className={`${styles.nav__link} nav-link_teams`}
                    to="/OurTeam"
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: isActive ? "underline" : "none",
                    })}
                  >
                    Our Teams
                  </NavLink>
                </li>
                <li className="nav-item nav-item__contact">
                  <NavLink
                    className={`${styles.nav__link_contact}`}
                    to="Contact"
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: isActive ? "underline" : "none",
                    })}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
