import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-ask-project',
  templateUrl: './ask-project.component.html',
  styleUrls: ['./ask-project.component.scss']
})
export class AskProjectComponent implements OnInit {

  constructor(){}
  ngOnInit():void{

  }
  goToContact():void{
    document.getElementById('contact')?.scrollIntoView();
  }
}
