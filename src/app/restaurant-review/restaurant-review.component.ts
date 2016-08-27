import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantModel } from './../restaurant-list';
import { ReviewModel } from './review.model';

@Component({
  moduleId: module.id,
  selector: 'app-restaurant-review',
  templateUrl: 'restaurant-review.component.html',
  styleUrls: ['restaurant-review.component.css']
})
export class RestaurantReviewComponent {

    private restaurant: RestaurantModel;
    private reviews: ReviewModel;

    constructor(private route: ActivatedRoute) {
    route.data.forEach(d => {
      this.restaurant = d['restaurant'];
      this.reviews = d['reviews'];
    })
  }
}
