import BaseName from './base-name';
import { executeNameTest } from './base-name.test-factory';

class StubName extends BaseName {
  readonly minLength = 3;
  readonly maxLength = 5;

  constructor(name: string) {
    super(name);
    this.validate();
  }
}

executeNameTest({
  class: StubName,
  valid: 'John',
  invalidMin: 'Jo',
  invalidMax: 'John Doe',
});
