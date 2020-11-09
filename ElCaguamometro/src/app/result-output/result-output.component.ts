import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-result-output',
  templateUrl: './result-output.component.html',
  styleUrls: ['./result-output.component.css']
})
export class ResultOutputComponent implements OnInit,OnChanges {

  @Input('valueInput') valueInput: number;
  @Input('beerPrice') beerPrice: number;
  @Input('mode') mode: boolean;//'true' if is beer to money, 'false' if is money to beer

  valueOutput: number;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.calculate();
  }

  beerToMoney(): number{
    return this.valueInput * this.beerPrice;
  }

  moneyToBeer(): number{
    return this.valueInput / this.beerPrice;
  }

  calculate(): void{
    if(this.mode){
      this.valueOutput = this.valueInput * this.beerPrice;
    }else{
      this.valueOutput = this.valueInput / this.beerPrice;
    }
  }

}
