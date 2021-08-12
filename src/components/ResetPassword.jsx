import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React from "react";
import "./styles/forgot.css";
import './styles/login.css';
import { Link } from "react-router-dom";
const loginSchema = Yup.object().shape({
  password: Yup.string().required("Required").label("Password"),
  confirmPassword: Yup.string().required("Required").label("ConfirmPassword"),
});


export default function ResetPassword({ onResetPassword ,match}) {
  return (
    <div className="container pt-5 mt-5 pb-5 font_fam w-25">
      <h3 className="submit-content fw-bold text-center mt-5">Reset Password</h3>
      <Formik
        initialValues={{
          password: "",
          confirmPassword:""
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          values.token=match.params.token;
          onResetPassword(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4 mt-5">
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="password"
              />
              {errors.password && touched.password ? (
                <div className="alert alert-danger  p-2 p-2 " role="alert">
                  {errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field
                name="confirmPassword"
                className="form-control"
                placeholder="confirmPassword"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="alert alert-danger  p-2" role="alert">
                  {errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className="cart mt-4 align-items-center">
              <button
                type="submit"
                className="btn text-uppercase w-100 creat_btn message_look fw-bold "
              >
                  RESET
              </button>
            </div>
            <Link className="creat_look text-center fw-bold mb-4" to="/login">
              <h5 className=" mb-2 mt-5 creat_look fw-bold ">LOGIN</h5>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
