import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-url';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
  }

  getServicebox() {
    return this.http.get(`${API_URL}/servicebox`); 
  }

  getAuthen(params) {
    return this.http.post(`${API_URL}/authen`, params);
  }

  setLogged(params) {
    return this.http.post(`${API_URL}/logged`, params);
  }

  getServiceboxById(id){
    return this.http.get(`${API_URL}/servicebox_by_id/${id}`);
  }
}
