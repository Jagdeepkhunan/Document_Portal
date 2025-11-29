const API_URL = "http://127.0.0.1:8000" ;
const app_auth_key = process.env.API_Access_key! ; 

console.log(" -- app_auth : ", app_auth_key ) ; 

export const App_Auth = app_auth_key ;
export const URL_HealthCheck_GET = API_URL + "/" ;
export const URL_Login_POST = API_URL + "/login" ;
export const URL_Logout_POST = API_URL + "/logout" ;
export const URL_AllSession_POST = API_URL + "/getallsession" ;