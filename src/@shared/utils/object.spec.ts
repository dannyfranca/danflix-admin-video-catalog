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

  it('should not deep freeze', () => {
    let value = 3;

    const frozenValue = deepFreeze(value);

    expect(() => (value = 2)).not.toThrow();
    expect(value).toBe(2);
    expect(frozenValue).toBe(3);
  });
});
