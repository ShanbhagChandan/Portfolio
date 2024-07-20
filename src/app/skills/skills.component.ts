import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatIconModule,MatButtonModule,MatProgressBarModule,MatSliderModule,MatProgressSpinnerModule,MatExpansionModule,MatTabsModule,BarChartsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly panelChartsOpenState = signal(false);
  mode: ProgressSpinnerMode = 'determinate';
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
