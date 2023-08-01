import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserFeedbackModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public path: string = 'https://hariitilavat-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) { }
  storeUserFeedback(feedbackData: UserFeedbackModel): Observable<any> {
    return this.http.post(`${this.path}/feedback.json`, feedbackData).pipe(
      map((feedback)=>{
        debugger;
        return feedback;
      })
    );
  }
}
