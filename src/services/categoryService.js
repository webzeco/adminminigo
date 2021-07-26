import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/category`;
export function getAllCategories() {
    return http.get(`${url}/allCategories`);
}
export function confirmTransaction(id) {
    return http.patch(`${url}/${id}`, {
        status:true
});
}
export function createSubCategory(data){
    return http.patch(`${url}/addSubCategory/${data.parent}`, {
        subCategory:data.name.trim(),
        description:data.description
});
};

export function deleteSubCategory(data) {
    return http.delete(`${url}/deleteSubCategory/${data.category}/${data.subCategory}`);
}
export function getUserStats(id) {
    return http.get(`${url}/stats/${id}`);
}

export function createNewTransaction(trans) {
     const data={
    amount:parseInt(trans.amount),
    name:trans.name,
    method:trans.method
    }
    return http.post(url,data);
}
const AllServices = {
    getAllCategories,
    confirmTransaction,
    deleteSubCategory,
    createNewTransaction,
    getUserStats,
    createSubCategory
}
export default AllServices;