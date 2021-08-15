import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/review`;
export function getAllReviews() {
    return http.get(`${url}/allReviews`);
}
export function deleteReview(id) {
    return http.delete(`${url}/deleteReview/${id}`);
}
export function updateReview(favorite,id) {
    return http.patch(`${url}/updateReview/${id}`, {
        favorite
});
}

export function createSubCategory(data){
    return http.patch(`${url}/addSubCategory/${data.parent}`, {
        subCategory:data.name.trim(),
        description:data.description
});
};

const AllServices = {
    getAllReviews
}
export default AllServices;