import { v4 as uuidV4, validate as isUUID } from 'uuid';
import InvalidUuidError from '../errors/invalid-uuid.error';
import ValueObject from './value-object';

export default class UniqueEntityId extends ValueObject<string> {
  constructor(id?: string) {
    super(id ?? uuidV4());
    this.validate();
  }

  private validate() {
    if (!isUUID(this.value)) throw new InvalidUuidError();
  }
}
