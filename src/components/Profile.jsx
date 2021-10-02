import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from "yup";
import { getUserSelector, loadUser, updateMe } from '../storemini/reducers/user';

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
export default function Profile() {
    const me = useSelector(getUserSelector);
    const dispatch = useDispatch();
    const profileSchema = Yup.object().shape({
        contactNo: Yup.string().required("Required").label("Contact Number"),
        province: Yup.string().required("Required").label("Province"),
        city: Yup.string().required("Required").label("City"),
        address: Yup.string().required("Required").label("Address"),
    });

    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div className="display-6 px-3 fw-bold mt-3">Profile</div>
            <Formik
                initialValues={{
                    contactNo: "",
                    province: "",
                    city: "",
                    address: ""
                }}
                validationSchema={profileSchema}
                onSubmit={(values) => {
                    // console.log(values);
                    dispatch(updateMe(values));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        {me && (
                            <div class="row">
                                <div class="col-md-3 border-right">
                                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                                        <img class="rounded-circle mt-3 " width="150px"
                                            src={`${process.env.REACT_APP_URL}/img/${me.image}`}
                                            alt='user img'
                                        />
                                        <span class="font-weight-bold">{me?.name}</span>
                                        <span class="text-black-50">{me?.email}</span>
                                        <span className='mx-5 '>
                                            {/* <input type="file" class="form-control-small btn-danger m-4" /> */}
                                        </span>
                                        {/* */}
                                    </div>
                                </div>
                                <div class="col-md-4 border-right ">
                                    <div class="p-3 py-5">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <h4 class="text-right">Profile Settings</h4>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12"><label class="labels">User Name</label><input readOnly type="text" class="form-control" value={me.name} /></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12"><label class="labels">Mobile Number</label>
                                                <div class="mb-4 ">
                                                    <Field
                                                        name="contactNo"
                                                        className="form-control"
                                                        placeholder={me.contactNo}
                                                    />
                                                    {errors.contactNo && touched.contactNo ? (
                                                        <div class="alert alert-danger  p-2" role="alert">
                                                            {errors.contactNo}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="p-3 py-5">
                                        <div class="col-md-12"><label class="labels">Province</label>
                                            <div class="mb-4 ">
                                                <Field
                                                    name="province"
                                                    className="form-control"
                                                    placeholder={me.province}

                                                />
                                                {errors.province && touched.province ? (
                                                    <div class="alert alert-danger  p-2" role="alert">
                                                        {errors.province}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div class="col-md-12"><label class="labels">City</label>
                                            <div class="mb-4 ">
                                                <Field
                                                    name="city"
                                                    className="form-control"
                                                    placeholder={me.city}

                                                />
                                                {errors.city && touched.city ? (
                                                    <div class="alert alert-danger  p-2" role="alert">
                                                        {errors.city}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div class="col-md-12"><label class="labels">Area</label>
                                            <div class="mb-4 ">
                                                <Field
                                                    name="address"
                                                    className="form-control"
                                                    placeholder={me.address}

                                                />
                                                {errors.address && touched.address ? (
                                                    <div class="alert alert-danger  p-2" role="alert">
                                                        {errors.address}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>
                                        {/* <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control"  value="" /></div> */}
                                        <div class="mt-3"><button class="btn btn-danger profile-button" type="submit">Save Profile</button></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>


        </div>

    )
};

