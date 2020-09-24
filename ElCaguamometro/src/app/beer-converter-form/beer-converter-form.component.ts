import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer-converter-form',
  templateUrl: './beer-converter-form.component.html',
  styleUrls: ['./beer-converter-form.component.css']
})
export class BeerConverterFormComponent implements OnInit {

  beer: Beer = {
    id: 'CaguamonLight',
    beer: 'CaguamonLight',
    price: 35.5
  };

  constructor() { }

  ngOnInit(): void {
  }

}
