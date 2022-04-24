import { ConditionalKeys } from 'type-fest';

import ValidationError from '../errors/validation.error';
import { NotificationMap } from './notification';
import { ManyNotifications } from './types';

export abstract class Validable<
  T extends Record<string, any> = Record<string, any>
> {
  private $notification = new NotificationMap<keyof T>();
  private $children: Set<ConditionalKeys<T, Validable>> = new Set();

  abstract validator(): void | ManyNotifications<keyof T>;

  validate(): boolean {
    this.$notification.clear();
    this.handleValidatorResult();
    this.$children.forEach((prop) => {
      const validable = this.getChildValidable(prop);
      if (!validable || validable.validate()) return;

      validable.$notification.entries().forEach(([field, messages]) => {
        this.$notification.add(`${prop}.${field}`, ...messages);
      });
    });
    if (this.$notification.size > 0) return false;
    return true;
  }

  validateOrThrow() {
    if (!this.validate())
      throw new ValidationError(this.$notification.toString());
  }

  getNotificationMessages(): string {
    return this.$notification.toString();
  }

  private handleValidatorResult() {
    const validatorResult = this.validator();
    if (!validatorResult) return;

    if (Array.isArray(validatorResult)) {
      validatorResult.forEach(({ property, messages }) =>
        this.addNotificationMessage(property, ...messages)
      );
    } else {
      Object.entries(validatorResult).forEach(([property, messages]) =>
        this.addNotificationMessage(property, ...messages!)
      );
    }
  }

  private getChildValidable(
    prop: ConditionalKeys<T, Validable>
  ): Validable | undefined {
    const validable = this[prop as keyof this];
    if (validable instanceof Validable) return validable;
  }

  protected addChildValidables(...props: ConditionalKeys<T, Validable>[]) {
    props.forEach((prop) => this.$children.add(prop));
    return this;
  }

  protected addNotificationMessage(prop: keyof T, ...messages: string[]) {
    this.$notification.add(prop, ...messages);
    return this;
  }
}
