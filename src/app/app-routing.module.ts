import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then(
          m => m.HomeModule
        ),
    },
    {
      path: 'table',
      loadChildren: () =>
        import('./pages/table-page/table-page.module').then(
          m => m.TablePageModule
        ),
    },
    { path: '**', redirectTo: 'home'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
