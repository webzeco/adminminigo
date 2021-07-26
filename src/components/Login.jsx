import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/login.css';
const loginSchema = Yup.object().shape({
  username: Yup.string().required("Required").label("Username"),
  password: Yup.string().required("Required").label("Password"),
  role: Yup.string().label("Role"),
});
export default function Login({ onLogin }) {
  const [role, setRole] = useState('admin');
  const handleChange=(e)=>{
    setRole(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div class="container pt-5 mt-5 pb-5 font_fam w-25">
      <h3 class="submit-content fw-bold text-center mt-5">LOGIN</h3>
      <Formik
        initialValues={{
          username: "",
          password: "",
          role:"admin"
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          values.role=role;
          onLogin(values);
          // console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div class="mb-4 mt-5 ">
              <Field
                name="username"
                className="form-control"
                placeholder="Username"
              />
              {errors.username && touched.username ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.username}
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
              <Link
                to="/forgot"
                class="float-end small pb-2 pt-1 fg_link  fw-bold "
              >
                <p>FORGOT PASSWORD?</p>
              </Link>
            </div>
            
            <div class="mb-4 mt-5 text-primary">
            <Field type='select'  component="select" name="role" value={role} className={"form-control"} onChange={ handleChange }>
                   <option  value="admin">Admin</option>
                   <option  value="user">User</option>
                </Field>
              {errors.role && touched.role ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.role}
                </div>
              ) : null}
            </div>

            <div class="cart mt-4 align-items-center">
              <button type="submit" class="btn text-uppercase w-100 creat_btn ">
                {/* <a href="/">SIGN IN</a> */}
                SIGN IN
              </button>
            </div>

            <Link class="creat_look text-center fw-bold mb-4" to="/signup">
              <h5 class=" mb-2 mt-5 creat_look"> CREAT ACCOUNT</h5>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
