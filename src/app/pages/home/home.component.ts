import { Component, OnInit } from '@angular/core';
import { item } from './home.interface';
import {  DisplayGrid, GridType, GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listTitle: string = 'Quick stats';
  chartTitle: string = 'Overall analysis';
  listItems = item;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      setGridSize: true,
      margin: 16,
      outerMargin: true,
      gridType: GridType.VerticalFixed,
      displayGrid: DisplayGrid.Always,
      keepFixedHeightInMobile: true,
      swap: true,
      pushItems: true,
      resizable: { enabled: true },
      draggable: {enabled: true },
      enableEmptyCellDrop: true,

    };
    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0, type: 'chart' },
      { cols: 2, rows: 1, y: 0, x: 3, type: 'list' },

    ];

  }


}
