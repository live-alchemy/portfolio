import React from "react";
import mtns from "@images/mtns.jpg";
import Header from "@components/layout/Header";
import {
  Why,
  Register,
  Location,
  Facilitator,
  Schedule,
} from "@components/mens-event/section";

function Event() {
  return (
    <>
      <Header />
      <section className="hero events is-info is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline is-vcentered">
              <div
                data-aos="fade-left"
                className="column is-12-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure className="image mtns">
                  <img
                    style={{ borderRadius: "5px" }}
                    alt="mountainous rainbow"
                    src={mtns}
                  />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                className="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 className="title is-1 is-size-3-mobile">
                  Men's Work Weekend
                </h1>
                <h3 className="title is-3 is-size-5-mobile">
                  October 27-29th, 2023
                </h3>
                <p className="is-size-5 is-size-6-mobile">
                  An immersive weekend experience for men doing the work. On the
                  shores of Anderson Lake, BC
                </p>{" "}
                <p className="mt-4">
                  <a href="#schedule" className="button is-success mr-2">
                    Schedule
                  </a>
                  <a href="#register" className="button is-danger">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Why />
      <Schedule />
      <Facilitator />
      <Location />
      <Register />
    </>
  );
}

export default Event;
