import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from "yup";
import { UserContext } from './contexts/UserContext';

export default function Profile() {
    const { user } = useContext(UserContext);
    const [me, setMe] = useState({})
    const profileSchema = Yup.object().shape({
        contactNo: Yup.string().required("Required").label("Contact Number"),
        province: Yup.string().required("Required").label("Province"),
        city: Yup.string().required("Required").label("City"),
        address: Yup.string().required("Required").label("Address"),
      });
    const getMe = () => {
        setMe(user.data);
    }
    useEffect(() => {
        getMe();
        return () => {
            console.log("Profile clean up");
        }
    }, [])
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
                      console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        {user && (
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
                                            <div class="col-md-12"><label class="labels">User Name</label><input readOnly type="text" class="form-control" placeholder="Enter User Name" value={me.name} /></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12"><label class="labels">Mobile Number</label>
                                            <div class="mb-4 ">
                                                    <Field
                                                        name="contactNo"
                                                        className="form-control"
                                                        placeholder="Contact Number"
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
                                                        placeholder="Province"
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
                                                        placeholder="City"
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
                                                        placeholder="Address"
                                                    />
                                                    {errors.address && touched.address ? (
                                                        <div class="alert alert-danger  p-2" role="alert">
                                                            {errors.address}
                                                        </div>
                                                    ) : null}
                                                </div>

                                        </div>
                                        {/* <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="Enter Address" value="" /></div> */}
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

