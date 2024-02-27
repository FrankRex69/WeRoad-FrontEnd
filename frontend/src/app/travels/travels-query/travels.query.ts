/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { TravelsState, TravelsStore } from '../travels-store/travels.store';
import { QueryEntity } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
  })
  export class TravelsQuery extends QueryEntity<TravelsState> {
  
    selectAreTravelsLoaded$ = this.select(state => {
      return state.selectAreTravelsLoaded;
    });
  
    constructor(protected store: TravelsStore) {
      super(store);
    }
  }