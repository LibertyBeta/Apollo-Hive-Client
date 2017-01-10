import { ApolloHiveClientPage } from './app.po';

describe('apollo-hive-client App', function() {
  let page: ApolloHiveClientPage;

  beforeEach(() => {
    page = new ApolloHiveClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
