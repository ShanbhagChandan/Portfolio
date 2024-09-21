import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MenuServiceService } from '../service/menu-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-summary',
  standalone: true,
  imports: [MatGridListModule,MatCardModule, MatListModule, MatIconModule, CommonModule],
  templateUrl: './professional-summary.component.html',
  styleUrl: './professional-summary.component.css'
})
export class ProfessionalSummaryComponent implements OnInit {
  isMenuExpanded: boolean =  false;
  constructor(private menuServiceService:MenuServiceService){

  }

  ngOnInit(){
    this.menuServiceService.menuExpand$.subscribe(x => this.isMenuExpanded = x);
    console.log(this.isMenuExpanded);
  }

}
