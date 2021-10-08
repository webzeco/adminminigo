import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Loader from "react-loader-spinner";
import Pagination from "./common/Pagination";
import { connect } from "react-redux";
import './styles/showproduct.css';
import order, {
  changePage,
  sortOrders,
  loadOrders,
  filterPrice,
  addDetailedOrder,
} from "../storemini/reducers/order";
import { Link } from "react-router-dom";
class Orders extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.props.loadOrders();
    this.setState({ data: this.props.orders });
  }

  addDetailedOrderHandler = (order) => {
    this.props.addDetailedOrder(order);
    this.props.history.push('/orderDetail');
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="display-6 px-3 fw-bold mt-3 ">All Orders</div>
        </div>
        {/* <!-- ======= price and sort of product======= -->  */}
        <div className="container-fluid border mt-1 px-2 pb-">
          <div className="row">
            <div className="col-6 text-center">
              <div className="dropdown d-flex justify-content-center message_look">
                {/* <Dropdown
                  variant="light"
                  alignRightP
                  title={this.props.price}
                  id="dropdown-menu-align-right"
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
                </Dropdown> */}
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
                  onSelect={this.props.sortOrders}
                >
                  <Dropdown.Item eventKey="Sort">Sort</Dropdown.Item>
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

        <div className="container pt-3">
          <div className="row ">
            <div class="table-responsive">
              <table className="table  ">
                <thead className="bg-info text-white ">
                  <tr>
                    <th scope="col bold">Sr.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Guest</th>
                    <th scope="col">No. Of Products</th>
                    <th scope="col">shipping charges</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Charged</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <div className='loader'>
                  <Loader visible={this.props.loading}
                    type="Puff" color="#e61523" height={80} width={80} />
                </div>

                <tbody>
                  {this.props.orders.map((order, index) => {
                    return (
                      <tr key={index}>
                        <td className="ps-3 fw-bold" >{++index}</td>
                        <td className="ps-2" >{order.name}</td>

                        <td className="px-4">{order.guest && <i className="fas fa-check text-primary"></i>}
                          {!order.guest && <i class="fas fa-times"></i>}</td>

                        <td className="ps-5" >{order.products.length}</td>
                        <td className="ps-5" >{order.shipping.charges}</td>
                        <td className="ps-2" >{order.createdAt.substring(0, 10)}</td>
                        <td className="ps-2"> {order.status}</td>
                        <td className="ps-2">{order.total}</td>
                        <td className="ps-2">{order.payment.charge.amount}</td>
                        <td className="ps-2"><button type="button" class="btn btn-secondary" onClick={() => this.addDetailedOrderHandler(order)}>Detail</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

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
  orders: state.entities.orders.filtered,
  category: state.entities.categories.selected,
  loading: state.entities.orders.loading,
  itemsCount: state.entities.orders.pagination.itemsCount,
  currentPage: state.entities.orders.pagination.currentPage,
  pageSize: state.entities.orders.pagination.pageSize,
  sort: state.entities.orders.sort,
  price: state.entities.orders.priceFilter,
});
const mapDispatchToProps = (dispatch) => ({
  loadOrders: () => dispatch(loadOrders()),
  changePage: (page) => dispatch(changePage(page)),
  sortOrders: (path) => dispatch(sortOrders(path)),
  filterPrice: (path) => dispatch(filterPrice(path)),
  addDetailedOrder: (order) => dispatch(addDetailedOrder(order))
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
