import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];
  constructor() { }

  ngOnInit() {
  }
  onChartClick(event) {
    console.log(event);
  }
   ngOnDestroy() {
  }
  
  newDataPoint(dataArr = [100, 100, 100], label) {
  
    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });
  
    this.chartLabels = [...this.chartLabels, label];
  
  }
}
