import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { RestaurantModel } from './restaurant.model';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  getRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get('./../../assets/Restaurant.json')
      .map(res => <RestaurantModel[]>res.json())
  }

  getRestaurantById(restaurantId: number): Observable<RestaurantModel> {
    return this.http.get('./../../assets/Restaurant.json')
      .map(res => {
        let restaurants = <RestaurantModel[]>res.json();
        return restaurants.find(item => item.id == restaurantId);
      })
  }
}
