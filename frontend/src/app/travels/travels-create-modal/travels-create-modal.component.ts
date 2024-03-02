import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { IresponseTravels } from '@commons/interfaces/travels.interface';

import { TravelsService } from '../travels.service';

import { TravelsBuyService } from '../../travels-buy/travels-buy.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'travels-create.modal',
  templateUrl: './travels-create-modal.component.html',
  styleUrls: ['./travels-create-modal.component.scss'],
})

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TravelsCreateModal implements OnInit {

  modalTitle: string;
  modelId: number;

  createTravelsSub: Subscription;
  isCreateActivated: boolean;
  travelsToBeCreated: IresponseTravels;

  pricetot: number;

  constructor(
    private modalController: ModalController,
    private travelsService: TravelsService,
    private travelsBuyService: TravelsBuyService,
  ) {
    this.pricetot=0;
  }

  ngOnInit() {
    const priceTot=999;
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  // eslint-disable-next-line max-len, @typescript-eslint/naming-convention
  createTravelsBuy(createForm: { value: { travelsid: number; email: string; numberseats: number; pricetot: number } }) {
    console.log(createForm.value.travelsid);
    console.log(createForm.value.email);
    console.log(createForm.value.numberseats);
    console.log(createForm.value.pricetot);

    this.createTravelsSub = this.travelsBuyService.createTravelsBuy(createForm).subscribe((result: any) => {});
    this.closeModal();
  }

  priceTot(seats: number, price: number) {
    this.pricetot =  price*seats;
  }

}
