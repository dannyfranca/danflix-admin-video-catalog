import ValueObject from './value-object';

class StubValueObject extends ValueObject {}

describe('ValueObject Unit Tests', () => {
  it('should set value', () => {
    let valueObject = new StubValueObject('value');

    expect(valueObject?.value).toBe('value');

    valueObject = new StubValueObject({ prop: 'value' });
    expect(valueObject?.value).toStrictEqual({ prop: 'value' });
  });

  it('should convert to string', () => {
    const date = new Date();

    const arrange = [
      { received: null, expected: 'null' },
      { received: undefined, expected: 'undefined' },
      { received: '', expected: '' },
      { received: 'value', expected: 'value' },
      { received: 0, expected: '0' },
      { received: 5, expected: '5' },
      { received: true, expected: 'true' },
      { received: false, expected: 'false' },
      { received: date, expected: date.toString() },
      {
        received: { prop: 'value' },
        expected: JSON.stringify({ prop: 'value' }),
      },
    ];

    for (const { received, expected } of arrange) {
      const valueObject = new StubValueObject(received);

      expect(valueObject + '').toBe(expected);
    }
  });

  it('should be immutable', () => {
    const valueObject = new StubValueObject({ prop: 1, nested: { prop: 2 } });

    expect(() => {
      valueObject.value.prop = 2;
    }).toThrow();

    expect(() => {
      valueObject.value.nested.prop = 3;
    }).toThrow();
  });
});
