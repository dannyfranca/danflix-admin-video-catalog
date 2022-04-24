import { ManyNotificationsObject, NotificationMessages } from './types';

export class NotificationMap<T extends string = string> {
  private map: Map<T, NotificationMessages> = new Map();

  get size() {
    return this.map.size;
  }

  get(field: T) {
    return this.map.get(field);
  }

  entries(): [T, NotificationMessages][] {
    return Array.from(this.map.entries());
  }

  add(field: T, ...message: NotificationMessages) {
    if (!this.map.has(field)) this.map.set(field, []);

    this.map.get(field)?.push(...message);
  }

  clear() {
    this.map.clear();
  }

  toPlain() {
    return Object.fromEntries(this.map) as ManyNotificationsObject<T>;
  }

  toString = () => {
    return this.entries()
      .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
      .join('\n');
  };
}
