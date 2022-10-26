import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Footer from "../footer/Footer";

function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid Email Format").required("Required"),
      message: yup.string().max(100).required("Required"),
    }),
  });
  return (
    <div className="contact-main">
      <div className="container py-5">
        <h2 className="text-center mb-5">It's So Easy To Contact Us</h2>
        <div className="row">
          <div className="col-md-8 px-5 py-3 rounded-3">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="address@example.com"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
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
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className="text-danger">{formik.errors.message}</p>
                )}
                <button type="submit" className="btn btn-success mt-3 px-5">
                  SEND
                </button>
              </div>
            </form>
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
      <Footer />
    </div>
  );
}

export default Contact;
