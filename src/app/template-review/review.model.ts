export class ReviewModel {
    id: number;
    name: string;
    date: string;
    rating: number;
    comment: string;
    restaurantId: number;

    constructor() {
        this.rating = 1;
        let date = new Date(Date.now());
        let days = date.getDate();
        let months = date.getMonth();
        let years = date.getFullYear();
        this.date = `${days}/${months}/${years}`;
    }
};
