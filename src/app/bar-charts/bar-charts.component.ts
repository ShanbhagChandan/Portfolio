import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-bar-charts',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './bar-charts.component.html',
  styleUrl: './bar-charts.component.css'
})
export class BarChartsComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  data = [1, 2, 3, 4, 5, 1,1, 2, 3, 4, 5, 1,1, 2, 3, 4];

  ngOnInit(){
     this.chartOptions = {
      chart: {
        type: 'column',
      },
      title:{
        text:"Experience v/s Technologies",
        align: 'center'
      },
      xAxis:{
        categories: ['MS SQL', 'C#', '.Net', '.Net Core', 'Azure', 'Angular', 'Entity Framework', 'Entity Framework Core', 'ADO .Net', 'Azure Devops', 'Git', 'HTML', 'CSS', 'Javascript', 'Jquery', 'Bootstrap'],
        title: {
          text: 'Technologies'
        }
      },
      yAxis:{
        min:0,
        title: {
          text: 'Experience in years'
        }
      },
      legend:{ 
        enabled:false 
      },
      credits: {
        enabled: false
      },
      tooltip:{
        valueSuffix: ' Year'
      },
      series: [
        {
          type: 'column',
          data: this.data,
        },
      ],
    };
  }
}
