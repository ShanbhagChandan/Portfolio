import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { BarChartsComponent } from '../bar-charts/bar-charts.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MenuServiceService } from '../service/menu-service.service';
import { BreakpointObserver, LayoutModule, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatIconModule,MatButtonModule,MatExpansionModule,LayoutModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  heading:string = 'Skills';
  isHandSet: boolean = false;
  isTablet: boolean = false;

  constructor(private menuServiceService:MenuServiceService, private observer: BreakpointObserver){
    
  }

  ngOnInit(){
    this.menuServiceService.SetPageHeading(this.heading);

    this.isHandSet = this.observer.isMatched(Breakpoints.HandsetPortrait);
    this.isTablet = this.observer.isMatched([Breakpoints.HandsetLandscape,Breakpoints.TabletPortrait])
  }
}
