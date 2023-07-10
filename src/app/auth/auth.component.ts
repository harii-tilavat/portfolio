import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  public captchaCode!:string;
  public loginMode=false;

  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    const result = Math.random().toString(36).toUpperCase().substring(2, 7);
    this.captchaCode=result;
    console.log(this.captchaCode);
  }
  onChangeMode():void{
    this.loginMode=!this.loginMode;
  }
}
