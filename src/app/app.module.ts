import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CalcPage } from "../pages/calc/calc";
import { GaleriaPage } from "../pages/galeria/galeria";
import { ListadoPage } from "../pages/listado/listado";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule } from "@angular/forms";
import { EditPage } from "../pages/edit/edit";


@NgModule({
  declarations: [
    MyApp,
    GaleriaPage,
    ListadoPage,
    CalcPage,
    EditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GaleriaPage,
    ListadoPage,
    CalcPage,
    EditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
