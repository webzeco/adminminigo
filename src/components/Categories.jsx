import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './styles/login.css';
import { CategoryContext } from "./contexts/categoryContext";
const loginSchema = Yup.object().shape({
  name: Yup.string().required("Required").label("name"),
  description: Yup.string().required("Required").label("description"),
  parent: Yup.string().label("parent"),
});
export default function Categories() {
  // console.log(categories);
  const {categories, deleteSubCategoryHandler, createSubCategoryHandler} = useContext(CategoryContext)
  const [parent, setParent] = useState('select parent');
  // const [main, setMain] = useState(false);
  // const [Count, setCount] = useState(0);
  let count=0;
  const handleChange = (e) => {
    setParent(e.target.value);
    console.log(e.target.value);
  }
  const mainHandleChange = () => {
    // setParent(e.target.value);
    // console.log(e.target.value);
    // setMain(main?false:true);
  }

  return (
    <div>
      <div class="container-fluid pb-5">
        <div class="row">
          <div class="col-lg-9 .col-md-9">
            <div class="display-4 px-3 fw-bold mt-3">Categories</div>
            <div class="display-7 px-3">Add,edit or delete a category</div>
          </div>
          <div class="col-lg-3 .col-md-12 mt-4">
            <div class="form-outline ">
              <input
                type="search"
                id="form1"
                class="form-control form-control-lg"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg_color pt-3  rounded h-100">
        <div class="card w-100 rounded">
          <div class="row d-flex justify-content-around  px-3">
            <div class="col-lg-3 col-md-3 mt-3 pb-5">
              <Formik
                initialValues={{
                  name: "",
                  description: "",
                  parent: "select parent"
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  values.parent = parent;
                  createSubCategoryHandler(values);
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div class="mb-4 mt-2 ">
                      <Field
                        name="name"
                        className="form-control"
                        placeholder="Name"
                      />
                      {errors.name && touched.name ? (
                        <div class="alert alert-danger  p-2" parent="alert">
                          {errors.name}
                        </div>
                      ) : null}
                    </div>

                    <div class="mb-4">
                      <Field
                        name="description"
                        type="description"
                        className="form-control"
                        placeholder="Description"
                      />
                      {errors.description && touched.description ? (
                        <div class="alert alert-danger  p-2 p-2 " parent="alert">
                          {errors.description}
                        </div>
                      ) : null}

                    </div>
                    {/* <div className="checkbox">
                      <div class="form-check">
                        <input class="form-check-input" onChange={mainHandleChange} type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          Main category
                        </label>
                      </div>
                    </div> */}
                    <div class="mb-4  text-primary">
                      <Field type='select'  component="select" name="parent" value={parent}
                       className={"form-control"} onChange={handleChange}>
                        <option value={'select parent'}>Select Parent</option>
                        {categories.map(cate => {
                          return <option value={cate.category}>{cate.category}</option>
                        })}
                      </Field>
                      {errors.parent && touched.parent ? (
                        <div class="alert alert-danger  p-2" parent="alert">
                          {errors.parent}
                        </div>
                      ) : null}
                    </div>
                    <div class="cart mt-4 align-items-center">
                      <button type="submit" class="lead btn text-uppercase w-100 creat_btn ">
                        create category
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              </div>
              <div class="col-lg-9 col-md-12 p-3 mt-2 ">
                <table class="table">
                  <thead class="bg-info text-white ">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Parent</th>
                      {/* <th scope="col">Order</th> */}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {categories?.map((cate )=> {
                   return cate?.subCategories?.map((subCate )=> {
                     count+=1;
                          return <tr key={count}>
                          <td>
                            <div class="form-check">
                              <label class="form-check-label" for="flexCheckDefault">
                                {count}
                              </label>
                            </div>
                          </td>
                          <td>{subCate.name}</td>
                          <td>{subCate.description}</td>
                          <td>{cate.category}</td>
                          <td>
                            {" "}
                              <button
                                class="btn btn-light text-light bg-danger  border"
                                type="button"
                                aria-expanded="false"
                                onClick={()=>deleteSubCategoryHandler({category:cate.category,subCategory:subCate.name})}
                              >
                                Delete
                              </button>
                              
                          </td>
                        </tr>
                         } );
                        })}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
