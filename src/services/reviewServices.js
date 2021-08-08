import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/review`;
export function getAllReviews() {
    return http.get(`${url}/allReviews`);
}
export function deleteReview(id) {
    return http.delete(`${url}/deleteReview/${id}`);
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
    getAllReviews,
    // confirmTransaction,
    // deleteSubCategory,
    // createNewTransaction,
    // getUserStats,
    // createSubCategory
}
export default AllServices;