import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CallQueuePage } from '../pages/call-queue/call-queue';
import { CallQueueProvider } from '../providers/call-queue/call-queue';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CallQueuePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CallQueuePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallQueueProvider,
    LoginProvider
  ]
})
export class AppModule {}
