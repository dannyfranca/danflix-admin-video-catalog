import UniqueEntityId from "../value-objects/unique-entity-id";
import { BaseEntity, PlainBaseEntity } from "./base-entity";

describe("Base entity unit tests", () => {
  test("entity plain object", () => {
    let entity = new BaseEntity();
    let id: UniqueEntityId;

    entity = new BaseEntity();
    expect(entity.plain).toStrictEqual({
      id: entity.id.value,
    } as PlainBaseEntity);

    id = new UniqueEntityId();
    entity = new BaseEntity({
      id,
    });
    expect(entity.plain).toStrictEqual({
      id: id.value,
    });
  });

  test("entity getters", () => {
    let entity: BaseEntity;
    let id: UniqueEntityId;

    entity = new BaseEntity();
    expect(entity.id).toBeInstanceOf(UniqueEntityId);

    id = new UniqueEntityId();
    entity = new BaseEntity({ id });
    expect(entity.id).toStrictEqual(id);
  });
});
