import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantModel } from '../template-restaurant';
import { FilterModel } from './../filter';

@Component({
  moduleId: module.id,
  selector: 'app-restaurant-list',
  templateUrl: 'restaurant-list.component.html',
  styleUrls: ['restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  private filterHidden: boolean = true;
  restaurants: RestaurantModel[];
  data: RestaurantModel[];

  constructor(
    private route: ActivatedRoute) {
    route.data.forEach(d => this.data = d['restaurants'])
  }

  ngOnInit() {
    this.restaurants = this.data;
  }

  toggleFilter() {
    this.filterHidden = !this.filterHidden;
  }

  filterChanged(filter: FilterModel) {
    // Resets the data
    this.restaurants = this.data;
    if (filter.city != 'All' && filter.cuisine != 'All') {
      this.restaurants = this.restaurants.filter(item => item.city === filter.city && item.cuisine === filter.cuisine);
    }

    if (filter.city != 'All') {
      this.restaurants = this.restaurants.filter(item => item.city.toLowerCase() == filter.city.toLowerCase())
    }

    if (filter.cuisine != 'All') {
      this.restaurants = this.restaurants.filter(item => item.cuisine.toLowerCase() == filter.cuisine.toLowerCase())
    }
  }
}
