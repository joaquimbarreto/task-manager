import axios from "axios";

class tasksAPI {
  static init() {
    process.env.REACT_APP_STAGE === "dev"
      ? (this.base_URL = "http://localhost:3001")
      : (this.base_URL = "https://mern-task-manager.herokuapp.com");
  }

  static tasks(token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.get(this.base_URL + "/tasks", header);
  }

  static task(id) {
    return axios
      .get(this.base_URL + "/tasks/" + id)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static create(task, token) {
    return axios({
      method: "post",
      baseURL: this.base_URL + "/tasks",
      headers: { Authorization: token },
      data: { description: task }
    });
  }

  static delete(id, token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.delete(this.base_URL + "/tasks/" + id, header);
  }

  static completedTrue(id, token) {
    return axios({
      method: "patch",
      baseURL: this.base_URL + "/tasks/" + id,
      headers: { Authorization: token },
      data: { completed: true }
    });
  }

  static completedFalse(id, token) {
    return axios({
      method: "patch",
      baseURL: this.base_URL + "/tasks/" + id,
      headers: { Authorization: token },
      data: { completed: false }
    });
  }
}

tasksAPI.init();

export default tasksAPI;
