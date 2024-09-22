import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BarChartsComponent } from '../bar-charts/bar-charts.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuServiceService } from '../service/menu-service.service';
import { DataService } from '../service/data.service';
import { Experience } from '../models/experience';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ChartData, DataSeries } from '../models/chart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatTabsModule, BarChartsComponent, RouterLink, MatTooltipModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  // readonly panelOpenState = signal(true);
  readonly panelChartsOpenState = signal(true);
  heading: string = 'Home';
  experienceData: Experience;
  subscription: Subscription;
  experienceTechnologyChart: ChartData;
  proficiencyTechnologyChart: ChartData;
  proficiencyCategoryChart: ChartData;

  constructor(private menuServiceService: MenuServiceService,
    private dataService: DataService) {

  }

  ngOnInit() {
    this.menuServiceService.SetPageHeading(this.heading);
    this.subscription = this.dataService.GetExperienceChartData().subscribe(x => {
      this.experienceData = x;
      this.CreateTechnologyExperienceChart();
      this.CreateTechnologyProfeciencyChart();
      this.CreateCategoryProfeciencyChart();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  CreateTechnologyExperienceChart() {
    let dataSeries: DataSeries[] = [];
    this.experienceData.Experience.forEach(x => {
      x.SubCategory.forEach(z => {
        let data: DataSeries = {
          name: z.SubCategoryName,
          y: z.Experience
        };
        dataSeries.push(data);
      });
    });
    this.experienceTechnologyChart = {
      chartTitleText: "Experience v/s Technologies",
      xAxisText: "Technologies",
      yAxisText: "Experience in years",
      tooltipSuffix: " Year",
      seriesName: "Technologies",
      series: dataSeries
    }
  }

  CreateTechnologyProfeciencyChart() {
    let dataSeries: DataSeries[] = [];
    this.experienceData.Experience.forEach(x => {
      x.SubCategory.forEach(z => {
        let data: DataSeries = {
          name: z.SubCategoryName,
          y: z.Profeciency
        };
        dataSeries.push(data);
      });
    });
    this.proficiencyTechnologyChart = {
      chartTitleText: "Proficiency v/s Technologies",
      xAxisText: "Technologies",
      yAxisText: "Proficiency out of 10",
      tooltipSuffix: " out of 10",
      seriesName: "Technologies",
      series: dataSeries
    }
  }

  CreateCategoryProfeciencyChart() {
    let dataSeries: DataSeries[] = [];
    this.experienceData.Experience.forEach(x => {
      let data: DataSeries = {
        name: x.CategoryName,
        y: x.SubCategory.reduce((a, b) => a + b.Profeciency, 0) / x.SubCategory.length
      }
      dataSeries.push(data);
    });
    this.proficiencyCategoryChart = {
      chartTitleText: "Proficiency v/s Categories",
      xAxisText: "Categories",
      yAxisText: "Proficiency out of 10",
      tooltipSuffix: " out of 10",
      seriesName: "Categories",
      series: dataSeries
    }
  }
}


