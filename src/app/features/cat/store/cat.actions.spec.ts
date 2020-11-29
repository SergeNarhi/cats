import * as fromCat from './cat.actions';

describe('loadCats', () => {
  it('should return an action', () => {
    expect(fromCat.load().type).toBe('[Cat] Load Cats');
  });
});
