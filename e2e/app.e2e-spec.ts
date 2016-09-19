import { RestaurantreviewsPage } from './app.po';

describe('restaurantreviews App', function() {
  let page: RestaurantreviewsPage;

  beforeEach(() => {
    page = new RestaurantreviewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
