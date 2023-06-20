import React from "react";
import { BsSignal } from "react-icons/bs";
import { Link } from "gatsby";
import mtns from "@images/mtns.jpg";
import alex from "@images/alex.jpg";
import andersonlake from "@images/andersonlake.jpg";
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
      <section className="hero is-primary is-medium has-text-black">
        <div className="hero-body" id="register">
          <div className="container">
            <h2 className="title has-text-black is-2">Registration</h2>
            <hr className="has-background-black-bis" />
            <p className="title has-text-black is-4">
              Secure your spot. This container will hold 8 men in total.
            </p>
            <p className="title has-text-black is-6">
              Price covers venue rental, sauna use, accomodations and food.
            </p>
            <p className="mb-4">
              Choose the pricing option that works for you. If money is not
              available, a seat can be made available for one who wants to
              assist with logistics, reach out:{" "}
              <a
                className="is-underlined has-text-info"
                href="mailto:live.alchemy@proton.me"
              >
                live.alchemy@proton.me
              </a>
            </p>
            <div className="columns py-4">
              <div className="column">
                <div className="box has-text-centered py-5">
                  <h4 className="title is-3 has-text-black">
                    Ballin on a budget
                  </h4>
                  <hr />
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
                  <h4 className="title is-3 has-text-black">The middle path</h4>
                  <hr />
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
                  <h4 className="title is-3 has-text-black">Flex</h4>
                  <hr />
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
                  <a
                    className="is-underlined has-text-info"
                    href="mailto:live.alchemy@proton.me"
                  >
                    live.alchemy@proton.me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    <img
                      class="is-rounded"
                      alt="alex in the alpine"
                      src={alex}
                    />
                  </figure>
                </div>

                <div
                  data-aos="fade-down"
                  class="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
                >
                  <h1 class="title is-3">Alex Folk</h1>
                  <p class="is-size-4">
                    Breathworker, martial artist, dreamer, practitioner and
                    facilitator of men's work.
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
      <section className="hero is-link is-medium">
        <div className="hero-body" id="location">
          <div className="container">
            <h2 className="title is-2">Location</h2>
            <hr />
            <div class="container">
              <div class="columns is-multiline is-vcentered">
                <div
                  data-aos="fade-left"
                  class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
                >
                  <figure class="image feather">
                    <img
                      style={{ borderRadius: "5px" }}
                      alt="Anderson Lake"
                      src={andersonlake}
                    />
                  </figure>
                </div>

                <div
                  data-aos="fade-down"
                  class="column has-text-centered-touch is-12-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
                >
                  <h1 class="title is-3">Anderson Lake, BC</h1>
                  <p class="is-size-4">A rugged and wild setting</p>
                  <p className="is-size-5 mt-2">
                    Location specifics will be sent after registration and car
                    pooling will be arranged. Budget roughly 4 hours from
                    Vancouver and expect a rugged gravel road and a steep
                    driveway for the final 25km.
                  </p>
                  <p className="is-size-6 mt-5">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/dir/Vancouver,+BC/Seton+Portage,+BC+V0N+3B0/@49.9893421,-124.1008358,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!2m2!1d-123.1207375!2d49.2827291!1m5!1m1!1s0x54809a9006608a15:0xaa059afe87711ba8!2m2!1d-122.2895451!2d50.707377?entry=ttu"
                      className="button is-info"
                    >
                      <span>Open in Maps</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-2" id="register">
              Registration
            </h2>
            <hr />
            <div className="columns py-4">
              <div className="column">
                <div className="box has-text-centered py-5">
                  <h4 className="title is-3 has-text-black">
                    Ballin on a budget
                  </h4>
                  <hr />
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
                  <h4 className="title is-3 has-text-black">The middle path</h4>
                  <hr />
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
                  <h4 className="title is-3 has-text-black">Flex</h4>
                  <hr />
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
