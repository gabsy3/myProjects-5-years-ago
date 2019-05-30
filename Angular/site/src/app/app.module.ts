import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { CarousleComponent } from './carousle/carousle.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    CarousleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
