import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[vibrationClick]'
})
export class VibrationClickDirective {

  constructor() { }

  @HostListener('click') click(){
    navigator.vibrate(20);
    console.log('vibrate');
  }

}
