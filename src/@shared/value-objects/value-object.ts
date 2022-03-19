import { deepFreeze } from "../utils/objects";

export default abstract class ValueObject<T = any> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = deepFreeze(value);
  }

  get value(): T {
    return this._value;
  }

  toString = () => {
    if (typeof this.value !== "object" || this.value === null) {
      try {
        (this.value as any).toString();
      } catch {
        return this.value + "";
      }
    }

    const strValue = (this.value as any).toString();
    return strValue === "[object Object]"
      ? JSON.stringify(this.value)
      : strValue;
  };
}
