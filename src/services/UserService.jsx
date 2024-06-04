import axios from "axios";

const AUTH_BASE_LOGIN_API_URL = 'http://localhost:8090/api/v1/auth/signin';
const AUTH_BASE_ADD_API_URL = 'http://localhost:8090/api/v1/auth/signup';

class UserService{
   loginUser(loginRequest){
       return axios.post(AUTH_BASE_LOGIN_API_URL,loginRequest);
   }

   addAdmin(user){
    return axios.post(AUTH_BASE_ADD_API_URL,user);
   }
}

export default new UserService();