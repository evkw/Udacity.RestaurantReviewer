import { Component, Input } from '@angular/core';
import { RestaurantModel } from './restaurant.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-restaurant',
    templateUrl: 'restaurant.component.html'
})
export class RestaurantComponent {
    @Input() restaurant: RestaurantModel;
    @Input() showLinks: boolean = false;
    constructor(private route: Router) {
        window.scrollTo(0, 0);
    }

    navigateToReviews(restaurantId: number) {
        this.route.navigate([restaurantId, 'reviews']);
    }
}
