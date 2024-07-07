import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  public sidebarChanges = new Subject<boolean>();
  constructor() { }

  sidebarOpen(): void {
    this.sidebarChanges.next(true);
  }
  sidebarClose(): void {
    this.sidebarChanges.next(false);
  }
}
