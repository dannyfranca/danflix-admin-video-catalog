import { toTimestampablePlain } from "@/@shared/entities/timestampable-entity.utils";
import { randomDescription, randomName } from "@/@shared/utils/mock";
import UniqueEntityId from "@/@shared/value-objects/unique-entity-id";
import { Category, PlainCategory } from "./category";
import { makeRandomCategory } from "./utils";

describe("Category Tests", () => {
  test("category constructor and plain object", () => {
    let id: UniqueEntityId;
    let category: Category;
    let created_at: Date;
    let deleted_at: Date;

    category = new Category({ name: "Movie" });
    expect(category.plain).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
      ...toTimestampablePlain(category),
    } as PlainCategory);

    created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "Some description",
      is_active: false,
      created_at,
    });
    expect(category.plain).toStrictEqual({
      name: "Movie",
      description: "Some description",
      is_active: false,
      ...toTimestampablePlain(category),
    });

    category = new Category({ name: "Movie", description: "Some description" });
    expect(category.plain).toStrictEqual({
      name: "Movie",
      description: "Some description",
      is_active: true,
      ...toTimestampablePlain(category),
    });

    id = new UniqueEntityId();
    created_at = new Date();
    deleted_at = new Date();
    category = new Category({
      name: "Another Movie",
      id,
      created_at,
      deleted_at,
    });
    expect(category.plain).toMatchObject({
      name: "Another Movie",
    });
  });

  test("getters and update", () => {
    const category = new Category({ name: "Category" });
    const newName = randomName();
    const newDesc = randomDescription();

    expect(category.name).toBe("Category");
    category.changeName(newName);
    expect(category.name).toBe(newName);

    expect(category.description).toBeNull();
    category.changeDescription(newDesc);
    expect(category.description).toBe(newDesc);

    expect(category.is_active).toBe(true);
    category.deactivate();
    expect(category.is_active).toBe(false);

    category.activate();
    expect(category.is_active).toBe(true);

    expect(category.plain).toStrictEqual({
      name: newName,
      description: newDesc,
      is_active: true,
      ...toTimestampablePlain(category),
    } as PlainCategory);
  });

  it("should return category entity", () => {
    expect(makeRandomCategory()).toBeInstanceOf(Category);
  });
});
