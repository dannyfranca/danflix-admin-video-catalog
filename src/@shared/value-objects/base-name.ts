import InvalidNameError from '../errors/invalid-name.error';
import ValueObject from './value-object';

export default abstract class BaseName extends ValueObject<string> {
  abstract readonly minLength: number;
  abstract readonly maxLength: number;

  constructor(name: string) {
    super(name);
  }

  protected validate() {
    if (this.value.length < this.minLength) throw new InvalidNameError();
    if (this.value.length > this.maxLength) throw new InvalidNameError();
  }
}
