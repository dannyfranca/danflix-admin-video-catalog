import BaseName from '@/@shared/value-objects/base-name';

export class Name extends BaseName {
  readonly minLength = 3;
  readonly maxLength = 30;

  constructor(name: string) {
    super(name);
    this.validate();
  }
}
