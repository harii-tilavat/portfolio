import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserFeedbackModel } from 'src/app/_model';
import { UserService } from 'src/app/_services';
import { fadeInAnimation } from 'src/app/shared/shared.module';

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
  public showFeedbackData!:Array<UserFeedbackModel>;
  public errorMessage!: string;
  public isLoading: boolean = false;
  public selectedUser!: UserFeedbackModel;
  constructor( private userService: UserService) { }
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
    this.getFeedback();
  }
  onSubmitFeedback(): void {
    this.isSubmitFeedback = true;
    this.isSubmitReply = true;
    if (this.feedbackForm.valid) {
      this.isLoading = true;
      this.userService.storeUserFeedback(this.feedbackForm.value).subscribe({
        next: () => {
          // this.snakeBar.open(`Thank you ${this.feedbackForm.value.userName} for your feedback!`, 'Ok', { duration: 2500 });
          alert(`Thank you ${this.feedbackForm.value.userName} for your feedback!`);
          this.isLoading = false;
          this.getFeedback();
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
    this.reply = true;
    this.selectedUser = this.feedbackData.find(i => i.id === id)!;
    console.log("Selected user: ", this.selectedUser);
  }
  viewReply(id: string): void {
    this.showReply = !this.showReply;
    this.selectedUser = this.feedbackData.find(i => i.id === id)!;
  }
  onSubmitReply(): void {
    this.userService.updateFeedbackData(this.selectedUser.id, this.replyForm.value).subscribe({
      next: (response: any) => {
        alert("Reply sent Successfully");
        // this.snakeBar.open('Reply sent Successfully', 'Ok', { duration: 2500 });
        this.getFeedback();
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        this.resetForm();
      }
    });
  }
  resetForm(): void {
    this.feedbackForm.reset();
    this.errorMessage = '';
    this.isLoading = false;
    this.isSubmitFeedback = false;
    this.isSubmitReply = false;
    this.reply = false;
  }
  getFeedback(): void {
    this.userService.getFeedbackData().subscribe({
      next: (response: UserFeedbackModel[]) => {
        this.feedbackData = response;
        this.showFeedbackData=this.feedbackData.slice(0,3);
        console.log("FeedbackData :", this.showFeedbackData);
        console.log("Reply Data:", response);
      }
    });
  }
  loadMore():void{

  }
}
