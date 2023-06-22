import React from "react";
import { BsSignal } from "react-icons/bs";
import { Link } from "gatsby";
import alex from "@images/alex.jpg";

export function Facilitator() {
  return (
    <section className="hero is-warning is-medium">
      <div className="hero-body" id="facilitator">
        <div className="container">
          <h2 className="title is-2">Facilitator</h2>
          <hr className="has-background-black-bis" />
          <div class="container">
            <div class="columns is-multiline is-vcentered">
              <div
                data-aos="fade-left"
                class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure class="image feather">
                  <img class="is-rounded" alt="alex in the alpine" src={alex} />
                </figure>
              </div>

              <div
                data-aos="fade-down"
                class="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 class="title is-3">Alex Folk</h1>
                <p class="is-size-4">
                  Breathworker, martial artist, dreamer, practitioner and men's
                  work facilitator.
                </p>
                <p className="is-size-5 mt-1">
                  A long time practitioner of Systema, yoga and Qi Gong, my
                  mission is to share the healing power of men's work in
                  conscious brotherhood to vitalize, awaken and activate the
                  sacred masculine in each and every man.
                </p>
                <p className="is-size-6 mt-5">
                  <Link to="/blog">
                    <button class="button">Writings</button>
                  </Link>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="sgnl://signal.me/#p/+17782668150"
                    className="button ml-2 is-info"
                  >
                    <span className="pr-1">Connect on Signal</span>
                    <span className="icon">
                      <BsSignal />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
