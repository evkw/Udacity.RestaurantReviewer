import { Inject, forwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ReviewService } from './review.service';
import { Observable } from 'rxjs';

import { ReviewModel } from '../template-review';

export class ReviewListResolver implements Resolve<ReviewModel[]> {
    constructor(@Inject(forwardRef(() => ReviewService))private svc: ReviewService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReviewModel[]> {
        let restaurantId = route.params['restaurantId'];
        return this.svc.getReviewsByRestaurantId(restaurantId);
    }
}
