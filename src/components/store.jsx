import React from 'react';

function store() {
  return (
    <>
  <section className="page-section cta">
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <div className="cta-inner bg-faded text-center rounded">
            <h2 className="section-heading mb-5">
              <span className="section-heading-upper">Come On In</span>
              <span className="section-heading-lower">We're Open</span>
            </h2>
            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <li className="list-unstyled-item list-hours-item d-flex">
                Sunday
                <span className="ms-auto">Closed</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Monday
                <span className="ms-auto">7:00 AM to 8:00 PM</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Tuesday
                <span className="ms-auto">7:00 AM to 8:00 PM</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Wednesday
                <span className="ms-auto">7:00 AM to 8:00 PM</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Thursday
                <span className="ms-auto">7:00 AM to 8:00 PM</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Friday
                <span className="ms-auto">7:00 AM to 8:00 PM</span>
              </li>
              <li className="list-unstyled-item list-hours-item d-flex">
                Saturday
                <span className="ms-auto">9:00 AM to 5:00 PM</span>
              </li>
            </ul>
            <p className="address mb-5">
              <em>
                <strong>Rishikesh</strong>
                <br />
                Uttarakhand India
              </em>
            </p>
            <p className="mb-0">
              <small>
                <em>Call Anytime</em>
              </small>
              <br />
              +91 (8394834953)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section about-heading">
    <div className="container">
      <img
        className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
        src="assets/img/about.jpg"
        alt="..."
      />
      <div className="about-heading-content">
        <div className="row">
          <div className="col-xl-9 col-lg-10 mx-auto">
            <div className="bg-faded rounded p-5">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">
                  Strong Coffee, Strong Roots
                </span>
                <span className="section-heading-lower">About Our Cafe</span>
              </h2>
              <p>
                Founded in 1987 by the Hernandez brothers, our establishment has
                been serving up rich coffee sourced from artisan farmers in
                various regions of South and Central America. We are dedicated
                to travelling the world, finding the best coffee, and bringing
                back to you here in our cafe.
              </p>
              <p className="mb-0">
                We guarantee that you will fall in
                <em>lust</em>
                with our decadent blends the moment you walk inside until you
                finish your last sip. Join us for your daily routine, an outing
                with friends, or simply just to enjoy some alone time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default store;
