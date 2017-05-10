import { TriviaGamePage } from './app.po';

describe('trivia-game App', () => {
  let page: TriviaGamePage;

  beforeEach(() => {
    page = new TriviaGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
