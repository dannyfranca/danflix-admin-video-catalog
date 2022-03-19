import UniqueEntityId from "../value-objects/unique-entity-id";
import {
  TimestampableEntity,
  PlainTimestampable,
} from "./timestampable-entity";
import { toTimestampablePlain } from "./timestampable-entity.utils";

describe("Entity Tests", () => {
  test("entity plain object", () => {
    let entity = new TimestampableEntity();
    let id: UniqueEntityId;
    let created_at: Date;
    let deleted_at: Date;

    created_at = new Date();
    entity = new TimestampableEntity({
      created_at,
    });
    expect(entity.plain).toStrictEqual({
      id: entity.id.value,
      created_at,
      deleted_at: null,
    } as PlainTimestampable);

    id = new UniqueEntityId();
    created_at = new Date();
    deleted_at = new Date();
    entity = new TimestampableEntity({
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
    let entity: TimestampableEntity;
    const created_at = new Date();
    const deleted_at = new Date();

    entity = new TimestampableEntity({ deleted_at });
    expect(entity.id).toBeInstanceOf(UniqueEntityId);
    expect(entity.created_at).toBeInstanceOf(Date);
    expect(entity.deleted_at).toBeInstanceOf(Date);

    entity = new TimestampableEntity({ created_at });
    expect(entity.created_at).toBe(created_at);
    expect(entity.deleted_at).toBeNull();
  });

  it("should extract plain object", () => {
    const entity = new TimestampableEntity();

    expect(toTimestampablePlain(entity)).toStrictEqual(entity.plain);
  });
});
