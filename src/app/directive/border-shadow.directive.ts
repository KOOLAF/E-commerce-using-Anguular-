import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderShadow]',
  standalone: true,
})
export class BorderShadowDirective {
  constructor(public ele: ElementRef) {
    this.ele.nativeElement.style.boxShadow = '10px 10px red';
  }
  @HostListener('mouseover') fun() {
    this.ele.nativeElement.style.boxShadow = '50px 50px black';
  }
  @HostListener('mouseout') fun2() {
    this.ele.nativeElement.style.boxShadow = '10px 10px red';
  }
}
