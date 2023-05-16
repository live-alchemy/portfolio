import React from "react";
import { Link } from "gatsby";
import feather from "@images/feather.jpg";
import Header from "@components/layout/Header";

function HomePage() {
  return (
    <>
      <Header />
      <section class="hero is-warning is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline is-vcentered">
              <div
                data-aos="fade-left"
                class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure class="image feather">
                  <img
                    class="is-rounded"
                    alt="meditation posture"
                    src={feather}
                  />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                class="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 class="title is-3">Howdy!</h1>
                <p class="is-size-4">
                  I'm <span class="is-size-3">Alexander</span>,{" "}
                  <b>web developer</b>, <u>horseman</u> and{" "}
                  <i>modern day alchemist</i> 🔮
                </p>
                <p className="is-size-4 mt-1">
                  Welcome to my all purpose space on the web 👨‍💻
                </p>
                <nav class="level is-mobile mt-4">
                  <div class="level-left">
                    <div class="level-item">
                      <Link to="/portfolio">
                        <button class="button">Portfolio</button>
                      </Link>
                    </div>
                    <div class="level-item">
                      <Link to="/blog">
                        <button class="button">Blog</button>
                      </Link>
                    </div>
                    <div class="level-item">
                      <Link to="/mens-event">
                        <button class="button">Men's work</button>
                      </Link>
                    </div>
                  </div>
                </nav>
                <h4 class="title is-5 mt-2">Thanks for visiting</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
