import { Newable } from '../utils/types';
import { ManyNotificationsArray, ManyNotificationsObject } from './types';
import { Validable } from './validable';

export interface StubValueObjectShape {
  title: string;
}

export class StubValueObject extends Validable<StubValueObjectShape> {
  title: string;

  constructor(props: StubValueObjectShape) {
    super();
    this.title = props.title;
  }

  validator() {
    if (this.title.length < 3)
      this.addNotificationMessage(
        'title',
        'title must have at least 3 characters'
      );
  }
}

export interface StubShape {
  name: string;
  quantity: number;
  validable: StubValueObject;
}

export abstract class StubBaseValidable extends Validable<StubShape> {
  name: string;
  quantity: number;
  validable: StubValueObject;

  constructor(props: StubShape) {
    super();
    this.name = props.name;
    this.quantity = props.quantity;
    this.validable = props.validable;
    this.addChildValidables('validable');
  }
}

const nameError = 'name must have at least 3 characters';
const quantityError = 'quantity must be greater than 0';

export class StubValidable extends StubBaseValidable {
  validator() {
    if (this.name.length < 3) this.addNotificationMessage('name', nameError);
    if (this.quantity < 0)
      this.addNotificationMessage('quantity', quantityError);
  }
}

export class StubValidableByNotificationsObject extends StubBaseValidable {
  validator(): ManyNotificationsObject<keyof StubShape> {
    const result: ManyNotificationsObject<keyof StubShape> = {};

    if (this.name.length < 3) result.name = [nameError];
    if (this.quantity < 0) result.quantity = [quantityError];

    return result;
  }
}

export class StubValidableByNotificationsArray extends StubBaseValidable {
  validator(): ManyNotificationsArray<keyof StubShape> {
    const result: ManyNotificationsArray<keyof StubShape> = [];

    if (this.name.length < 3)
      result.push({
        property: 'name',
        messages: [nameError],
      });
    if (this.quantity < 0)
      result.push({
        property: 'quantity',
        messages: [quantityError],
      });

    return result;
  }
}

export const makeStubValidable =
  (cls: Newable<StubBaseValidable>) =>
  (props?: Partial<StubShape>, voProps?: Partial<StubValueObjectShape>) =>
    new cls({
      name: 'Stub',
      quantity: 10,
      ...props,
      validable: new StubValueObject({ title: 'Title', ...voProps }),
    });
