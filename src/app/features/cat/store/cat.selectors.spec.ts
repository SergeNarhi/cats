import * as fromCat from './cat.reducer';
import { selectCatState } from './cat.selectors';

describe('Cat Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCatState({
      [fromCat.catFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
