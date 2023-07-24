import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 }))
  ])
]);
