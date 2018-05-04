import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallQueuePage } from './call-queue';

@NgModule({
  declarations: [
    CallQueuePage,
  ],
  imports: [
    IonicPageModule.forChild(CallQueuePage),
  ],
})
export class CallQueuePageModule {}
