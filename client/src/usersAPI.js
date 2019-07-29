import axios from "axios";

const header = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
};

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
    const header2 = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    // debugger;
    return axios.post("http://localhost:3001/users/logout", null, header2);
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
