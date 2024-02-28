import { Component, Input, OnInit } from '@angular/core';
import { Item } from './list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title?: string = 'title';
  @Input() items!: Item[];
  constructor() { }

  ngOnInit(): void {
  }

}
