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
}
