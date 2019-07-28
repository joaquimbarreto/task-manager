import axios from "axios";

class tasksAPI {
  static tasks() {
    return axios
      .get("http://localhost:3001/tasks")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static task(id) {
    return axios
      .get("http://localhost:3001/tasks/" + id)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static create(task) {
    return axios
      .post("http://localhost:3001/tasks", task)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static delete(task) {
    return axios
      .delete("http://localhost:3001/tasks/" + task.id)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  static update(task) {
    return axios
      .patch("http://localhost:3001/tasks/" + task.id, task)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}

export default tasksAPI;
