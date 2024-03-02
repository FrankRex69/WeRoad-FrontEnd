import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';

import { IresponseTravelsBuy } from '@commons/interfaces/travels-buy.interface';

import { TravelsBuyState } from './travels-buy-store/travels-buy.store';
import { TravelsBuyQuery} from './travels-buy-query/travels-buy-query';

import { TravelsBuyService } from './travels-buy.service';

@Component({
  selector: 'app-travels-buy',
  templateUrl: './travels-buy-template-html/travels-buy.page.html',
  styleUrls: ['./travels-buy-template-html/travels-buy.page.scss'],
})
export class TravelsBuyPage implements OnInit {

  istItemToBeUpdated: IresponseTravelsBuy;
  isUpdateActivated = false;

  travelsBuyToBeCreated: IresponseTravelsBuy;
  isCreateActivated: boolean;

  travelsBuySub: Subscription;
  updateTravelsBuySub: Subscription;
  deleteTravelsBuySub: Subscription;
  createTravelsBuySub: Subscription;

  cstate: TravelsBuyState;

  travelsBuy$: Observable<IresponseTravelsBuy[]> = this.travelsBuyQuery.selectAll();

  dataReturned: any;

  constructor(
    private travelsBuyService: TravelsBuyService,
    private travelsBuyQuery: TravelsBuyQuery,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.travelsBuySub = this.travelsBuyQuery.selectAreTravelsBuyLoaded$.pipe(
      filter(areTravelsBuyLoaded => !areTravelsBuyLoaded),
      switchMap(areTravelsBuyLoaded => {
        if (!areTravelsBuyLoaded) {
          return this.travelsBuyService.getAllTravelsBuy();
        }
      })
    ).subscribe(result => {});
  }

  deleteTravelsBuy(travelsBuyId: number) {
    this.deleteTravelsBuySub = this.travelsBuyService.deleteTravelsBuy(travelsBuyId)
      .subscribe(result => {
      console.log(result);
    });
  }

}
