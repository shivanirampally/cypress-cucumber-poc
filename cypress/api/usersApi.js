import BaseApi from "./baseApi";

class UsersApi {
    getUsers(page = 2) {
        return BaseApi.sendRequest(
            "GET",
            `/users?page=${page}`
        );
    }

    getSingleUser(userId) {
        return BaseApi.sendRequest(
            "GET",
            `/users/${userId}`
        );
    }

    createUser(userData) {
        return BaseApi.sendRequest(
            "POST",
            "/users",
            userData
        );
    }

    updateUser(userId, userData) {
        return BaseApi.sendRequest(
            "PUT",
            `/users/${userId}`,
            userData
        );
    }

    deleteUser(userId) {
        return BaseApi.sendRequest(
            "DELETE",
            `/users/${userId}`
        );
    }

}

export default new UsersApi();