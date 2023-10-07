import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective {

  constructor() {
    console.log("Called derective");
  }
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event:any) {
  //   console.log(event.target.tagName.toLowerCase());
  //   if(event.target.tagName.toLowerCase()==='i'){
  //     console.log("Click in theme");
  //     return;
  //   }
  //   console.log("Document click");
    // const target = event.target as HTMLElement;
    // if (target.tagName.toLowerCase() === 'button') {
    //   console.log('Button clicked');
    // } else {
    //   console.log('Document clicked');
    // }
  // }
}
