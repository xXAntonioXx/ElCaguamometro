import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
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
  @Output() beerId = new EventEmitter<String>();
  @Input() selectedBeerId: String;
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

  closeModal(): void{
    this.modalService.dismissAll();
  }

  beerSelectedClick(id: String): void{
    this.selectedBeerId = id;
    this.beerId.emit(id);
    this.closeModal();
  }

}
