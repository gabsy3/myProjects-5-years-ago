import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {SurfboardsComponent} from './surfboards/surfboards.component';
import {ClothesComponent} from './clothes/clothes.component';

const routes: Routes = [
  {path : '' , component :SurfboardsComponent , pathMatch : 'full'},
  {path : 'surfboards' , component :SurfboardsComponent },
  {path : 'clothes' , component :ClothesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
