import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/user`;
export function addUser(user) {
    return http.post(url, {
	email:user.email,
	name:user.name,
    contactNo:user.contactNo,
    password:user.password,
    passwordConfirm:user.passwordConfirm
    });
}
export function getAllUsers(){
    return http.get(url);
}
export function deleteUser(name){
    return http.patch(`${url}/delete`, {
        name
    });
}
export  function  getMe() {
    return  http.get(`${url}/me`);
}

export  function  updateMe(data) {
    return  http.patch(`${url}/updateMe`,data);
}

export  function  updatePassword(data) {
    return  http.patch(`${url}/updateMyPassword`,data);
}
const AllServices = {
    addUser,
    getAllUsers,
    getMe:getMe,
    updateMe,
    updatePassword
}
export default AllServices;
