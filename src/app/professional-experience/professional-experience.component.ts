import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-professional-experience',
  standalone: true,
  imports: [MatStepperModule,MatLabel,MatButtonModule,MatGridListModule,MatCardModule,MatIconModule],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.css'
})
export class ProfessionalExperienceComponent {

}
