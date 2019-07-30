import axios from "axios";

class tasksAPI {
  static tasks(token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.get("http://localhost:3001/tasks", header);
  }

  static task(id) {
    return axios
      .get("http://localhost:3001/tasks/" + id)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static create(task, token) {
    return axios({
      method: "post",
      baseURL: "http://localhost:3001/tasks",
      headers: { Authorization: token },
      data: {
        description: task
      }
    });
  }

  static delete(id, token) {
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.delete("http://localhost:3001/tasks/" + id, header);
  }

  static update(task) {
    return axios
      .patch("http://localhost:3001/tasks/" + task.id, task)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}

export default tasksAPI;
