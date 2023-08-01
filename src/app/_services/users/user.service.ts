import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { UserFeedbackModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public path: string = 'https://hariitilavat-default-rtdb.firebaseio.com/feedback.json';
  constructor(private http: HttpClient) { }
  storeUserFeedback(feedbackData: UserFeedbackModel): Observable<any> {
    const data: UserFeedbackModel = {
      date: new Date(),
      replyData: [{id:'abcd', userName:'harit'}],
      ...feedbackData
    }
    return this.http.post(`${this.path}`, data);
  }
  getFeedbackData(): Observable<UserFeedbackModel[]> {
    const feedbackData: any = [];
    return this.http.get<UserFeedbackModel[]>(this.path).pipe(
      map((response: UserFeedbackModel[]) => {
        console.log("Response: ", response);
        for (let key in response) {
          feedbackData.push({ id: key, ...response[key] });
        }
        // feedbackData.push({...response});
        console.log("Array: ", feedbackData);
        return feedbackData;
      })
    );
  }
}
