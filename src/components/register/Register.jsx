import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";

function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    firstName: yup.string().min(3).required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid Email Format").required("Required"),
    password: yup.string().min(4).required("Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="login-section container">
      <div className="col-md-6 mx-auto my-5">
        <h2>Please Register</h2>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="inputFirstName"
              className="col-sm-2 col-form-label fw-bold"
            >
              First Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </div>
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-danger">{formik.errors.firstName}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputLastName"
              className="col-sm-2 col-form-label fw-bold"
            >
              Last Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-danger">{formik.errors.lastName}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputEmail"
              className="col-sm-2 col-form-label fw-bold"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label fw-bold"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button type="submit" className="btn btn-success text-uppercase">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
