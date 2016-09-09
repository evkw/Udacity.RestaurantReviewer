import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReviewModel } from './review.model';

@Component({
    moduleId: module.id,
    selector: 'app-new-review',
    templateUrl: 'new-review.component.html',
    styleUrls: ['new-review.component.css']
})
export class NewReviewComponent implements OnInit {
    public review: ReviewModel;
    public disableNewReview: boolean = false;
    @Output() newReview: EventEmitter<ReviewModel> = new EventEmitter<ReviewModel>();

    ngOnInit() {
        this.review = new ReviewModel();
    }
    ratingComponetClick($event) {
        this.review.rating = $event;
    }

    addReview(value, valid) {
        console.log(valid);
        if (valid) {
            this.newReview.emit(this.review);
            this.disableNewReview = true;
        }
    }
}
