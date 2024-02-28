import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListModule } from 'src/app/shared/components/list/list.module';
import { ChartModule } from 'src/app/shared/components/chart/chart.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { GridsterModule } from 'angular-gridster2';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListModule,
    ChartModule,
    CardModule,
    GridsterModule,

  ]
})
export class HomeModule { }
