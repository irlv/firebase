import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';



import { QRScanner } from '@ionic-native/qr-scanner/ngx';


import { provideAuth,getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { getFirestore,provideFirestore ,} from '@angular/fire/firestore'
import { AngularFireAuthModule, SETTINGS } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), 
     provideFirestore(() => getFirestore()) ,
     AngularFireAuthModule ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },QRScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
