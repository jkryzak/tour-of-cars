import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { VehicleDetailComponent } from './vehicle-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VehicleDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }