import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/login.css';
import { updatePassword } from "../services/authService";
import { toast } from "react-toastify";
const userSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Required").label("currentPassword"),
  newPassword: Yup.string().required("Required").label("NewPassword"),
  confirmNewPassword: Yup.string().required("Required").label("ConfirmNewPassword"),
});
export default function AddUser() {
  const updatePasswordHandler=async (values)=>{
    try {
        const {data}=await updatePassword(values);
        console.log(data);
        toast.success("Password Successfully Updated !!!")
    } catch (error) {
        toast.error("Please enter Correct Current Password !");
    }
  }
  return (
    <div class="container pt-5 mt-5 pb-5 font_fam w-auto">
      <h3 class="submit-content fw-bold text-center mt-5">ADD NEW USER</h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password:"",
          confirmPassword:""
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          updatePasswordHandler(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div class="mb-4 mt-5 ">
              <Field
                name="name"
                className="form-control"
                placeholder="Username"
              />
              {errors.name && touched.name ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.name}
                </div>
              ) : null}
            </div>
            <div class="mb-4">
              <Field
                name="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.email}
                </div>
              ) : null}
            </div>

            <div class="mb-4">
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="password"
              />
              {errors.password && touched.password ? (
                <div class="alert alert-danger  p-2 p-2 " role="alert">
                  {errors.password}
                </div>
              ) : null}
            </div> <div class="mb-4">
              <Field
                name="confirmNewPassword"
                type="password"
                className="form-control"
                placeholder="confirmPassword"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div class="alert alert-danger  p-2 p-2 " role="alert">
                  {errors.confirmPassword}
                </div>
              ) : null}
            </div>
          <div class="cart mt-4 align-items-center">
              <button type="submit" class="btn text-uppercase w-100 creat_btn ">
                Add New User
              </button>
            </div>
            <Link class="creat_look text-center fw-bold mb-4" to="/">
              <h5 class=" mb-2 mt-5 creat_look">Go Back</h5>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
