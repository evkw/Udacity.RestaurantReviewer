import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {

  constructor(private http: Http) { }

  getReviewsByRestaurantId(restaurantId: number): Observable<ReviewModel[]> {
    return this.http.get('./../../assets/Reviews.json')
      .map(res => {
          let reviews = <ReviewModel[]>res.json()
          return reviews.filter(item => item.restaurantId == restaurantId);
        })
  }
}
