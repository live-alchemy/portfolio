import React from "react";
import mtns from "@images/mtns.jpg";
import Header from "@components/layout/Header";

function Event() {
  return (
    <>
      <Header />
      <section class="hero events is-info is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline is-vcentered">
              <div
                data-aos="fade-left"
                class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure class="image mtns">
                  <img alt="mountainous rainbow" src={mtns} />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                class="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 class="title is-1">Men's Work Weekend</h1>
                <h3 class="title is-3">October 9th-11th 2022</h3>
                <p class="is-size-5">On the shores of Anderson Lake, BC</p>
                <p class="mt-4">
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
            <hr />
            <div className="columns">
              <div className="column">
                <h4 className="title is-3">Friday</h4>
                <p class="pr-1 mb-2 is-size-5">
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
                <p class="pr-1 mb-2 is-size-5">
                  <u>Warrior</u>: high intensity activation practices
                </p>
                <p>
                  <b>8am</b> Cold water dunk and Qi Gong on the beach
                </p>
                <p>
                  <b>10am</b> Martial practice
                </p>
                <p>
                  <b>12pm</b> Breakfast
                </p>
                <p>
                  <b>2pm</b> Group hike
                </p>
                <p>
                  <b>4pm</b> Talent show & skill share
                </p>
                <p>
                  <b>6pm</b> Dinner
                </p>
                <p>
                  <b>8pm</b> Circle
                </p>
              </div>
              <div className="column">
                <h4 className="title is-3">Sunday</h4>
                <p class="pr-1 mb-2 is-size-5">
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
      <section className="hero is-medium" id="register">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2">Register</h2>
            <hr />
            <form>
              <div class="field">
                <label class="label">Name*</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Name" />
                </div>
              </div>
              <div class="field">
                <label class="label">Email*</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-danger"
                    type="email"
                    placeholder="Email input"
                    value="hello@"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea
                    rows="2"
                    class="textarea"
                    placeholder="Textarea"
                  ></textarea>
                </div>
              </div>
              <button class="button is-success">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
