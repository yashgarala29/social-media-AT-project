import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHihlight]'
})
export class HihlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor="yellow"
   }

}
