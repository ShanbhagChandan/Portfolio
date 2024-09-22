import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatStepperModule,MatLabel,MatButtonModule,MatGridListModule,MatCardModule,MatIconModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  heading:string = 'Education';

  constructor(private menuServiceService:MenuServiceService){
    
  }

  ngOnInit(){
    this.menuServiceService.SetPageHeading(this.heading);
  }
}
