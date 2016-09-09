import { Component, Output, EventEmitter } from '@angular/core';
import { FilterModel } from './restaurant-filter.model';

@Component({
  moduleId: module.id,
  selector: 'app-restaurant-filter',
  templateUrl: 'restaurant-filter.component.html',
  styleUrls: ['restaurant-filter.component.css']
})

export class RestaurantFilterCompnent {

  private filterModel: FilterModel = new FilterModel();
  @Output() filterChanged = new EventEmitter<FilterModel>();

  changeFilter() {
    this.filterChanged.emit(this.filterModel);
  }
}
