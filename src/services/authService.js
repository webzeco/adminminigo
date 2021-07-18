import http from './httpservice';
import decode from 'jwt-decode';
const url =`${process.env.REACT_APP_URL}/api/v1/auth`;

console.log({url});
export const login=(user)=> {
    return http.post(`${url}/login`,
        {
        name: user.username,
        password: user.password,
        role:user.role
        }
    );
};

export const forgotPassword=(email)=> {
    return http.post(`${url}/forgotPassword`,
        {
       email
        }
    );
};

export const resetPassword=(data,token)=> {
    return http.patch(`${url}/resetPassword/${token}`,
        {
            password: data.password,
            passwordConfirm:data.passwordConfirm
        }
    );
};

export const isLogin=()=> {
    const token = localStorage.getItem('jwt')
    if (token) {
        const user = decode(token);
        return user;
    } else {
        return null;
    }    
}
export const jwtClear=()=> {
    localStorage.removeItem('jwt');
    window.location = "/login";
}

const allOnes={
    isLogin,
    login,
    jwtClear,
    forgotPassword
}
export default allOnes;
