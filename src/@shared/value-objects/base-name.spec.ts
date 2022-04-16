import BaseName from './base-name';
import InvalidNameError from '../errors/invalid-name.error';

class StubName extends BaseName {
  readonly minLength = 3;
  readonly maxLength = 5;

  constructor(name: string) {
    super(name);
    this.validate();
  }
}

describe('Name Unit Tests', () => {
  const validateSpy = jest.spyOn(StubName.prototype as any, 'validate');

  beforeEach(() => validateSpy.mockClear());

  it('should accept a valid name passed in constructor', () => {
    const validName = 'John';
    const name = new StubName(validName);

    expect(name.value).toBe(validName);
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should throw error when name length exceeds the max length', () => {
    const invalidName = 'John Doe';

    expect(() => new StubName(invalidName)).toThrow(InvalidNameError);
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should throw error when name length is lesser than min length', () => {
    const invalidName = 'Bo';

    expect(() => new StubName(invalidName)).toThrow(InvalidNameError);
    expect(validateSpy).toHaveBeenCalled();
  });
});
