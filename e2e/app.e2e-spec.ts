import { MydanaWebsitePage } from './app.po';

describe('mydana-website App', () => {
  let page: MydanaWebsitePage;

  beforeEach(() => {
    page = new MydanaWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
