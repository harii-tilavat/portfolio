import { Component, Input, OnInit } from '@angular/core';
import { ExpModel } from 'src/app/_model';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent implements OnInit {
  @Input() title!: string;
  @Input() menu!: Array<ExpModel>;
  @Input() isList: boolean = true;

  constructor() { }
  ngOnInit(): void {
  }

}
