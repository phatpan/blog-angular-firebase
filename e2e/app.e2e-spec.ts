import { BlogAngularFirebasePage } from './app.po';

describe('blog-angular-firebase App', () => {
  let page: BlogAngularFirebasePage;

  beforeEach(() => {
    page = new BlogAngularFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
