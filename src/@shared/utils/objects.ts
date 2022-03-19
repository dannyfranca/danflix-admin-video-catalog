export const deepFreeze = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") return obj;

  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = (obj as any)[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
};
