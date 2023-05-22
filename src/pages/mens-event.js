import React from "react";
import { Widget } from "@typeform/embed-react";
import mtns from "@images/mtns.jpg";
import Header from "@components/layout/Header";

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
                className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure className="image mtns">
                  <img alt="mountainous rainbow" src={mtns} />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                className="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 className="title is-1">Men's Work Weekend</h1>
                <h4 className="title is-4">Interested in joining?</h4>
                <h4 className="title is-4">
                  We are currently croudsourcing to determine dates, location
                  and price!
                </h4>
                <h4 className="title is-4">
                  Fill out a registration form to have your voice heard.
                </h4>
                {/* <h3 className="title is-3">October 27-29th, 2023</h3>

                <h4 className="title is-4">$250, potluck style meals</h4>
                <p className="is-size-5">On the shores of Anderson Lake, BC</p> */}
                <p className="mt-5">
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
      <section className="hero is-medium" id="schedule">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2">Weekend Schedule</h2>
            <p>Proposed activites for the weekend</p>
            <hr />
            <div className="columns">
              <div className="column">
                <h4 className="title is-3">Friday</h4>
                <p className="pr-1 mb-2 is-size-5">
                  <u>Arrival</u>: get settled and share intentions for the days
                  ahead
                </p>
                <div style={{ height: "64px" }} />
                <p>
                  <b>5-7pm</b> Arrive and setup camp
                </p>
                <p>
                  <b>7pm</b> Dinner
                </p>
                <p>
                  <b>8pm</b> Opening Circle
                </p>
              </div>
              <div className="column">
                <h4 className="title is-3">Saturday</h4>
                <p className="pr-1 mb-2 is-size-5">
                  <u>Warrior</u>: high intensity activation practices
                </p>
                <p>
                  <b>8am</b> Cold water dunk and Qi Gong on the beach
                </p>
                <p>
                  <b>9am</b> Martial practice
                </p>
                <p>
                  <b>11am</b> Breakfast
                </p>
                <p>
                  <b>12pm</b> Paddling & hiking adventure
                </p>
                <p>
                  <b>4pm</b> Down time and prep
                </p>
                <p>
                  <b>5pm</b> Talent show & skill share
                </p>
                <p>
                  <b>7pm</b> Dinner and circle
                </p>
              </div>
              <div className="column">
                <h4 className="title is-3">Sunday</h4>
                <p className="pr-1 mb-2 is-size-5">
                  <u>Sage</u>: Invitation to fast, reflect and ground
                </p>
                <p>
                  <b>8am</b> Cold water dunk and Qi Gong on the beach
                </p>
                <p>
                  <b>9am</b> Breathwork practice
                </p>
                <p>
                  <b>10am</b> Shadow work
                </p>
                <p>
                  <b>12pm</b> Solo time
                </p>
                <p>
                  <b>2pm</b> Circle
                </p>
                <p>
                  <b>5pm</b> Sauna
                </p>
                <p>
                  <b>7pm</b> Dinner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2" id="register">
              Register
            </h2>
            <hr />
            <Widget id="s3VemTmm" style={{ width: "100%", height: "95vh" }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
