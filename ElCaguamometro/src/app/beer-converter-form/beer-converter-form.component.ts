import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-converter-form',
  templateUrl: './beer-converter-form.component.html',
  styleUrls: ['./beer-converter-form.component.css']
})
export class BeerConverterFormComponent implements OnInit {

  beer: Beer = {
    id: 'CaguamonLight',
    beer: 'CaguamonLight',
    price: 35.5,
    container: 'caguamón',
    image: ''
  };

  userBeerInput = 0;

  amountToMoney = true;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void{
    this.beerService.getBeers().subscribe(BeerRes => this.beer = BeerRes[0]);
  }

  toggleForm(): void{
    this.amountToMoney = !this.amountToMoney;
  }
}
