import { NotificationMap } from './notification';

describe('Notification Unit Tests', () => {
  let notification: NotificationMap<'field' | 'field2'>;

  beforeEach(() => {
    notification = new NotificationMap();
  });
  test('should add and clear messages', () => {
    expect(notification.size).toBe(0);
    notification.add('field', 'message');
    expect(notification.size).toBe(1);
    expect(notification.get('field')).toStrictEqual(['message']);
    notification.add('field2', 'message', 'message2');
    expect(notification.size).toBe(2);
    expect(notification.get('field2')).toStrictEqual(['message', 'message2']);
    notification.add('field2', 'message3');
    expect(notification.size).toBe(2);
    expect(notification.get('field2')).toStrictEqual([
      'message',
      'message2',
      'message3',
    ]);
    expect(notification.entries()).toStrictEqual([
      ['field', ['message']],
      ['field2', ['message', 'message2', 'message3']],
    ]);
    expect(notification.toPlain()).toStrictEqual({
      field: ['message'],
      field2: ['message', 'message2', 'message3'],
    });
    expect(notification.toString()).toBe(
      'field: message\nfield2: message, message2, message3'
    );
    notification.clear();
    expect(notification.size).toBe(0);
    expect(notification.entries()).toStrictEqual([]);
    expect(notification.toPlain()).toStrictEqual({});
    expect(notification.toString()).toStrictEqual('');
  });
});
