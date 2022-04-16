import ValidationError from './validation.error';

export default class InvalidUuidError extends ValidationError {
  constructor(message?: string) {
    super(message ?? 'ID must be a valid UUID');
    this.name = 'InvalidUuidError';
  }
}
