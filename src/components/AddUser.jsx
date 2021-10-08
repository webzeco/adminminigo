import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './styles/login.css';
import { updatePassword } from "../services/authService";
import { toast } from "react-toastify";
import { addUser } from "../services/UsersService";

export default function AddUser() {
  const history = useHistory();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(6)
      .max(50)
      .required("Required").label('Username'),
    password: Yup.string()
      .min(6)
      .max(50
      )
      .required("Required").label('Password'),
    confirmPassword: Yup.string()
      .min(6)
      .max(50)
      .required("Required").label('PasswordConfirm'),
    email: Yup.string().email().required("Required").label('Email'),
    contactNo: Yup.string().required("Required").label('Contact number'),

  });
  const addUserHandler = async (values) => {
    try {
      await addUser(values);
      history.push('/users');
      toast.success("User Successfully added");
    } catch (error) {
      toast.error('Operation Failed !!!');
    }
  }
  const updatePasswordHandler = async (values) => {
    try {
      const { data } = await updatePassword(values);
      console.log(data);
      toast.success("Password Successfully Updated !!!")
    } catch (error) {
      toast.error("Please enter Correct Current Password !");
    }
  }
  return (
    <div class="container mt-1  pb-5 font_fam w-50">
      <h3 class="submit-content fw-bold text-center mt-3" style={{ color: "#24a0ed" }}>ADD NEW USER</h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contactNo: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          addUserHandler(values);
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
                name="contactNo"
                className="form-control"
                placeholder="contactNo"
              />
              {errors.contactNo && touched.contactNo ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.contactNo}
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
                name="confirmPassword"
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
              <h5 class=" mb-2 mt-5 creat_look" >Go Back</h5>

            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
