import ValidationError from './validation.error';

export default class InvalidNameError extends ValidationError {
  constructor(message?: string) {
    super(message ?? 'Name is invalid');
  }
}
