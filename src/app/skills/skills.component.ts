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

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatIconModule,MatButtonModule,MatExpansionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  heading:string = 'Skills';

  constructor(private menuServiceService:MenuServiceService){
    
  }

  ngOnInit(){
    this.menuServiceService.SetPageHeading(this.heading);
  }
}
