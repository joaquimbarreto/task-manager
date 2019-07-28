import axios from "axios";

const header = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNkNWIzNDk2ODQ5ZTIzYmMwZGIxMGMiLCJpYXQiOjE1NjQzMTQ2MjV9.j1dCYTXsUQiXNx3ReyvNuVe55e3NpitzSftBEKn4KK8"
  }
};

class usersAPI {
  static login(user) {
    // debugger;
    // fetch("http://localhost:3001/users/login", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(user)
    // }).then(res => res.json());
    // debugger;
    return axios({
      method: "post",
      baseURL: "http://localhost:3001/users/login",
      headers: { "Content-Type": "application/json" },
      params: user
    });
  }

  static logout() {
    return axios
      .post("http://localhost:3001/logout")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static user() {
    return axios.get("http://localhost:3001/users/me", header);
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
