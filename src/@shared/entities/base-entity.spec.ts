import UniqueEntityId from "../value-objects/unique-entity-id";
import { BaseEntity, PlainBaseEntity } from "./base-entity";

describe("Entity Tests", () => {
  test("entity plain object", () => {
    let entity = new BaseEntity({});
    let id: UniqueEntityId;
    let created_at: Date;
    let deleted_at: Date;

    created_at = new Date();
    entity = new BaseEntity({
      created_at,
    });
    expect(entity.plain).toStrictEqual({
      id: entity.id.value,
      created_at,
      deleted_at: null,
    } as PlainBaseEntity);

    id = new UniqueEntityId();
    created_at = new Date();
    deleted_at = new Date();
    entity = new BaseEntity({
      id,
      created_at,
      deleted_at,
    });
    expect(entity.plain).toStrictEqual({
      id: id.value,
      created_at,
      deleted_at,
    });
  });

  test("entity getters", () => {
    let entity: BaseEntity;
    const created_at = new Date();
    const deleted_at = new Date();

    entity = new BaseEntity({ deleted_at });
    expect(entity.id).toBeInstanceOf(UniqueEntityId);
    expect(entity.created_at).toBeInstanceOf(Date);
    expect(entity.deleted_at).toBeInstanceOf(Date);

    entity = new BaseEntity({ created_at });
    expect(entity.created_at).toBe(created_at);
    expect(entity.deleted_at).toBeNull();
  });
});
