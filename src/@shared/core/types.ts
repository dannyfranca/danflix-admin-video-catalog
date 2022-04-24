export type NotificationMessages = string[];

export type SingleNotification<T extends string = string> = {
  property: T;
  messages: NotificationMessages;
};

export type ManyNotificationsArray<T extends string = string> =
  SingleNotification<T>[];

export type ManyNotificationsObject<T extends string = string> = {
  [P in T]?: NotificationMessages;
};

export type ManyNotifications<T extends string = string> =
  | ManyNotificationsArray<T>
  | ManyNotificationsObject<T>;
