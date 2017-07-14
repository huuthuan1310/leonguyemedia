import { NguyenhuufamilyPage } from './app.po';

describe('nguyenhuufamily App', () => {
  let page: NguyenhuufamilyPage;

  beforeEach(() => {
    page = new NguyenhuufamilyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
