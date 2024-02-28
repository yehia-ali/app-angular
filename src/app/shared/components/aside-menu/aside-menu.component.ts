import { Component, OnInit } from '@angular/core';
import { menuList } from '../../constants/menu';
import { menuI } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  userName:string = "test  user";
  items:menuI[] = menuList;
  constructor() { }

  ngOnInit(): void {
  }

}
