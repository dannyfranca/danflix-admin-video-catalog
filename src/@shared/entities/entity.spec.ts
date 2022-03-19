import UniqueEntityId from "../value-objects/unique-entity-id";
import { Entity, PlainEntity } from "./entity";

class StubEntity extends Entity {}

describe("Base entity unit tests", () => {
  test("entity plain object", () => {
    let entity = new StubEntity();
    let id: UniqueEntityId;

    entity = new StubEntity();
    expect(entity.plain).toStrictEqual({
      id: entity.id.value,
    } as PlainEntity);

    id = new UniqueEntityId();
    entity = new StubEntity({
      id,
    });
    expect(entity.plain).toStrictEqual({
      id: id.value,
    });
  });

  test("entity getters", () => {
    let entity: Entity;
    let id: UniqueEntityId;

    entity = new StubEntity();
    expect(entity.id).toBeInstanceOf(UniqueEntityId);

    id = new UniqueEntityId();
    entity = new StubEntity({ id });
    expect(entity.id).toStrictEqual(id);
  });
});
