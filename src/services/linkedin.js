import HttpService from './httpService';

export default class LinkedInService {

  static async getToken() {
    return HttpService.get(`api.linkedin.com/me`);
  }

  static async getProfileInfo() {
    return HttpService.get(`api.linkedin.com/me`);
  }

}

