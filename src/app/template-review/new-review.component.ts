import { Component, OnInit } from '@angular/core';
import { ReviewModel } from './review.model';

@Component({
    moduleId: module.id,
    selector: 'app-new-review',
    templateUrl: 'new-review.component.html'
})
export class NewReviewComponent implements OnInit {
    public review: ReviewModel;

    ngOnInit() {
        this.review = new ReviewModel();
    }
    ratingComponetClick($event) {
        this.review.rating = $event;
    }
}
