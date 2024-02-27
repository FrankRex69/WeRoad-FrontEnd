/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Injectable } from '@angular/core';

import { EntityStore, StoreConfig } from '@datorama/akita';
import { EntityState } from '@datorama/akita/src/lib/types';

import { IresponseTravels } from '@commons/interfaces/travels.interface';

export interface TravelsState extends EntityState<IresponseTravels, number> {
  areTravelsLoaded: boolean;
}

export function createInitialState(): TravelsState {
  return {
    areTravelsLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'travels' })
export class TravelsStore extends EntityStore<TravelsState> {

    constructor() {
        super(createInitialState());
    }

    loadTravels(travels: IresponseTravels[], areTravelsLoaded: boolean) {
      this.set(travels);
      this.update(state => ({
        ...state,
        areTravelsLoaded
      }));
    }
}
