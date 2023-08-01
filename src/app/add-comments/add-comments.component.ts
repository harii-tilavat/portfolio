import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services';
import { UserFeedbackModel } from '../_model';

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
  public isSubmitReply: boolean = false;
  public isSubmitFeedback: boolean = false;
  public feedbackData: UserFeedbackModel[] = [];
  public errorMessage!: string;
  public isLoading: boolean = false;
  constructor(private snakeBar: MatSnackBar, private userService: UserService) { }
  ngOnInit(): void {
    this.date = new Date();
    this.feedbackForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userFeedback: new FormControl(null, [Validators.required]),
    });
    this.replyForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userReply: new FormControl(null, [Validators.required]),
    });

    this.userService.getFeedbackData().subscribe({
      next: (response: UserFeedbackModel[]) => {
        this.feedbackData = response;
      }
    });
  }
  onSubmitFeedback(): void {
    this.isSubmitFeedback = true;
    this.isSubmitReply = true;
    if (this.feedbackForm.valid) {
      this.isLoading = true;
      this.userService.storeUserFeedback(this.feedbackForm.value).subscribe({
        next: () => {
          this.snakeBar.open(`Thank you ${this.feedbackForm.value.userName} for your feedback!`, 'Ok');
          this.isLoading = false;

        }, error: () => {
          this.errorMessage = 'Something Went Wrong! ';
          this.isLoading = false;
        }, complete: () => {
          this.resetForm();
        }
      });
    }
    return;

  }
  onReply(id: string) {
    const selectedUser: UserFeedbackModel = this.feedbackData.find(i => i.id === id)!;
  }
  onSubmitReply(): void {
    console.log("Reply form: ", this.replyForm.value);
  }
  resetForm(): void {
    this.feedbackForm.reset();
    this.errorMessage = '';
    this.isLoading = false;
    this.isSubmitFeedback = false;
    this.isSubmitReply = false;
  }
}
