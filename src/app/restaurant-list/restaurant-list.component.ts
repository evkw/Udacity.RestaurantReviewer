import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { RestaurantModel } from './restaurant.model';
import { RestaurantFilterService, FilterModel } from './../filter';

@Component({
  moduleId: module.id,
  selector: 'app-restaurant-list',
  templateUrl: 'restaurant-list.component.html',
  styleUrls: ['restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit, OnDestroy {

  private filterSubscription: Subscription;
  private filterHidden: boolean = true;
  restaurants: RestaurantModel[];
  data: RestaurantModel[];

  constructor(
    private route: ActivatedRoute,
    private fltrSvc: RestaurantFilterService) {
    route.data.forEach(d => this.data = d['restaurants'])
  }

  ngOnInit() {
    this.restaurants = this.data;
    this.filterSubscription = this.fltrSvc.toggleFilter$.subscribe(t => this.filterHidden = t)
  }

  filterChanged(filter: FilterModel) {
    //Resets the data
    this.restaurants = this.data;
    if (filter.city != "All" && filter.cuisine != "All") {
       this.restaurants = this.restaurants.filter(item => item.city === filter.city && item.cuisine === filter.cuisine);
    }

    if (filter.city != "All") {
       this.restaurants = this.restaurants.filter(item => item.city.toLowerCase() == filter.city.toLowerCase())
    }

    if (filter.cuisine != "All") {
       this.restaurants = this.restaurants.filter(item => item.cuisine.toLowerCase() == filter.cuisine.toLowerCase())
    }
    console.log(this.restaurants);
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe;
  }
}
