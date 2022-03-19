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
});
