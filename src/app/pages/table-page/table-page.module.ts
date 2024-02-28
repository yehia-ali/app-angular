import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './table-page.component';
import { tablePageRoutingModule } from './table-page-routing.module';
import { GridTableModule } from 'src/app/shared/components/grid-table/grid-table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalBoxModule } from 'src/app/shared/components/modal-box/modal-box.module';



@NgModule({
  declarations: [TablePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    tablePageRoutingModule,
    ModalBoxModule,
    GridTableModule
  ]
})
export class TablePageModule { }
