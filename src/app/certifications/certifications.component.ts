import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLabel } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MenuServiceService } from '../service/menu-service.service';
import { BreakpointObserver, LayoutModule, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [MatStepperModule,MatLabel,MatButtonModule,MatGridListModule,MatCardModule,MatIconModule,MatExpansionModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  heading:string = 'Certifications';
  readonly panelOpenState = signal(true);
  isHandSet: boolean = false;
  isTablet: boolean = false;

  constructor(private menuServiceService:MenuServiceService, private observer: BreakpointObserver){
    
  }

  ngOnInit(){
    this.menuServiceService.SetPageHeading(this.heading);

    this.isHandSet = this.observer.isMatched(Breakpoints.HandsetPortrait);
    this.isTablet = this.observer.isMatched([Breakpoints.HandsetLandscape,Breakpoints.TabletPortrait]);
  }
}
