import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TravelsPageRoutingModule } from './travels-routing.module';
import { TravelsPage } from './travels.page';
import { TravelsService } from './travels.service';

import { TravelsCreateModal } from './travels-create-modal/travels-create-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TravelsPage, TravelsCreateModal],
  providers: [TravelsService],
  exports: [TravelsPage],
})
export class TravelsPageModule {}
