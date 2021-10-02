import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import './styles/login.css';
import ImageUploader from "react-images-upload";
import { addNewBasket, deleteBasket, getAllBaskets, updateBasket } from "../services/basketService";
import { toast } from "react-toastify";
const basketSchema = Yup.object().shape({
  name: Yup.string().required("Required").label("name"),
  price: Yup.number().required("Required").label("Price"),
});
export default function Baskets() {
  const [image, setImage] = useState('select parent');
  const [baskets, setBaskets] = useState([]);
  useEffect(() => {
    getAllBasketsHandler();
  }, [])

  const getAllBasketsHandler = async () => {
    try {
      const { data } = await getAllBaskets();
      setBaskets(data.data);
      console.log(data.data);
    } catch (err) {
console.log(err);
    }
  }
  const handleChange = (e) => {
    // setParent(e.target.value);
    console.log(e.target.value);
  }
  const mainHandleChange = () => {
    // setParent(e.target.value);
    // console.log(e.target.value);
    // setMain(main?false:true);
  }
  const imageHandler = (picture) => {
    console.log(picture[0]);
    setImage(picture);
  }
  const onDeleteHandler = async (basket) => {
    console.log({ review: basket });
    const filtered = baskets.filter(rev => rev._id !== basket._id);
    setBaskets(filtered);
    await deleteBasket(basket._id);
    getAllBasketsHandler();
}
const onselectHandler = async (e, id) => {
    const preBaskets=[...baskets];
    console.log(e.target.checked, id);
    try {
       const {data}= await  updateBasket(e.target.checked,id);
       e.target.checked=e.target.checked?false:true;
        // console.log(data);
        return setBaskets(data.data);
    } catch (error) {
        toast.error("Something went Wrong Please Try again!!!");
        setBaskets(preBaskets);
    }
}
  const addNewBasketHandler = async (values) => {
    try {
      const { data } = await addNewBasket(values);
      console.log(data);
      setBaskets(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  
  return (
    <div>
      <div class="container-fluid pb-5">
        <div class="row">
          <div class="col-lg-9 .col-md-9">
            <div class="display-6 px-3 fw-bold mt-3">Baskets</div>
            <div class="display-7 px-3">Add or delete a Baskets</div>
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
                  parent: "select parent"
                }}
                validationSchema={basketSchema}
                onSubmit={(values) => {
                  const form = new FormData();
                  form.append("title", values.name);
                  form.append("price", values.price);
                  form.append("image", image[0]);
                  addNewBasketHandler(form);
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
                        name="price"
                        className="form-control"
                        placeholder="Price"
                      />
                      {errors.price && touched.price ? (
                        <div class="alert alert-danger  p-2" parent="alert">
                          {errors.price}
                        </div>
                      ) : null}
                    </div>

                    <div class="mb-4">
                      <ImageUploader
                        onChange={imageHandler}
                        withPreview
                        withIcon
                        buttonText='Choose image'
                        singleImage
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                      />
                    </div>
                    <div class="mb-4  text-primary">
                    </div>
                    <div class="cart mt-4 align-items-center">
                      <button type="submit" class="lead btn text-uppercase w-100 creat_btn ">
                        Add Basket
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div class="col-lg-9 col-md-12 p-3 mt-2 ">
              <div class="table-responsive">
                <table class="table">
                  <thead class="bg-info text-white ">
                    <tr>
                      <th scope="col bold">#</th>
                      <th scope="col">Basket</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Order</th> */}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {console.log({baskets})}
                    {baskets?.map((basket, index) => {
                      return <tr key={index}>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                              {index + 1}
                            </label>
                          </div>
                        </td>
                        <td>
                          <img className="img-fluid" src={`${process.env.REACT_APP_URL}/img/${basket.image}`}
                            height="40px" width="40px" alt="basket img" />
                        </td>
                        <td>{basket.title}</td>
                        <td>{basket.price}</td>
                        <td className="px-5" style={{width:"10%"}} >
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox"  onChange={(e) => onselectHandler(e, basket._id)} id="flexSwitchCheckChecked" checked={basket.status} />
                                </div>
                            </td>                        <td>
                          {" "}
                          <button
                            class="btn btn-light text-light bg-danger  border"
                            type="button"
                            aria-expanded="false"
                          onClick={()=>onDeleteHandler(basket)}
                          >
                            Delete
                          </button>

                        </td>
                      </tr>
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
