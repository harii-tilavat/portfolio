import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  public skillList: any = [
    {
      id: 1,
      label: 'HTML',
      per: '95%'
    },
    {
      id: 2,
      label: 'jQuery',
      per: '60%'
    },
    {
      id: 3,
      label: 'CSS',
      per: '80%'
    },
    {
      id: 4,
      label: 'Angular',
      per: '80%'
    },
    {
      id: 5,
      label: 'Javascript',
      per: '90%'
    },
    {
      id: 6,
      label: 'PHP',
      per: '75%'
    },
  ];
  constructor() { }
  ngOnInit(): void {

  }

}
