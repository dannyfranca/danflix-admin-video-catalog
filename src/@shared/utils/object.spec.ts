import { deepFreeze } from "./objects";

describe("Object utils unity tests", () => {
  it("should ignore null and undefined on deep freeze", () => {
    expect(() => deepFreeze(undefined as any)).not.toThrowError();
    expect(() => deepFreeze(null as any)).not.toThrowError();
  });

  it("should throw error on deep frozen object properties mutation", () => {
    const obj: { [k: string]: any } = {
      prop: 1,
      deep: {
        prop: 2,
      },
    };

    deepFreeze(obj);

    expect(() => (obj.prop = 2)).toThrowError();
    expect(() => (obj.deep.prop = 3)).toThrowError();
  });
});
