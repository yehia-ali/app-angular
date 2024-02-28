import { Component, Input, Renderer2, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { generatedata } from './../../../pages/table-page/grid.constants';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss'],
})
export class GridTableComponent {
  @Input() dateTable: any;
  @Input() columns: any[];
  @Input() width: string = '100%';
  @Input() height: number = 100;
  @Input() showtoolbar: boolean = false;
  @Input() editable: boolean = false;
  @Input() autoheight: boolean = true;
  @Input() autorowheight: boolean = false;
  @Input() pageable: boolean = false;
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
  ngAfterViewInit(): void {
    console.log('this.dateTable', this.dateTable)
    this.dateTable = new jqx.dataAdapter(this.dateTable);
  }

  }

