import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../api-url';
/*
  Generated class for the CallQueueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallQueueProvider {

  constructor(public http: HttpClient) {
  }

  getQueueByservicebox($id){
    return Observable.interval(1000).flatMap((i) =>
     this.http.get(`${API_URL}/temp/` + $id))
  }

  getListCount() {
    return Observable.interval(1000).flatMap((i) =>
     this.http.get(`${API_URL}/list/count`))
  }

  callQueue(params){
    return this.http.post(`${API_URL}/list/edit`, params);
  }

  repeatQueueCall ($id) {
    return this.http.get(`${API_URL}/temp/repeat/` + $id);
  }
}
