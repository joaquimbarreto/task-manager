import axios from "axios";

class usersAPI {
  static init() {
    process.env.REACT_APP_STAGE === "dev"
      ? (this.base_URL = "http://localhost:3001")
      : (this.base_URL = "https://mern-task-manager.herokuapp.com");
  }

  static login(user) {
    return axios({
      method: "post",
      baseURL: this.base_URL + "/users/login",
      headers: { "Content-Type": "application/json" },
      data: user
    });
  }

  static logout(token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.post(this.base_URL + "/users/logout", null, header);
  }

  static validate(token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.get(this.base_URL + "/users/me", header);
  }

  static register(user) {
    return axios({
      method: "post",
      baseURL: this.base_URL + "/users",
      headers: { "Content-Type": "application/json" },
      data: user
    });
  }

  static update(user) {
    return axios
      .patch(this.base_URL + "/users/me", user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static delete(user) {
    return axios
      .delete(this.base_URL + "/users/me", user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}

usersAPI.init();

export default usersAPI;
