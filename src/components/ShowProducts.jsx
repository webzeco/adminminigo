import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Loader from "react-loader-spinner";
// import ProductList from "./common/ProductList";
import Pagination from "./common/Pagination";
import { connect } from "react-redux";
import products, {
  changePage,
  sortProducts,
  loadProducts,
  filterPrice,
  addEditProduct,
} from "../storemini/reducers/products";
import { Link } from "react-router-dom";
// import $ from "jquery";
import './styles/showproduct.css';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

class Products extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    // $("#myCate").change(function () {});
    this.props.loadProducts();
    this.setState({ data: this.props.products });

  }
  componentDidUpdate() {
    // if (
    //   this.props.products[0]?.category !== this.state.data[0]?.category ||
    //   this.props.products.length !== this.state.data.length
    // ) {
    //   this.setState({ data: this.props.products });
    // }
  }
  addEditProductHandler = (product) => {
    this.props.addEditProduct(product);
    this.props.history.push('/editProduct');

  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="display-6 px-3 fw-bold mt-3 ">All Products</div>
        </div>
        {/* <!-- ======= price and sort of product======= -->  */}
        <div className="container-fluid border mt-1 p-2">
          <div className="row">
            <div className="col-6 text-center">
              <div className="dropdown d-flex justify-content- message_look">
                <DropdownButton
                  variant="light"
                  alignRight
                  title={this.props.price}
                  id="dropdown-menu-align-right "
                  onSelect={this.props.filterPrice}
                >
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Less than Rs.500">
                    Less than Rs.500
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Rs.500-Rs.1000">
                    Rs.500-Rs.1000
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Greater then Rs.1000">
                    Greater then Rs.1000
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span type="text" className=" pt-2  count mx-3 ">
                {this.props.itemsCount} items
              </span>
              <div className="dropdown message_look fw-bold ">
                <DropdownButton
                  variant="light"
                  alignRight
                  title={this.props.sort}
                  id="dropdown-menu-align-right"
                  onSelect={this.props.sortProducts}
                >
                  <Dropdown.Item eventKey="sort">Sort</Dropdown.Item>
                  <Dropdown.Item eventKey="New Arrivals">
                    New Arrivals
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Price: High to Low">
                    Price: High to Low{" "}
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Price: Low to High">
                    {" "}
                    Price: Low to High
                  </Dropdown.Item>
                  {/* <Dropdown.Divider /> */}
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ======= price and sort of product ends======= -->  */}

        {/* <!-- ======= product display in cards ======= -->  */}

        <div className="container ">
          <div className="row ">
            {this.props.products && (
              <div class="col-lg-12 col-md-12 p-3 mt-2 ">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="bg-info text-white">
                      <tr>
                        <th scope="col bold">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remaining</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <div className='loader'>
                      <Loader visible={this.props.loading}
                        type="Puff" color="#e61523" height={80} width={80} />
                    </div>

                    <tbody>
                      {this.props.products?.map((product, index) => {
                        return <tr key={index}>
                          <td>
                            <div class="form-check px-2">
                              <label class="form-check-label fw-bold" for="flexCheckDefault">
                                {index + 1}
                              </label>
                            </div>
                          </td>
                          <td>
                            <img className="img-fluid" src={`${process.env.REACT_APP_URL}/img/${product.images[0]}`}
                              height="80px" width="80px" alt="product img" />
                          </td>
                          <td>{product.title}</td>
                          <td>{product.price}</td>
                          <td className="ps-4" style={{ width: "10%" }} >
                            {product.quantity}
                          </td>
                          <td className="ps-4" style={{ width: "10%" }} >
                            {/* <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox"
                                // onChange={(e) => changeBestSellerHandler(e, product._id)} 
                                id="flexSwitchCheckChecked" checked={product.bestSeller} />
                            </div> */}
                            {product.sold ? product.sold : '0'}
                          </td>
                          <td>
                            {/* {console.log(product)} */}
                            {product.createdAt?.substring(0, 10)}
                          </td>
                          <td>
                            <div className=" col-sm-4  col-md-2 col-lg-2">
                              <div className="pad">
                                <div className="d-flex">
                                  <div className="col-12 ps-4 mb-2">
                                    <Link >
                                      <button
                                        type="button"
                                        className="btn btn-success  btn-block "
                                        onClick={() => this.addEditProductHandler(product)}
                                      >
                                        Edit
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      })}
                    </tbody>
                  </table>
                </div>
              </div>


            )}
          </div>
        </div>
        {/* <!-- ======= product display in cards ends ======= -->  */}
        {/* <!-- ======= pagination ======= -->  */}

        <ul className="pagination justify-content-center p-4  message_look">
          <Pagination
            className="bg-danger"
            itemsCount={this.props.itemsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={(page) => this.props.changePage(page)}
          />
        </ul>

        {/* <!-- ======= pagination ends ======= -->  */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.entities.products.filtered,
  category: state.entities.categories.selected,
  loading: state.entities.products.loading,
  itemsCount: state.entities.products.pagination.itemsCount,
  currentPage: state.entities.products.pagination.currentPage,
  pageSize: state.entities.products.pagination.pageSize,
  sort: state.entities.products.sort,
  price: state.entities.products.priceFilter,
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  changePage: (page) => dispatch(changePage(page)),
  sortProducts: (path) => dispatch(sortProducts(path)),
  filterPrice: (path) => dispatch(filterPrice(path)),
  addEditProduct: (product) => dispatch(addEditProduct(product))
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);


