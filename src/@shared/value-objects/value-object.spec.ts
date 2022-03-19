import ValueObject from "./value-object";

class StubValueObject extends ValueObject {}

describe("Value object unit tests", () => {
  it("should set value", () => {
    let vo: StubValueObject;

    vo = new StubValueObject("val");
    expect(vo.value).toBe("val");

    vo = new StubValueObject({ prop: "val" });
    expect(vo.value).toStrictEqual({ prop: "val" });
  });

  it("should convert to string", () => {
    let vo: StubValueObject;
    const date = new Date();
    const arrange = [
      { received: "", expected: "" },
      { received: "val", expected: "val" },
      { received: undefined, expected: "undefined" },
      { received: null, expected: "null" },
      { received: true, expected: "true" },
      { received: false, expected: "false" },
      { received: date, expected: date.toString() },
      { received: { prop: 1 }, expected: JSON.stringify({ prop: 1 }) },
    ];

    for (const { received, expected } of arrange) {
      vo = new StubValueObject(received);
      expect(vo + "").toBe(expected);
    }
  });

  it("should be immutable", () => {
    const vo = new StubValueObject({ prop: 1, deep: { prop: "2" } });
    expect(() => (vo.value.prop = 2)).toThrowError();
    expect(() => (vo.value.deep.prop = 1)).toThrowError();
  });
});
