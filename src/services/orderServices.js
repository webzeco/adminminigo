import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/order`;
export function getAllOrders() {
    return http.get(`${url}/allOrders`);
}
export function confirmTransaction(id) {
    return http.patch(`${url}/${id}`, {
        status:true
});
}

const AllServices = {
    getAllOrders,
    confirmTransaction,
}
export default AllServices;