import React from 'react'

function Footer() {
  return (
        <div className="page8">
          <div className="container-fliud mt-3 p-5">
            <div className="row">
              <div className="col">
                <div className="btn text-light px-3 " id="LogoBTN1">
                  <b>Logo</b>
                </div>
                <br />
                <address>
                  1901 Thornridge Cir,
                  <br />
                  Shiloh, Hawaii
                  <br />
                  81063
                </address>
              </div>
              <div className="col">
                <h5>
                  <b>Company</b>
                </h5>
                <span className="text-muted">About Us</span>
                <br />
                <span className="text-muted">Career</span>
                <br />
                <span className="text-muted">Team</span>
                <br />
                <span className="text-muted">Contact</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Product</b>
                </h5>
                <span className="text-muted">Service</span>
                <br />
                <span className="text-muted">Freelancer</span>
                <br />
                <span className="text-muted">Features</span>
                <br />
                <span className="text-muted">Development</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Links</b>
                </h5>
                <span className="text-muted">Privacy Policy</span>
                <br />
                <span className="text-muted">Term & Conditions</span>
                <br />
                <span className="text-muted">FAQ</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Follow Us</b>
                </h5>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-twitter"></i>
                </span>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-facebook"></i>
                </span>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-instagram"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer
