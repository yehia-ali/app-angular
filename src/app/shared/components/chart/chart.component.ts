import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() title: string = '';
  @Input() percentage: string = '';
  @Input() chartHeight!: number;
  @Input() chartWidth!: number;
  @Input() firstColor: string = '';
  @Input() firstData: number = 0;
  @Input() secondeColor: string = '';
  @Input() secondeData: number = 0;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'subscribers-graph',
      type: 'pie',
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
    },
    plotOptions: {
      pie: {
        innerSize: '100%',
      },
      series: {
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
    },
    series: [
      {
        borderWidth: 0,
        size: '100%',
        innerSize: '75%',
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ] as any,
    credits: {
      enabled: false,
    },
  };
  ngAfterViewInit() {
    this.chartOptions = {
      chart: {
        width: this.chartWidth,
        height: this.chartHeight,
      },
      series: [
        {
          data: [
            {
              y: this.firstData,
              color: this.firstColor,
            },
            {
              y: this.secondeData,
              color: this.secondeColor,
            },
          ],
        },
      ] as any,

      title: {
        text: `${this.percentage}% <br> ${this.title} <br>`,
      },
    };
  }
}
