import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private _menuExpand = new ReplaySubject<boolean>();
  menuExpand$ = this._menuExpand.asObservable();

  constructor() { }

  SetMenuExpandStatus(isExpanded:boolean){
    this._menuExpand.next(isExpanded);
  }
}
