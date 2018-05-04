import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { CallQueuePage } from '../call-queue/call-queue';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  staff: any
  serviceBoxs: any
  alerts: Array<any> = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public LoginProvider: LoginProvider) {
  }
  
  ionViewDidLoad() {
    this.getServiceBox();
  }
  
  getServiceBox() {
    this.LoginProvider.getServicebox().subscribe(res => {
      // console.log(res)
      this.serviceBoxs = res
    }, err => console.log(err))
  }
  
  setLogged(params) {
    this.LoginProvider.setLogged(params).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
  }
  
  onSubmit(myform: NgForm) {
    this.alerts = [];
    let params = {
      username: myform.value.username,
      password: myform.value.password
    }
    this.LoginProvider.getAuthen(params).subscribe(res => {
      console.log(res['0'])
      let logged_profile = JSON.stringify(res['0']);
      localStorage.setItem('logged_profile', logged_profile);
      if (res['length'] != 0) {
        let params = {
          id: res['0']['id'],
          logged: 1
        }
        this.setLogged(params);
        if (res['0']['type'] == 2) {
          if (myform.value.serviceBox != 0) {
            this.LoginProvider.getServiceboxById(myform.value.serviceBox).subscribe(res => {
              // console.log(res)
              localStorage.setItem('idServiceBox', myform.value.serviceBox);
              localStorage.setItem('nameServiceBox', res['name']);
              localStorage.setItem('isLoggedin', 'true');
              this.navCtrl.setRoot(CallQueuePage);
            }, err => console.log(err))
          }
          else {
            this.alerts.push({
              id: 1,
              type: 'danger',
              message: 'Please select a service box',
            });
          }
        }
        else {
          this.alerts.push({
            id: 1,
            type: 'danger',
            message: 'Only available to staff',
          });
        }
      }
      else {
        this.alerts.push({
          id: 1,
          type: 'danger',
          message: 'Username or Password Error',
        });
      }
    }, err => console.log(err))
  }
}