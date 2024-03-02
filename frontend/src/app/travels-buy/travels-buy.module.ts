import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelsBuyPageRoutingModule } from './travels-buy-routing.module';

import { TravelsBuyPage } from './travels-buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelsBuyPageRoutingModule
  ],
  declarations: [TravelsBuyPage]
})
export class TravelsBuyPageModule {}
