import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBoxComponent } from './modal-box.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ModalBoxComponent],
  imports: [
    CommonModule,
    NgbModalModule,

  ],
  exports: [ModalBoxComponent]
})
export class ModalBoxModule { }
