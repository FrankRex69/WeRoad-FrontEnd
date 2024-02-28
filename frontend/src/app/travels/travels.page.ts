import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';

import { IresponseTravels } from '@commons/interfaces/travels.interface';

import { TravelsState } from './travels-store/travels.store';
import { TravelsQuery } from './travels-query/travels.query';

import { TravelsService } from './travels.service';

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
  ) { }

  async chooseTravel(travels: IresponseTravels) {
    // const modal = await this.modalController.create({
    //   component: ListItemModalUpdateComponent,
    //   componentProps: {
    //     id: listItem.id,
    //     campo1: listItem.campo1,
    //     campo2: listItem.campo2
    //   }
    // });
    // return await modal.present();
    const credentialLogin = {
      id: travels.id,
      slug: travels.slug
    };
    console.log(credentialLogin.slug);
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
