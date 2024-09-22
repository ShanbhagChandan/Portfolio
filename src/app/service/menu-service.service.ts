import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private _menuExpand = new ReplaySubject<boolean>();
  menuExpand$ = this._menuExpand.asObservable();

  private _pageHeading = new ReplaySubject<string>();
  pageHeading$ = this._pageHeading.asObservable();

  constructor() { }

  SetMenuExpandStatus(isExpanded:boolean){
    this._menuExpand.next(isExpanded);
  }

  SetPageHeading(pageHeading:string){
    this._pageHeading.next(pageHeading);
  }
}
