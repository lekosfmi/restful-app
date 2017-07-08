import { RestfulAppPage } from './app.po';

describe('restful-app App', () => {
  let page: RestfulAppPage;

  beforeEach(() => {
    page = new RestfulAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
