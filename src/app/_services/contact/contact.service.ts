import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserDataModel } from 'src/app/_model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  storeData(userData:UserDataModel): Observable<UserDataModel> {
    return this.http.post<UserDataModel>('https://hariitilavat-default-rtdb.firebaseio.com/user-data.json',userData);
  }
}
