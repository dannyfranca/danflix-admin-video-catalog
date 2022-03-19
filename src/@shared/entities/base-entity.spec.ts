import UniqueEntityId from "../value-objects/unique-entity-id";
import { BaseEntity, PlainBaseEntity } from "./base-entity";

const strName = "Entity";

describe("Entity Tests", () => {
  test("entity constructor", () => {
    let entity = new BaseEntity({});
    let created_at: Date;
    const deleted_at = new Date();

    expect(entity.created_at).toBeInstanceOf(Date);
    expect(entity.deleted_at).toBeNull();

    created_at = new Date();
    entity = new BaseEntity({
      created_at,
    });
    expect(entity.plain).toMatchObject({
      created_at,
      deleted_at: null,
    } as PlainBaseEntity);

    created_at = new Date();
    entity = new BaseEntity({
      created_at,
      deleted_at,
    });
    expect(entity.plain).toMatchObject({
      created_at,
      deleted_at,
    });
  });

  test("entity getters", () => {
    let entity: BaseEntity;
    const created_at = new Date();
    const deleted_at = new Date();

    entity = new BaseEntity({ deleted_at });
    expect(entity.created_at).toBeInstanceOf(Date);
    expect(entity.deleted_at).toBeInstanceOf(Date);

    entity = new BaseEntity({ created_at });
    expect(entity.created_at).toBe(created_at);
    expect(entity.deleted_at).toBeNull();
  });

  test("id field", () => {
    let entity: BaseEntity;
    const uniqueId = new UniqueEntityId();

    entity = new BaseEntity({});
    expect(entity.id).toBeInstanceOf(UniqueEntityId);

    entity = new BaseEntity({ id: uniqueId });
    expect(entity.id).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).toBe(uniqueId);
    expect(entity.id.value).toBe(uniqueId.value);
  });
});
