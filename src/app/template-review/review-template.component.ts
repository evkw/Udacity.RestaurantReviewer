import { Component, Input } from '@angular/core';
import { ReviewModel } from './review.model';

@Component({
    selector: 'app-review',
    templateUrl: 'review-template.component.html'
})
export class ReviewTemplateComponent {
    @Input() review: ReviewModel;
    @Input() readonly: Boolean;
}
