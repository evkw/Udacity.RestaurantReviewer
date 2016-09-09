import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdCoreModule } from '@angular2-material/core';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCardModule } from '@angular2-material/card';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import {
  RestaurantService,
  RestaurantListComponent,
  RestaurantListResolver } from './restaurant-list';
import { RestaurantFilterCompnent } from './filter';
import {
  RestaurantReviewComponent,
  RestaurantResolver,
  ReviewListResolver,
  ReviewService
} from './restaurant-review';
import { RestaurantComponent } from './template-restaurant';
import { ReviewTemplateComponent, NewReviewComponent } from './template-review';
import { RatingsComponent } from './ratings';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
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
    MdButtonModule,
    MdInputModule,
  ],
  declarations: [
    // root
    AppComponent,
    RestaurantListComponent,
    RestaurantFilterCompnent,
    RestaurantReviewComponent,
    RestaurantComponent,
    RatingsComponent,
    ReviewTemplateComponent,
    NewReviewComponent
  ],
  providers: [
    // restaurant-list providers
    RestaurantService,
    RestaurantListResolver,
    // Restaurant review provider
    ReviewService,
    ReviewListResolver,
    RestaurantResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }