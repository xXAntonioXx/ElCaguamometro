import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appValidations]'
})
export class ValidationsDirective {

  inputValuePreType: string;

  // RegEx sets:
  numberCharRegEx: RegExp = /\d|\.|Backspace/; // typed key regex
  fullInputRegEx: RegExp = /^(\d*\.?\d*)$/; // full input value regex

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    this.inputValuePreType = this.el.nativeElement.value;
    const keyTyped = event.key;
    if ( !(this.numberCharRegEx.test(keyTyped)) ) {
      event.preventDefault();
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(event){
    const fullValueInput = this.el.nativeElement.value;
    if ( !(this.fullInputRegEx.test(fullValueInput)) ) {
      this.el.nativeElement.value = this.inputValuePreType;
    }
  }

}
