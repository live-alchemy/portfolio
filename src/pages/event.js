import React from "react";
import { Link } from "gatsby";
import mtns from "@images/mtns.jpg";
import Header from "@components/layout/Header";
import Logo from "@images/live-alchemy-logo.png";

function Event() {
  return (
    <>
      <Header />
      <section class="hero is-info is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline is-vcentered">
              <div
                data-aos="fade-left"
                class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure class="image is-square feather">
                  <img alt="mountainous rainbow" src={mtns} />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                class="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 class="titled title is-1">
                  <img
                    className="logo-header"
                    alt="Live Alchemy logo"
                    src={Logo}
                  />
                </h1>
                <h2 class="subtitled subtitle landing-subtitle">
                  🔮 Real Time Transformation 🐉
                </h2>
                <p class="is-size-5"></p>
                <h4 class="title is-5 mt-2">October 9th-11th</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
