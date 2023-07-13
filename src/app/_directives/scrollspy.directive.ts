import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[AppScrollSpy]' })
export class ScrollSpyDirective {
  constructor(private el:ElementRef, private renderer:Renderer2) {}
  @HostListener('window:scroll')
  onWindowScroll() {
  }

}
