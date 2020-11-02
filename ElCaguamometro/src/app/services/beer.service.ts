import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beer } from '../models/beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beerURL = 'http://localhost:3000/Caguamas';
  constructor(
    private http: HttpClient
  ) { }

  getSpecificBeer(beerId: String): Observable<Beer>{
    const specificBeerURL = `${this.beerURL}/showSpecificCaguamaPrice/${beerId}`;
    return this.http.get<Beer>(specificBeerURL);
  }
  getBeers(): Observable<Beer[]> {
    const allBeersURL = `${this.beerURL}/showCaguamaPrice`;
    return this.http.get<Beer[]>(allBeersURL);
  }
}
