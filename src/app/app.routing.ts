import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list';
import { RestaurantListResolver } from './restaurant-list/restaurant-list.resolver';

const appRoutes: Routes = [
  {
    path: '',
    resolve: {
      restaurants: RestaurantListResolver
    },
    component: RestaurantListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);