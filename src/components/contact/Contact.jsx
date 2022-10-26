import React from "react";

function Contact() {
  return (
    <div className="contact-main">
      <div className="container py-5">
        <h2 className="text-center mb-5">It's So Easy To Contact Us</h2>
        <div className="row">
          <div className="col-md-8 px-5 py-3 rounded-3">
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label fw-bold"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="address@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label fw-bold"
              >
                Your Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="15"
                placeholder="Type your message......"
                style={{ resize: "none" }}
              ></textarea>
              <button className="btn btn-success mt-3">SUBMIT</button>
            </div>
          </div>
          <div
            className="col-md-4 border border-2 py-3 ms-auto shadow-sm"
            style={{ borderRadius: "10px" }}
          >
            <h2 className="text-center">X-Mart</h2>
            <hr />
            <span className="fw-bold">Address:</span>
            <address>1217, Dhaka, Bangladesh</address>
            <span className="fw-bold">Phone:</span>
            <p>+880-17XXXXXXXX</p>
            <span className="fw-bold">Email:</span>
            <p>xmart.commerce@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
