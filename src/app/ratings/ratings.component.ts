import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-ratings',
    templateUrl: 'ratings.component.html',
    styleUrls: ['ratings.component.css']
})
export class RatingsComponent implements OnInit {

    @Input() rating: number;
    @Input() itemId: number;
    @Input() readonly: boolean = true;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

    inpustName: string;

    ngOnInit() {
        this.inpustName = this.itemId + '_rating';
    }
    onClick(rating: number): void {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    }
}