import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm!:FormGroup;
  public isSubmitted!:boolean;
  constructor(){}
  ngOnInit():void{
    this.contactForm=new FormGroup({
      name:new FormControl(null,[Validators.required]),
      email:new FormControl(null, [Validators.required,Validators.email]),
      subject:new FormControl(null, [Validators.required]),
      message:new FormControl(null, [Validators.required])
    })
  }
  onSubmit():void{
    this.isSubmitted=true;
    // console.log("Value: ", this.contactForm);
    if(this.contactForm.valid){
      console.log("Value: ", this.contactForm.value);
    }
    return;
  }
}
