import { AngularHeroEditorPage } from './app.po';

describe('angular-hero-editor App', () => {
  let page: AngularHeroEditorPage;

  beforeEach(() => {
    page = new AngularHeroEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
