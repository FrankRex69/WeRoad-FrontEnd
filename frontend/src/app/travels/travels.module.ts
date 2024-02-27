import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TravelsPage } from './travels.page';

import { TravelsPageRoutingModule } from './travels-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TravelsPage],
  exports: [TravelsPage],
})
export class TravelsPageModule {}
