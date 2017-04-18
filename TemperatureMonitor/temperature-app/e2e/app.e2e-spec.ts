import { TemperatureAppPage } from './app.po';

describe('temperature-app App', () => {
  let page: TemperatureAppPage;

  beforeEach(() => {
    page = new TemperatureAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
