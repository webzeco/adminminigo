import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/basket`;
export function getAllBaskets() {
    return http.get(`${url}/allBaskets`);
}
export function deleteBasket(id) {
    return http.delete(`${url}/delete/${id}`);
  }
  export function addNewBasket(data) {
    return http.post(`${url}/addBasket`,data);
}
export function updateBasket(status,id) {
    return http.patch(`${url}/update/${id}`, {
        status
});
}

const AllServices = {
    getAllBaskets,
    deleteBasket,
    addNewBasket,
    updateBasket
}
export default AllServices;