import { Component } from '@angular/core';
import { RestaurantFilterService } from './filter';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent { 

  private filterHidden  = true;
  constructor(private filterSvc: RestaurantFilterService) {}

  toggleFilter() {
    this.filterHidden = !this.filterHidden;
    this.filterSvc.toggleFilter(this.filterHidden);
  }
}
