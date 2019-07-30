import axios from "axios";

class usersAPI {
  static login(user) {
    return axios({
      method: "post",
      baseURL: "http://localhost:3001/users/login",
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
    return axios.post("http://localhost:3001/users/logout", null, header);
  }

  static validate(token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.get("http://localhost:3001/users/me", null, header);
  }

  static register(user) {
    return axios({
      method: "post",
      baseURL: "http://localhost:3001/users",
      headers: { "Content-Type": "application/json" },
      data: user
    });
  }

  static update(user) {
    return axios
      .patch("http://localhost:3001/users/me", user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static delete(user) {
    return axios
      .delete("http://localhost:3001/users/me", user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}

export default usersAPI;
