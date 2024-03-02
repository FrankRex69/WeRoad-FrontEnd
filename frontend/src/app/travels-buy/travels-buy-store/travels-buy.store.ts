/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Injectable } from '@angular/core';

import { EntityStore, StoreConfig } from '@datorama/akita';
import { EntityState } from '@datorama/akita/src/lib/types';

import { IresponseTravelsBuy } from '@commons/interfaces/travels-buy.interface';

export interface TravelsBuyState extends EntityState<IresponseTravelsBuy, number> {
  areTravelsBuyLoaded: boolean;
}

export function createInitialState(): TravelsBuyState {
  return {
    areTravelsBuyLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'listitem' })
export class TravelsBuyStore extends EntityStore<TravelsBuyState> {

    constructor() {
        super(createInitialState());
    }

    loadTravelsBuy(travelsbuy: IresponseTravelsBuy[], areTravelsBuyLoaded: boolean) {
      this.set(travelsbuy);
      this.update(state => ({
        ...state,
        areTravelsBuyLoaded
      }));
    }
}
