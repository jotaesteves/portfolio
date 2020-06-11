import axios from 'axios';

export default class HttpService {

  static async get() {
    return axios.get('localhost:3000/');
  }


  static async set(params) {
    return axios.set('',{params});
  }
}