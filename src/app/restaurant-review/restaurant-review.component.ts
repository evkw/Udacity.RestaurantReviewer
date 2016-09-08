import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantModel } from '../template-restaurant';
import { ReviewModel } from '../template-review';

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
    });
  }
}
