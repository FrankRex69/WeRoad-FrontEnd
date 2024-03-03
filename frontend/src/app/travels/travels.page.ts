import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';

import { IresponseTravels } from '@commons/interfaces/travels.interface';

import { TravelsState } from './travels-store/travels.store';
import { TravelsQuery } from './travels-query/travels.query';

import { TravelsService } from './travels.service';

import { TravelsCreateModal } from './travels-create-modal/travels-create-modal.component';

@Component({
  selector: 'app-travels',
  templateUrl: './travels-template-html/travels.page.html',
  styleUrls: ['./travels-template-html/travels.page.scss'],
})
export class TravelsPage implements OnInit {

  travelsToBeUpdated: IresponseTravels;
  isUpdateActivated = false;

  travelsToBeCreated: IresponseTravels;
  isCreateActivated: boolean;

  travelsSub: Subscription;

  cstate: TravelsState;

  travels$: Observable<IresponseTravels[]> = this.travelsQuery.selectAll();

  dataReturned: any;


  constructor(
    private travelsService: TravelsService,
    private travelsQuery: TravelsQuery,
    private modalController: ModalController,
  ) { }


  // -- Modal
  async openModal(travels: IresponseTravels) {
    const modal = await this.modalController.create({
      component: TravelsCreateModal,
      cssClass: 'travels-modal-class',
      componentProps: {
        travelsid: travels.id,
        price: travels.price
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.travelsSub = this.travelsQuery.selectAreTravelsLoaded$.pipe(
      filter(areTravelsLoaded => !areTravelsLoaded),
      switchMap(areTravelsLoaded => {
        if (!areTravelsLoaded) {
          return this.travelsService.getAllTravels();
        }
      })
    ).subscribe(result => {});
  }

}
