import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit() {
  }

  purchasedTravels() {
    this.homeService.purchasedTravels();
  }

  listItem() {
    this.homeService.listItem();
  }
  users() {
    this.homeService.users();
  }
  logOut(){
    this.homeService.logOut();
  }

}
