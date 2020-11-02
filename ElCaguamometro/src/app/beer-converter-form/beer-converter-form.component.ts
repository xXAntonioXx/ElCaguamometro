import { Component, OnInit, ViewChild } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../services/beer.service';
import { BeerListModalComponent } from '../beer-list-modal/beer-list-modal.component';

@Component({
  selector: 'app-beer-converter-form',
  templateUrl: './beer-converter-form.component.html',
  styleUrls: ['./beer-converter-form.component.css']
})
export class BeerConverterFormComponent implements OnInit {

  @ViewChild('beerListModal') beerListModal: BeerListModalComponent;
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

  getBeerById(id: String): void{
    this.beerService.getSpecificBeer(id).subscribe(BeerRes => this.beer = BeerRes[0])
  }

  toggleForm(): void{
    this.amountToMoney = !this.amountToMoney;
  }

  showListOfBeers(): void{
    this.beerListModal.showModal();
  }

  beerHasBeenSelected(id: String): void{
    this.getBeerById(id);
  }
}
