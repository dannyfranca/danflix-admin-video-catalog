export type NotificationMessages = string[];

export type SingleNotification<T extends string = string> = {
  property: T;
  messages: NotificationMessages;
};

export type ManyNotificationsArray = SingleNotification[];

export type ManyNotificationsObject<T extends string = string> = Record<
  T,
  NotificationMessages
>;

export type ManyNotifications =
  | ManyNotificationsArray
  | ManyNotificationsObject;
