import { SimpleAngular2Page } from './app.po';

describe('simple-angular2 App', function() {
  let page: SimpleAngular2Page;

  beforeEach(() => {
    page = new SimpleAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
