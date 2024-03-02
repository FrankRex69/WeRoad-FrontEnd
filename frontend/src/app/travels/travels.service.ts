import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IresponseTravels } from '@commons/interfaces/travels.interface';
import { TravelsStore } from './travels-store/travels.store';
import { environment } from '../../environments/environment';

@Injectable()
export class TravelsService {

  http: HttpClient;
  store: TravelsStore;

  corsHeaders = new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  });

  constructor(http: HttpClient, store: TravelsStore, private router: Router) {
    this.http = http;
    this.store = store;
  }

  getAllTravels(): Observable<IresponseTravels[]> {
    const accessToken = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = { Authorization: 'Bearer ' + accessToken};

    return this.http.get<IresponseTravels[]>(`${environment.apiUrl}/travels/`, { headers }).pipe(
      tap(travels => {
        this.store.loadTravels(travels, true);
      })
    );
  }

}
