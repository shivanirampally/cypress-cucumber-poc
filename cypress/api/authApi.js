import BaseApi from "./baseApi";

class AuthApi {
    login(loginData) {
        return BaseApi.sendRequest(
            "POST",
            "/login",
            loginData
        );
    }
    register(registerData) {
        return BaseApi.sendRequest(
            "POST",
            "/register",
            registerData
        );
    }
}

export default new AuthApi();