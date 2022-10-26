import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email Format").required("Required"),
    password: yup.string().min(3).required("required"),
  });

  //   const validate = (values) => {
  //     const errors = {};
  //     const { email, password } = values;
  //     if (!email) {
  //       errors.email = "Required";
  //     } else if (
  //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //     ) {
  //       errors.email = "Invalid Email Format";
  //     }
  //     if (!password) {
  //       errors.password = "Required";
  //     }
  //     return errors;
  //   };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  //   console.log(formik.errors);
  //   console.log(formik.touched);

  //   console.log(formik.values);
  return (
    <div className="login-section container">
      <div className="col-md-6 mx-auto my-5">
        <h2>Please Login</h2>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="staticEmail"
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
              {formik.errors.email && formik.touched.email && (
                <p className="text-danger">{formik.errors.email}</p>
              )}
            </div>
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
              {formik.errors.password && formik.touched.password && (
                <p className="text-danger">{formik.errors.password}</p>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-success text-uppercase">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
