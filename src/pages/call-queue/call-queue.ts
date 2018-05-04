import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallQueueProvider } from '../../providers/call-queue/call-queue';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CallQueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-queue',
  templateUrl: 'call-queue.html',
})
export class CallQueuePage {
   queueFormat: any
   currentQueue:any
   callTime: any
   queueAmount: any
   idServiceBox: any
   nameServiceBox: any
   idStaff: any

  constructor(public navCtrl: NavController, public navParams: NavParams,public CallQueueProvider: CallQueueProvider) {
    this.idServiceBox = localStorage.getItem('idServiceBox')
    this.nameServiceBox = localStorage.getItem('nameServiceBox')
    this.idStaff = JSON.parse(localStorage.getItem('logged_profile'))['id']
    this.getQueueByServiceBox();
    this.getListCount();
  }

  ionViewDidLoad() {

  }

  getQueueByServiceBox(){
    this.CallQueueProvider.getQueueByservicebox(this.idServiceBox).subscribe(res => {
      // console.log(res)
      this.queueFormat = res['format']
      this.currentQueue = res['queue']
      this.callTime = res['call_time']
    }, err => console.log(err))
  }
  
  getListCount() {
    this.CallQueueProvider.getListCount().subscribe(res => {
      // console.log(res)
      this.queueAmount = res
    }, err => console.log(err))
  }

  callQueue() {
    let params = {
      idServiceBox: 1,
      idStaff: 4
    }
    this.CallQueueProvider.callQueue(params).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
  }

  repeatQueueCall() {
    this.CallQueueProvider.repeatQueueCall(this.idServiceBox).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    // this.getSettings();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('logged_profile');
    localStorage.removeItem('idServiceBox');
    localStorage.removeItem('nameServiceBox');
    this.navCtrl.setRoot(LoginPage);
  }
}
