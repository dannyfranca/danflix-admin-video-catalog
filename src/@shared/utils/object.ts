export const deepFreeze = <T extends { [k: string]: any }>(obj: T): T => {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const value = obj[prop];

    if (
      value !== null &&
      (typeof value === 'object' || typeof value === 'function') &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });

  return obj;
};
