import React, { useContext, useEffect, useState } from "react";
import { Field, useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import Variants from "./common/Variant";
import Media from "./common/MediaComponent";
import { CategoryContext } from "./contexts/categoryContext";
import { useHistory } from "react-router-dom";
import { getProduct } from "../services/productServices";
import { useSelector } from "react-redux";
import { getEditProductSelector } from "../storemini/reducers/products";
///////////////////////////////////////
// import { productData } from './data'
//import "./utils/style/addProductComponent.css";

const EditProduct = () => {
  const product = useSelector(getEditProductSelector);
  const [description, setDescription] = useState(product.description);
  const [imgList, setImgList] = useState(product.images);
  const [images, setImages] = useState();

  const [variantsData, setVariantsData] = useState();
  const { categories, deleteSubCategoryHandler, createSubCategoryHandler } =
    useContext(CategoryContext);
  const [parent, setParent] = useState(product.category.split('/')[0]);
  const [children, setChildren] = useState([]);
  const [child, setChild] = useState(product.category.split('/')[1]);

  const handleParentChange = (e) => {
    setParent(e.target.value);
    console.log(categories.find((cate) => cate.category === e.target.value));
    setChildren(
      categories.find((cate) => cate.category === e.target.value).subCategories
    );
  };
  const handleChildChange = (e) => {
    setChild(e.target.value);
    console.log(e.target.value);
  };
  const formik = useFormik({
    initialValues: {
      title: product.title,
      price: product.price,
      category: product.category,
      costPerItem: product.costPerItem,
      chargeTax: product.chargeTax,
      // stockKeepingUnit: "",
      // barcode: "",
      trackQuantity: product.trackQuantity,
      sellOutofStock: product.sellOutofStock,
      availableQuantity: product.availableQuantity,
      physicalProduct: product.physicalProduct,
      weight: product.weight,
      variants: {},
    },
    validationSchema: Yup.object({
      // name: Yup.string()
      //     .max(15, "Must be less than 15 characters")
      //     .min(3, "name should be more than 3 characters")
      //     .required('REQUIRED'),
      // description: Yup.string()
      //     .max(1500, "Description should not be more than 1500 characters")
      //     .min(50, 'Description should be of minimum 100 words')
      //     .required("Required")
    }),
    onSubmit: (values) => {
      const form = new FormData();
      values.description = description;
      values.category = `${parent}/${child}`;
      values.variants = variantsData;
      console.log({ variantsData });
      values.imgNames = imgList;
      // values.images = images;
      images.forEach((img) => {
        form.append("images", img);
      });
      // for (const key in values) form.append(key, values[key]);
      // addProduct(values, form);
    },
  });
  useEffect(() => {
    console.log(product);
  }, [])
  return (
    <div className="container px-3">
      <div className="display-6 px-3 fw-bold mt-3 ">Edit Product</div>
      <form onSubmit={formik.handleSubmit}>
        <label className="title pb-2" htmlFor="title">
          Title
        </label>
        <input
          className="form-control mb-1 w-50"
          id="title"
          name="title"
          type="text"
          defaultValue={product.title}
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <div class="mb-4  text-primary">
          {/* <input type='select'  component="select" name="parent" value={parent}
                       className={"form-control"} onChange={handleParentChange}>
                        <option value={'select parent'}>Select Parent</option>
                        {categories?.map(cate => {
                          return <option value={cate.category}>{cate.category}</option>
                        })}
                      </input> */}
          <div className="select-container w-50">
            <label className="title pb-2" htmlFor="price">
              Category
            </label>
            <select className="form-control" onChange={handleParentChange}>
              <option value={parent}>{parent}</option>
              {categories?.map((cate) => (
                <option value={cate.category}>{cate.category}</option>
              ))}
            </select>
          </div>
          <div className="select-container w-50">
            <label className="title py-2" htmlFor="price">
              Sub Category
            </label>
            <select className="form-control" onChange={handleChildChange}>
              <option value={child}>{child}</option>
              {children?.map((cate) => (
                <option value={cate.name}>{cate.name}</option>
              ))}
            </select>
          </div>
          {/* <input type='select'  component="select" name="child" value={child}
                       className={"form-control"} onChange={handleChildChange}>
                        <option value={'select child'}>Select Child</option>
                        {children?.map(cate => {
                          return <option value={cate.name}>{cate.name}</option>
                        })}
                      </input> */}
          {/* {errors.parent && touched.parent ? (
                        <div class="alert alert-danger  p-2" parent="alert">
                          {errors.parent}
                        </div>
                      ) : null} */}
        </div>

        {/* .............................................. */}
        <label className="title pb-2" htmlFor="title">
          Discription
        </label>

        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
        />
        <Media
          setImagesList={(imgList) => setImgList(imgList)}
          setImages={(images) => setImages(images)}
        />
        {/* .............................................. */}
        <div className="h4">Pricing</div>
        <label className="title pb-2" htmlFor="price">
          Price
        </label>
        <input
          className="form-control mb-1 w-50"
          id="price"
          name="price"
          type="number"
          defaultValue={product.price}
          {...formik.getFieldProps("price")}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
        {/* .............................................. */}
        {/* 
        <label className="title pb-2" htmlFor="compareAtPrice">
          Compare at price
        </label>
        <input
          className="form-control mb-1 w-50"
          id="compareAtPrice"
          name="compareAtPrice"
          type="number"
          {...formik.getFieldProps("compareAtPrice")}
        />
        {formik.touched.compareAtPrice && formik.errors.compareAtPrice ? (
          <div>{formik.errors.compareAtPrice}</div>
        ) : null} */}

        {/* .............................................. */}
        {/* <label className="title pb-2" htmlFor="costPerItem">
          Cost per item
        </label>
        <input
          className="form-control mb-1 w-50"
          id="costPerItem"
          name="costPerItem"
          type="number"
          {...formik.getFieldProps("costPerItem")}
        />
        {formik.touched.costPerItem && formik.errors.costPerItem ? (
          <div>{formik.errors.costPerItem}</div>
        ) : null} */}

        <label className="title pb-2 px-2" htmlFor="chargeTax">
          Charge Tax
        </label>
        <input
          className="form-check-input mb-1"
          id="chargeTax"
          name="chargeTax"
          type="checkbox"
          {...formik.getFieldProps("chargeTax")}
          checked={product.chargeTax}
        />
        {formik.touched.chargeTax && formik.errors.chargeTax ? (
          <div>{formik.errors.chargeTax}</div>
        ) : null}

        {/* .............................................. */}
        {/* <div className="h4">Inventory</div>
        <label className="title pb-2" htmlFor="stockKeepingUnit">
          Stock Keeping Unit(SKU)
        </label>
        <input
          className="form-control mb-1 w-50"
          id="stockKeepingUnit"
          name="stockKeepingUnit"
          type="text"
          {...formik.getFieldProps("stockKeepingUnit")}
        />
        {formik.touched.stockKeepingUnit && formik.errors.stockKeepingUnit ? (
          <div>{formik.errors.stockKeepingUnit}</div>
        ) : null}

        <label className="title pb-2" htmlFor="barcode">
          Barcode
        </label>
        <input
          className="form-control mb-1 w-50"
          id="barcode"
          name="barcode"
          type="text"
          {...formik.getFieldProps("barcode")}
        />
        {formik.touched.barcode && formik.errors.barcode ? (
          <div>{formik.errors.barcode}</div>
        ) : null} */}

        <br />
        {/* .............................................. */}
        {/* <label className="title pb-2 px-2" htmlFor="trackQuantity">
          Track Quantity
        </label>
        <input
          className="form-check-input mb-1"
          id="trackQuantity"
          name="trackQuantity"
          type="checkbox"
          {...formik.getFieldProps("trackQuantity")}
        />
        {formik.touched.trackQuantity && formik.errors.trackQuantity ? (
          <div>{formik.errors.trackQuantity}</div>
        ) : null}
        <br /> */}
        {/* .............................................. */}

        {/* <label className="title p-2" htmlFor="sellOutofStock">
          Sell Out of Stock
        </label>
        <input
          className="form-check-input mb-1"
          id="sellOutofStock"
          name="sellOutofStock"
          type="checkbox"
          {...formik.getFieldProps("sellOutofStock")}
        />
        {formik.touched.sellOutofStock && formik.errors.sellOutofStock ? (
          <div>{formik.errors.sellOutofStock}</div>
        ) : null}
        <br /> */}
        {/* .............................................. */}
        {/* <label className="title pb-2" htmlFor="availableQuantity">
          Available Quantity
        </label>
        <input
          className="form-control mb-1 w-50"
          id="availableQuantity"
          name="availableQuantity"
          type="number"
          {...formik.getFieldProps("availableQuantity")}
        />
        {formik.touched.availableQuantity && formik.errors.availableQuantity ? (
          <div>{formik.errors.availableQuantity}</div>
        ) : null} */}

        <div className="h4">Shipping</div>

        <label className="title p-2" htmlFor="physicalProduct">
          Physical Product
        </label>
        <input
          className="form-check-input mb-1"
          id="physicalProduct"
          name="physicalProduct"
          type="checkbox"
          defaultValue={product.shipping}
          {...formik.getFieldProps("physicalProduct")}
        />
        {formik.touched.physicalProduct && formik.errors.physicalProduct ? (
          <div>{formik.errors.physicalProduct}</div>
        ) : null}

        <br />
        {/* .............................................. */}
        <label className="title pb-2" htmlFor="weight">
          Weight
        </label>
        <input
          className="form-control w-50"
          id="weight"
          name="weight"
          type="number"
          // defaultValue={product.we}
          {...formik.getFieldProps("weight")}
        />
        {formik.touched.weight && formik.errors.weight ? (
          <div>{formik.errors.weight}</div>
        ) : null}


        {/* .............................................. */}
        <Variants
          sendVariantsData={(variantsData) => setVariantsData(variantsData)}
          imgList={imgList}
        />
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};


export default EditProduct;