import { Component, Input, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartData } from '../models/chart';

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
  @Input() chartData: ChartData;

  constructor(){

  }

  ngOnInit(){
     this.chartOptions = {
      chart: {
        type: 'column',
      },
      title:{
        text: this.chartData.chartTitleText,
        align: 'center'
      },
      xAxis:{
        type:'category', 
        title: {
          text: this.chartData.xAxisText
        }
      },
      yAxis:{
        min:0,
        title: {
          text: this.chartData.yAxisText
        }
      },
      legend:{ 
        enabled:false 
      },
      credits: {
        enabled: false
      },
      tooltip:{
        valueSuffix: this.chartData.tooltipSuffix,
        headerFormat:'',
        pointFormat: '<span style="font-size:14px;color:{point.color}">{point.name}:</span> <b>{point.y}</b>'
      },
      series: [
        {
          type: 'column',
          name: this.chartData.seriesName,
          colorByPoint:true,
          data: this.chartData.series,
        },
      ],
    };
  }
}
