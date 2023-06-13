import React from "react";
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
                <h3 className="title is-3">October 27-29th, 2023</h3>
                <p className="is-size-5">
                  An immersive weekend experience for men doing the work. On the
                  shores of Anderson Lake, BC
                </p>{" "}
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
            <h2 className="title is-2">Schedule</h2>
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
                  <b>4pm</b> Down time and meal prep
                </p>
                <p>
                  <b>6pm</b> Dinner and Gratitude Circle
                </p>
                <p>
                  <b>730pm</b> Talent show & skill share
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
                  <b>12pm</b> Solo Integration time
                </p>
                <p>
                  <b>2pm</b> Circle
                </p>
                <p>
                  <b>5pm</b> Sauna and Sound
                </p>
                <p>
                  <b>7pm</b> Dinner & Closing Circle
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12 has-text-centered py-6">
                <a href="#register" className="button is-danger">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2" id="register">
              Registration
            </h2>
            <hr />
            <p className="title is-4">
              Secure your spot. This container will hold 8 men in total.
            </p>
            <p className="title is-6">
              Price covers venue rental, sauna use, accomodations and food
              basics.
            </p>
            <p className="mb-4">
              Choose the pricing option that works for you. If money is not
              available, there are two seats that can be made available for
              those who want to assist in other ways, reach out:{" "}
              <a href="mailto:live.alchemy@proton.me">live.alchemy@proton.me</a>
            </p>
            <div className="columns py-4">
              <div className="column">
                <div className="box has-text-centered py-5">
                  <h4 className="title is-3">Ballin on a budget</h4>
                  <a
                    href="https://buy.stripe.com/dR6aHhfO66bU34seUU"
                    target="_blank"
                    rel="noreferrer"
                    className="button is-secondary"
                  >
                    Register for $350
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="box has-text-centered py-5">
                  <h4 className="title is-3">The middle path</h4>
                  <a
                    href="https://buy.stripe.com/6oEg1BeK21VE48wdQR"
                    target="_blank"
                    rel="noreferrer"
                    className="button is-primary"
                  >
                    Register for $425
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="box has-text-centered py-5">
                  <h4 className="title is-3">Flex</h4>
                  <a
                    href="https://buy.stripe.com/dR63ePdFY6bUfRe28a"
                    target="_blank"
                    rel="noreferrer"
                    className="button is-warning"
                  >
                    Register for $500
                  </a>
                </div>
              </div>
            </div>
            <div className="columns py-4">
              <div className="column is-12">
                <p className="has-text-centered">
                  Need to pay by another method? Let me know:{" "}
                  <a href="mailto:live.alchemy@proton.me">
                    live.alchemy@proton.me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
