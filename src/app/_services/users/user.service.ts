import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { UserFeedbackModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public path: string = 'https://hariitilavat-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) { }
  storeUserFeedback(feedbackData: UserFeedbackModel): Observable<any> {
    const data: UserFeedbackModel = {
      date: new Date(),
      ...feedbackData
    }
    return this.http.post(`${this.path}/feedback.json`, data);
  }
  getFeedbackData(): Observable<UserFeedbackModel[]> {
    const feedbackData: any[] = [];
    const replyData: any[] = [];
    let testObj;
    return this.http.get<UserFeedbackModel[]>(`${this.path}/feedback.json`).pipe(
      map((response: UserFeedbackModel[]) => {
        for (let key in response) {
          feedbackData.push({ ...response[key], id: key });
        }

        let testArray = feedbackData.map((item) => {
          if (item.replyData) {
            for (let j in item.replyData) {
              replyData.push({ ...item.replyData[j], replyId: j });
            }
            testObj = { ...item, replyData: replyData }
            return testObj;
          } else {
            return item;
          }
        });
        // console.log("Test Array: ", testArray);
        return testArray;
      })
    );
  }
  updateFeedbackData(id: string, updatedReply: any): Observable<any> {
    const data: UserFeedbackModel = {
      date: new Date(),
      ...updatedReply
    }
    // return this.http.put(`${this.path}/feedback/${id}.json`,replyData);
    return this.http.post(`${this.path}/feedback/${id}/replyData.json`, data);
  }
}
