export class ChartData{
    chartTitleText: string;
    xAxisText: string;
    yAxisText: string;
    tooltipSuffix: string;
    seriesName:string;
    series:DataSeries[];
}

export class DataSeries{
    name:string;
    y:number;
}