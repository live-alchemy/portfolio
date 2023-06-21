import React from "react";

export function Register() {
  return (
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
          <p className="mb-4 is-size-6">
            Pricing is sliding scale, choose the amount you're able and willing
            to invest at this time. If money is not available, a seat can be
            made available for one who wants to assist with logistics, reach
            out:{" "}
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
  );
}
