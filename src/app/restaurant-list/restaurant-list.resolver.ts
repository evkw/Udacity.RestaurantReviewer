import { Inject, forwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { Observable } from 'rxjs';

import { RestaurantModel } from '../template-restaurant';

export class RestaurantListResolver implements Resolve<RestaurantModel[]> {
    constructor( @Inject(forwardRef(() => RestaurantService)) private svc: RestaurantService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RestaurantModel[]> {
        return this.svc.getRestaurants();
    }
}
