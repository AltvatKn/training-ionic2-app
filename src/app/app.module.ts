
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1Page, Page2Page, Page3Page, Page4Page, Page5Page } from '../pages/';


@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
