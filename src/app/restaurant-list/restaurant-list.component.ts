import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestaurantModel } from './restaurant.model';

@Component({
  moduleId: module.id,
  selector: 'app-restaurant-list',
  templateUrl: 'restaurant-list.component.html',
  styleUrls: ['restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: RestaurantModel[]
  constructor(private route: ActivatedRoute) { 
    route.data.forEach(d => this.restaurants = d['restaurants'])
  }

  ngOnInit() {
  }

}
