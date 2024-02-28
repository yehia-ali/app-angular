import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideMenuComponent } from './aside-menu.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    AsideMenuComponent,
  ],
  imports: [CommonModule, RouterModule,SharedModule],
  exports: [AsideMenuComponent],
})
export class AsideMenuModule {}
