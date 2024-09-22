import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetExperienceChartData():Observable<Experience>{
    return this.http.get<Experience>('https://shanbhagchandan.github.io/Portfolio/data/technical-experience.json');
  }
}
