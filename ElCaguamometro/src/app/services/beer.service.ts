import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beer } from '../models/beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beerURL = 'http://localhost:3000/Caguamas/showCaguamaPrice';
  constructor(
    private http: HttpClient
  ) { }

  getBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beerURL);
  }
}
