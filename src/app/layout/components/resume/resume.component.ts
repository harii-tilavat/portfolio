import { Component, OnInit } from '@angular/core';
import { ExpModel } from 'src/app/_model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public expList: Array<ExpModel> = [
    {
      id: 1,
      title: 'FRONTEND DEVELOPMENT',
      subTitle: 'Working at ',
      year: '2022 Present',
      link: {
        name: 'HopGame',
        url: 'https://hopgame.in'
      },
      descMenu: [
        'Strong knowledge of popular front-end framework like Angular I can build dynamic and responsive web applications.',
        'Managed up to 3 projects or tasks at a given time while under pressure.',
        'I can develop a Responsive Website based on Client Requirements.'
      ]
    },
    {
      id: 2,
      title: 'WEB DESIGN',
      year: '2021-2022',
      subTitle: 'Rajeev Gandhi Computer Saksharta Mission',
      link: null,
      descMenu: [
        'In this course I have learned How to create Responsive Web Design.',
        'Proficient in HTML5 and CSS3, utilizing these fundamental web technologies to create well-structured web pages.',
        'Skilled in creating responsive web designs using CSS media queries.'
      ]
    },
  ];
  public educationList: Array<ExpModel> = [
    {
      id: 1,
      title: 'Master of Computer Application',
      subTitle: 'Lovely Professional University (LPU)',
      year: '2024 - Present',
      link: null,
      descMenu: [
        'Continuously learning and keeping up-to-date with the latest frontend trends and best practices to deliver modern and innovative web solutions.',
      ]
    },
    {
      id: 1,
      title: 'BACHELOR OF COMPUTER APPLICATION',
      subTitle: 'Sutex Bank College of Computer Apllications - VNSGU',
      year: '2021-2024',
      link: null,
      descMenu: [
        'In this degree course I have Skilled in programming, frontend design, and database management systems.',
      ]
    },
  ];
  constructor() { }
  ngOnInit(): void {

  }

}
