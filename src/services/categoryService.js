import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/category`;
export function getAllCategories() {
    return http.get(`${url}/allCategories`);
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

const AllServices = {
    getAllCategories,
    deleteSubCategory,
    createSubCategory
}
export default AllServices;