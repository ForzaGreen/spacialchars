import { SpecialcharsPage } from './app.po';

describe('specialchars App', () => {
  let page: SpecialcharsPage;

  beforeEach(() => {
    page = new SpecialcharsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
