import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer-list-modal',
  templateUrl: './beer-list-modal.component.html',
  styleUrls: ['./beer-list-modal.component.css']
})
export class BeerListModalComponent implements OnInit {

  @ViewChild('beerListModal') modal: any;

  beers: Beer[];

  constructor(
    private modalService: NgbModal,
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    this.loadBeersCatalogue();
  }

  loadBeersCatalogue(): void{
    this.beerService.getBeers().subscribe(BeerRes => this.beers = BeerRes);
  }

  showModal(): void {
    this.modalService.open(this.modal, {ariaLabelledBy: 'modal-basic-title'});
  }

}
