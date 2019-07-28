import axios from "axios";

class usersAPI {
  static login(user) {
    return axios
      .post("http://localhost:3001/users/login", user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static logout() {
    return axios
      .post("http://localhost:3001/logout")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static user() {
    return axios
      .get("http://localhost:3001/users/me")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static register(user) {
    return axios
      .post("http://localhost:3001/users/", user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
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
