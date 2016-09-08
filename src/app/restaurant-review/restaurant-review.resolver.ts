import { Inject, forwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { RestaurantService } from './../restaurant-list/';
import { RestaurantModel } from './../template-restaurant';
import { Observable } from 'rxjs';

export class RestaurantResolver implements Resolve<RestaurantModel> {
    constructor(@Inject(forwardRef(() => RestaurantService))private svc: RestaurantService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RestaurantModel> {
        let restaurantId = route.params['restaurantId'];
        return this.svc.getRestaurantById(restaurantId);
    }
}
