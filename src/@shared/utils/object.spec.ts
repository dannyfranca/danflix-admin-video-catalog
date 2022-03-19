import { deepFreeze } from "./objects";

describe("Object utils unity tests", () => {
  it("should deep freeze object", () => {
    const obj = {
      prop: 1,
      obj: {
        prop: 2,
      },
    };

    deepFreeze(obj);

    expect(() => (obj.prop = 2)).toThrowError();
    expect(() => (obj.obj.prop = 3)).toThrowError();
  });
});
