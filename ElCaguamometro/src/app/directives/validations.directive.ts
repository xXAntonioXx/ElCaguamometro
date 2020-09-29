import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appValidations]'
})
export class ValidationsDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    event.stopPropagation();
    console.log(this.el.nativeElement.value);
  }

}
