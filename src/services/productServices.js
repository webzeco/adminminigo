import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/product`;
export function getAllProducts() {
    return http.get(`${url}/allProducts`);
}
export function confirmTransaction(id) {
    return http.patch(`${url}/${id}`, {
        status:true
});
}
export function addBalance(id,method,balance){
    return http.patch(`${url}/addBalance/${id}`, {
        method,
        balance
});
};


export function getUserTransactions(id) {
    return http.get(`${url}/${id}`);
}
export function getUserStats(id) {
    return http.get(`${url}/stats/${id}`);
}
export function addNewProduct(product) {
    return http.post(`${url}/addProduct`,product);
}
const AllServices = {
    getAllProducts,
    confirmTransaction,
    getUserTransactions,
    addNewProduct,
    getUserStats,
    addBalance
}
export default AllServices;