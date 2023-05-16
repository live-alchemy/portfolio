import React, { useEffect, useState } from "react";
import mtns from "@images/mtns.jpg";
import Header from "@components/layout/Header";

function Event() {
  const [didSubmit, toggleDidSubmit] = useState(false);
  const [isSubmitting, toggleIsSubmitting] = useState(false);
  const [emailValid, toggleEmailValid] = useState(false);
  const [done, toggleDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    toggleIsSubmitting(true);
    toggleDidSubmit(true);
    if (email.includes("@") && email.includes(".")) {
      await fetch(`https://getform.io/f/dd220d3a-fea7-4e00-998a-78f27ea434f6`, {
        method: "POST",
        body: new FormData(event.target),
        headers: {
          Accept: "application/json",
        },
      });
      toggleDone(true);
    } else toggleEmailValid(false);
    toggleIsSubmitting(false);
  }
  useEffect(() => {
    if (email.includes("@") && email.includes(".")) {
      toggleEmailValid(true);
    } else toggleEmailValid(false);
  }, [email, toggleEmailValid]);
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
                <p className="is-size-5">On the shores of Anderson Lake, BC</p>
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
      <section className="hero is-medium" id="schedule">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2">Weekend Schedule</h2>
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
      <section className="hero is-medium" id="register">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2">Register</h2>
            <hr />
            <form id="contact" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name" className="label">
                  Name*
                </label>
                <div className="control">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    form="contact"
                    name="name"
                    className="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email*
                </label>
                <div className="control">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`input ${
                      !emailValid && didSubmit ? null : "is-danger"
                    }`}
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                {!emailValid && didSubmit ? (
                  <p className="help is-danger">This email is invalid</p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <div className="control">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    rows="2"
                    className="textarea"
                    placeholder="Textarea"
                  ></textarea>
                </div>
              </div>
              {done ? (
                <p>Got it! Thank you :)</p>
              ) : (
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="button is-success"
                >
                  Send
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
