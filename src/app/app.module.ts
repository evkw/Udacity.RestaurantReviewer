import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MdCoreModule } from '@angular2-material/core';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCardModule } from '@angular2-material/card';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { RestaurantService } from './restaurant-list/restaurant.service';
import { RestaurantListComponent } from './restaurant-list';
import { RestaurantListResolver } from './restaurant-list/restaurant-list.resolver';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    // Routes
    routing,

    // Material Design
    MdCoreModule,
    MdProgressBarModule,
    MdRadioModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: [
    AppComponent,
    RestaurantListComponent
  ],
  providers: [
    RestaurantService,
    RestaurantListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }