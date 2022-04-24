import ValidationError from '../errors/validation.error';
import {
  StubShape,
  StubValidable,
  StubValueObject,
  StubValueObjectShape,
} from './validable-test-utils';

const makeStubValidable = (
  props?: Partial<StubShape>,
  voProps?: Partial<StubValueObjectShape>
) =>
  new StubValidable({
    name: 'Stub',
    quantity: 10,
    ...props,
    validable: new StubValueObject({ title: 'Title', ...voProps }),
  });

describe('Validable Unit Tests', () => {
  let stubValidable: StubValidable;

  it('should be valid when all properties are valid', () => {
    stubValidable = makeStubValidable();
    expect(stubValidable.validate()).toBe(true);
    expect(() => stubValidable.validateOrThrow()).not.toThrow();
    expect(stubValidable.getNotificationMessages()).toBe('');
  });

  it('should be invalid on name property', () => {
    stubValidable = makeStubValidable({ name: 'a' });
    expect(stubValidable.validate()).toBe(false);
    expect(() => stubValidable.validateOrThrow()).toThrow(ValidationError);
    expect(stubValidable.getNotificationMessages()).toBe(
      'name: name must have at least 3 characters'
    );
  });

  it('should be invalid on very properties', () => {
    stubValidable = makeStubValidable(
      { name: 'a', quantity: -1 },
      { title: 'a' }
    );
    expect(stubValidable.validate()).toBe(false);
    expect(() => stubValidable.validateOrThrow()).toThrow(ValidationError);
    expect(stubValidable.getNotificationMessages()).toBe(
      'name: name must have at least 3 characters\nquantity: quantity must be greater than 0\nvalidable.title: title must have at least 3 characters'
    );
  });

  it('should become valid', () => {
    stubValidable = makeStubValidable(
      { name: 'a', quantity: -1 },
      { title: 'a' }
    );
    expect(stubValidable.validate()).toBe(false);

    stubValidable.name = 'Name';
    stubValidable.quantity = 1;
    stubValidable.validable.title = 'Title';
    expect(stubValidable.validate()).toBe(true);
    expect(() => stubValidable.validateOrThrow()).not.toThrow();
    expect(stubValidable.getNotificationMessages()).toBe('');
  });
});
