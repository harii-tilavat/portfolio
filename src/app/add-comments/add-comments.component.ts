import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.scss'],
  animations: [fadeInAnimation]
})
export class AddCommentsComponent implements OnInit {
  public showReply: boolean = false;
  public date!: any;
  public reply: boolean = false;
  public replyForm!: FormGroup;
  public feedbackForm!: FormGroup;
  public isSubmitReply: boolean=false;
  public isSubmitFeedback: boolean=false;
  constructor(private snakeBar: MatSnackBar, private userService: UserService) { }
  ngOnInit(): void {
    this.date = new Date();
    this.feedbackForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      feedbackContent: new FormControl(null, [Validators.required]),
    });
    this.replyForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userReply: new FormControl(null, [Validators.required]),
    });
    // this.snakeBar.open('Hello World','Ok');
  }
  onSubmitFeedback(): void {
    this.isSubmitFeedback=true;
    this.isSubmitReply=true;
    console.log("Feedback form: ", this.feedbackForm.value);
    if(!this.feedbackForm.valid){
      return;
    }
    this.userService.storeUserFeedback(this.feedbackForm.value).subscribe();
  }
  onSubmitReply(): void {
    console.log("Reply form: ", this.replyForm.value);
  }
}
