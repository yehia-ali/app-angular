import { Component, OnInit } from '@angular/core';
import { menuList } from '../../constants/menu';
import { menuI } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  items:menuI[] = menuList;
  constructor() { }

}
