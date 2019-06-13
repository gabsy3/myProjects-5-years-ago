import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SurfboardsComponent } from './surfboards/surfboards.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClothesItemComponent } from './clothes-item/clothes-item.component';
import { SurfboardsItemComponent } from './surfboards-item/surfboards-item.component';
import { SearchComponent } from './search/search.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SurfboardsComponent,
    ClothesComponent,
    ClothesItemComponent,
    SurfboardsItemComponent,
    SearchComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
