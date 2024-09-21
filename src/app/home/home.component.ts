import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BarChartsComponent } from '../bar-charts/bar-charts.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatIconModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatTabsModule,BarChartsComponent,RouterLink,MatTooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly panelOpenState = signal(true);
  readonly panelChartsOpenState = signal(false);
}


