import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPageModule } from './login/login.module';
import { ListItemPageModule } from './list-item/list-item.module';
import { UsersPageModule } from './users/users.module';
import { TravelsPageModule } from './travels/travels.module';
import { TravelsBuyPageModule } from './travels-buy/travels-buy.module';


@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    LoginPageModule,
    ListItemPageModule,
    UsersPageModule,
    TravelsPageModule,
    TravelsBuyPageModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
