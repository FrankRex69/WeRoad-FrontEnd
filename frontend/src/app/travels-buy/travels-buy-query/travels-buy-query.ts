/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { TravelsBuyState, TravelsBuyStore } from '../travels-buy-store/travels-buy.store';
import { QueryEntity } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
  })
  export class TravelsBuyQuery extends QueryEntity<TravelsBuyState> {
  
    selectAreTravelsBuyLoaded$ = this.select(state => {
      return state.areTravelsBuyLoaded;
    });
  
    constructor(protected store: TravelsBuyStore) {
      super(store);
    }
}