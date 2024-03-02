import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsBuyPage } from './travels-buy.page';

const routes: Routes = [
  {
    path: 'travels-buy',
    component: TravelsBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelsBuyPageRoutingModule {}
