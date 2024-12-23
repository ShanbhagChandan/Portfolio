import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MenuServiceService } from '../service/menu-service.service';
import { BreakpointObserver, LayoutModule, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatStepperModule,MatLabel,MatButtonModule,MatGridListModule,MatCardModule,MatIconModule,LayoutModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  heading:string = 'Education';
  isHandSet: boolean = false;
  isTablet: boolean = false;

  constructor(private menuServiceService:MenuServiceService,  private observer: BreakpointObserver){
    
  }

  ngOnInit(){
    this.menuServiceService.SetPageHeading(this.heading);
    this.isHandSet = this.observer.isMatched(Breakpoints.HandsetPortrait);
    this.isTablet = this.observer.isMatched([Breakpoints.HandsetLandscape,Breakpoints.TabletPortrait]);
  }
}
