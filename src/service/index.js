import axios from 'axios';

const BASE_URL = "http://todo.test/api/"


class Service {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  getTodos() {
    return this.instance.get('todos')
  }
  addItem(payload) {
    return this.instance.post('todos', payload);
  }

}

export default new Service(BASE_URL);

