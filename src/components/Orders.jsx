import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Loader from "react-loader-spinner";
import Pagination from "./common/Pagination";
import { connect } from "react-redux";
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
 
addDetailedOrderHandler=(order)=>{
  this.props.addDetailedOrder(order);
  this.props.history.push('/orderDetail');
};
  render() {
    return (
      <div>
        {/* <!-- ======= price and sort of product======= -->  */}
        <div className="container-fluid border mt-1 p-2">
          <div className="row">
            <div className="col-6 text-center">
              <div className="dropdown d-flex justify-content-center message_look">
                {/* <Dropdown
                  variant="light"
                  alignRight
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
            <div className="col-6 d-flex justify-content-center">
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

        <div className="container pt-5">
          <div className="row ">

            <div class="table-responsive">
              <table className="table  ">
                <thead className="bg-danger text-white ">
                  <tr>
                    <th scope="col bold">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Guest</th>
                    <th scope="col">createdAt</th>
                    <th scope="col">Number Of Products</th>
                    <th scope="col">shipping charges</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Charged</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <Loader   class='text-center'  visible={this.props.loading} type="Puff" color="#e61523" height={80} width={80} />

                <tbody>
                  {this.props.orders.map((order, index) => {
                    return (
                      <tr key={index}>
                        <td>{++index}</td>
                        <td>{order.name}</td>
                        <td>{order.guest && <i className="fas fa-check text-primary"></i>}
                          {!order.guest && <i class="fas fa-times"></i>}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.products.length}</td>
                        <td>{order.shipping.charges}</td>
                        <td> {order.status}</td>
                        <td>{order.total}</td>
                        <td>{order.payment.charge.amount}</td>
                        <td><button type="button" class="btn btn-secondary" onClick={()=>this.addDetailedOrderHandler(order)}>Detail</button>
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
