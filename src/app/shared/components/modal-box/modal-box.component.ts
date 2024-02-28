import { Component, Input, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent implements OnInit {
  @Input() modalTitle: string =''
  @ViewChild('modal') private modalContent: TemplateRef<ModalBoxComponent>
  private modalRef: NgbModalRef

  constructor(
    private modalService: NgbModal
    ) {}

  ngOnInit(): void {
  }
  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
      this.modalRef.close()
  }

  async dismiss(): Promise<void> {
      this.modalRef.dismiss()
  }
}
