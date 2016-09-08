export class ReviewModel {
    id: number;
    name: string;
    date: Date;
    rating: number;
    comment: string;
    restaurantId: number;

    constructor() {
        this.date = new Date(Date.now());
    }
};
