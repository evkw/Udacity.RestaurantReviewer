import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RestaurantFilterService {

  public showFilter: boolean = false;

  private toggleFilterSource = new Subject<boolean>();
  toggleFilter$ = this.toggleFilterSource.asObservable();

  toggleFilter(toggle: boolean) {
    this.toggleFilterSource.next(toggle);
  }
}
