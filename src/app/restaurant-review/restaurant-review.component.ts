import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  private reviews: ReviewModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    route.data.forEach(d => {
      this.restaurant = d['restaurant'];
      this.reviews = d['reviews'];
      this.reviews.sort((a, b) => {
        if (a.date > b.date) { return -1; }
        if (a.date < b.date) { return 1; }
      });
    });
  }

  addNewReview(review) {
    this.reviews.push(review);
    this.reviews.sort((a, b) => {
      if (a.date > b.date) { return -1; }
      if (a.date < b.date) { return 1; }
    });
  }

  navigateToRestaurantList() {
    this.router.navigate(['']);
  }
}
