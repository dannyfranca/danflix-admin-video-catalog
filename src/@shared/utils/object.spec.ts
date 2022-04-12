import { deepFreeze } from './object';

describe('Object utils unit tests', () => {
  it('should deep freeze object', () => {
    let obj = {
      prop: 'value',
      nested: {
        prop: 'value',
      },
    } as any;

    const frozenObject = deepFreeze(obj);

    expect(() => (obj.prop = 'newValue')).toThrow();
    expect(() => (obj.nested.prop = 'newValue')).toThrow();
    expect(obj).toStrictEqual(frozenObject);

    expect(() => (obj = {})).not.toThrow();
  });
});
