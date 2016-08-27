import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MdCoreModule } from '@angular2-material/core';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCardModule } from '@angular2-material/card';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';
import { MdButtonModule } from '@angular2-material/button';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { 
  RestaurantService,
  RestaurantListComponent,
  RestaurantListResolver } from './restaurant-list';
import { 
  RestaurantFilterCompnent, 
  RestaurantFilterService } from './filter';
import {
  RestaurantReviewComponent,
  RestaurantResolver,
  ReviewListResolver,
  ReviewService
} from './restaurant-review';

import { RestaurantComponent } from './restaurant';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // Routes
    routing,
    // Material Design
    MdCoreModule,
    MdProgressBarModule,
    MdRadioModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [
    // root
    AppComponent,
    RestaurantListComponent,
    RestaurantFilterCompnent,
    RestaurantReviewComponent,
    RestaurantComponent
  ],
  providers: [
    // restaurant-list providers
    RestaurantService,
    RestaurantListResolver,
    // filter providers
    RestaurantFilterService,
    // Restaurant review provider
    ReviewService,
    ReviewListResolver,
    RestaurantResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }