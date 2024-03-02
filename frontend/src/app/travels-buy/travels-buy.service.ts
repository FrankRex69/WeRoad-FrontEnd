import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IresponseTravelsBuy } from '@commons/interfaces/travels-buy.interface';
import { TravelsBuyStore } from './travels-buy-store/travels-buy.store';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TravelsBuyService {

  http: HttpClient;
  store: TravelsBuyStore;

  corsHeaders = new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  });


  constructor(http: HttpClient, store: TravelsBuyStore, private router: Router) {
    this.http = http;
    this.store = store;
  }

  getAllTravelsBuy(): Observable<IresponseTravelsBuy[]> {
    const accessToken = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = { Authorization: 'Bearer ' + accessToken};

    return this.http.get<IresponseTravelsBuy[]>(`${environment.apiUrl}/travels-buy/`, { headers }).pipe(
      tap(travels => {
        this.store.loadTravelsBuy(travels, true);
      })
    );
  }

  createTravelsBuy(dto) {
    const token = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = {Authorization: `Bearer ${token}`};
    this.store.setLoading(true);
    return this.http.post<IresponseTravelsBuy>(`${environment.apiUrl}/travels-buy/`, dto.value, { headers }).pipe(
      take(1),
      catchError((err: HttpErrorResponse) => {
        console.log('🐱‍👤 : err', err);
        return throwError(
          () => new Error(`${err.error.error}: ${err.error.message[0]}`)
        );
      }),
      tap((value: IresponseTravelsBuy) => {
        console.log('🐱‍👤 : value', value);
        this.store.add(value);
        this.store.setLoading(false);
      })
    );
  }

  deleteTravelsBuy(travelsBuyId: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = {Authorization: `Bearer ${token}`};
    return this.http.delete(`${environment.apiUrl}/travels-buy/${travelsBuyId}`, { headers }).pipe(
      tap(result => {
        this.store.remove(travelsBuyId);
      })
    );
  }

}
