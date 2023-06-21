import React from "react";

export function Schedule() {
  return (
    <section className="hero is-medium has-background-white-ter">
      <div className="hero-body" id="schedule">
        <div className="container">
          <h2 className="title is-2">Schedule</h2>
          <hr className="has-background-black-bis" />
          <div className="columns">
            <div className="column">
              <h4 className="title is-3">Friday</h4>
              <p className="pr-1 mb-2 is-size-5">
                <u>Arrival</u>: get settled and share intentions for the days
                ahead
              </p>
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
                <u>Sage</u>: fast, reflect & ground
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
                <b>12pm</b> Integration time
              </p>
              <p>
                <b>2pm</b> Sauna and Sound
              </p>
              <p>
                <b>4pm</b> Circle & Dinner
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12 has-text-centered py-6">
              <a href="#register" className="button is-danger">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
