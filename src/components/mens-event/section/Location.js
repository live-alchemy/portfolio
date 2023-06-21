import React from "react";
import andersonlake from "@images/andersonlake.jpg";

export function Location() {
  return (
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
                  Vancouver and expect a rugged gravel road and a steep driveway
                  for the final 25km.
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
  );
}
