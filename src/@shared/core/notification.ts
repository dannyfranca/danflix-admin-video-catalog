export class NotificationMap<T extends string = string> {
  private map: Map<T, string[]> = new Map();

  get size() {
    return this.map.size;
  }

  get(field: T) {
    return this.map.get(field);
  }

  entries(): [string, string[]][] {
    return Array.from(this.map.entries());
  }

  add(field: T, ...message: string[]) {
    if (!this.map.has(field)) this.map.set(field, []);

    this.map.get(field)?.push(...message);
  }

  clear() {
    this.map.clear();
  }

  toPlain() {
    return Object.fromEntries(this.map) as Record<T, string[]>;
  }

  toString = () => {
    return this.entries()
      .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
      .join('\n');
  };
}
