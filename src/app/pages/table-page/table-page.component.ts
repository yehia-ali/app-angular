import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { generatedata } from './grid.constants';
import { GridTableComponent } from 'src/app/shared/components/grid-table/grid-table.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalBoxComponent } from 'src/app/shared/components/modal-box/modal-box.component';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
})
export class TablePageComponent implements OnInit {
  closeResult = '';
  myForm: FormGroup;
  selectRowIndex!: number;
  @ViewChild('modal') private modalBox: ModalBoxComponent
  @ViewChild('gridTable', { static: true }) gridTable: GridTableComponent;

  source: any = {
    localdata: generatedata(7),
  };
  constructor(private modalService: NgbModal,
    ) {}
  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.myForm = new FormGroup({
      name: new FormControl({ value: '' }, [
        Validators.required,
      ]),
      address: new FormControl({ value: '' }, [
        Validators.required,
      ]),
      email: new FormControl({ value: '' }, [
        Validators.required,
        Validators.email
      ]),
    });

  }
  get formValidations() {
    return this.myForm.controls;
  }

  col: any[] = [
    { text: 'Name', datafield: 'name', cellsalign: 'center', align: 'center' },
    { text: 'Address', datafield: 'address', cellsalign: 'center', align: 'center' },
    { text: 'Email', datafield: 'email', cellsalign: 'center', align: 'center' },
    {
      text: 'Actions',
      datafield: 'action',
      align: 'center',
      cellsalign: 'center',
      initwidget: (row, column, value, htmlElement) => {
        const buttonsAdded = htmlElement.getAttribute('data-buttons-added');
        htmlElement.classList.add( 'd-flex', 'justify-content-center', 'align-items-center');
        if (!buttonsAdded) {
          const editButton = document.createElement('button');
          editButton.className = 'btn btn-sm btn-primary mx-2';
          editButton.textContent = 'Edit';
          editButton.onclick = () => this.editRow(row);
          htmlElement.appendChild(editButton);

          const deleteButton = document.createElement('button');
          deleteButton.className = 'btn btn-sm btn-danger mx-2';
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = () => this.deleteRow(row);
          htmlElement.appendChild(deleteButton);
          htmlElement.setAttribute('data-buttons-added', 'true');
        }

      },
      createwidget: (row, column, value, htmlElement) => {},
    },

  ];

  deleteRow(selectedrowindex) {
    let id = this.gridTable.myGrid.getrowid(selectedrowindex);
    this.gridTable.myGrid.deleterow(id);
  }
  editRow(selectedrowindex) {
      this.selectRowIndex = selectedrowindex;
      let dataRecord = this.gridTable.myGrid.getrowdata(selectedrowindex);
      this.myForm.patchValue({
        name: dataRecord?.name,
        address: dataRecord?.address,
        email: dataRecord?.email
      });
      this.modalBox.open()
  }
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    let id = this.gridTable.myGrid.getrowid(this.selectRowIndex);
    this.gridTable.myGrid.updaterow(id, this.myForm.value);
    this.gridTable.myGrid.ensurerowvisible(this.selectRowIndex);
    this.modalBox.close();
  }


}
