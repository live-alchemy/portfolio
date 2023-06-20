import React, { useEffect } from "react";
import { Link } from "gatsby";
import { FiHeadphones } from "react-icons/fi";
import { BsSignal } from "react-icons/bs";
// import { SiSpotify } from "react-icons/si";

import Logo from "@images/live-alchemy-logo.png";
import "@css/bulma.scss";

function Header() {
  useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }, []);
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="logo-header" alt="Live Alchemy logo" src={Logo} />
          </Link>
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbar-menu" className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item" style={{ paddingRight: "24px" }}>
              <Link to="/blog">Blog</Link>
            </div>
            <div className="navbar-item">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="sgnl://signal.me/#p/+17782668150"
                  className="button is-light"
                >
                  <span className="pr-1">I'm on Signal</span>
                  <span className="icon">
                    <BsSignal />
                  </span>
                </a>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/music" className="button is-light">
                  <span className="pr-1">Music</span>
                  <span className="icon">
                    <FiHeadphones />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
