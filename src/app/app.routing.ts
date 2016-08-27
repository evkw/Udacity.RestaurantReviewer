import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list';
import { RestaurantListResolver } from './restaurant-list/restaurant-list.resolver';
import { RestaurantResolver, RestaurantReviewComponent, ReviewListResolver } from './restaurant-review';

const appRoutes: Routes = [
  {
    path: '',
    resolve: {
      restaurants: RestaurantListResolver
    },
    component: RestaurantListComponent
  },
  {
    path: ':restaurantId/reviews',
    resolve: {
      reviews: ReviewListResolver,
      restaurant: RestaurantResolver
    },
    component: RestaurantReviewComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);