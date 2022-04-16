import BaseName from './base-name';
import InvalidNameError from '../errors/invalid-name.error';
import { Newable } from '../utils/types';

export const executeNameTest = ({
  class: cls,
  valid,
  invalidMin,
  invalidMax,
}: {
  class: Newable<BaseName>;
  valid: string;
  invalidMin: string;
  invalidMax: string;
}) => {
  describe('Name Unit Tests', () => {
    const validateSpy = jest.spyOn(cls.prototype as any, 'validate');

    beforeEach(() => validateSpy.mockClear());

    it('should accept a valid name passed in constructor', () => {
      const name = new cls(valid);

      expect(name.value).toBe(valid);
      expect(validateSpy).toHaveBeenCalled();
    });

    it('should throw error when name length exceeds the max length', () => {
      expect(() => new cls(invalidMax)).toThrow(InvalidNameError);
      expect(validateSpy).toHaveBeenCalled();
    });

    it('should throw error when name length is lesser than min length', () => {
      expect(() => new cls(invalidMin)).toThrow(InvalidNameError);
      expect(validateSpy).toHaveBeenCalled();
    });
  });
};
