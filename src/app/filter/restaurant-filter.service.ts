import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RestaurantFilterService {

  private toggleFilterSource = new Subject<boolean>();
  toggleFilter$ = this.toggleFilterSource.asObservable();

  toggleFilter(toggle: boolean) {
    this.toggleFilterSource.next(toggle);
  }
}
