import React from "react";
import supPic from "./assets/support.png";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5 rounded bg-white">
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                Contact <b>Us</b>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={supPic}
                alt="Contact"
                className="img-fluid rounded w-100 h-100"
              />
            </div>
            <div className="col-lg-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    e-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-danger rounded-pill px-4"
                >
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
