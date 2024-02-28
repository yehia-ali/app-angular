import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTableComponent } from './grid-table.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';



@NgModule({
  declarations: [GridTableComponent],
  imports: [
    CommonModule,
    jqxGridModule
  ],
  exports: [
    GridTableComponent
  ]
})
export class GridTableModule { }
