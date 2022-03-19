export const deepFreeze = <T extends { [k: string | number | symbol]: any }>(
  obj: T
): T => {
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
};
