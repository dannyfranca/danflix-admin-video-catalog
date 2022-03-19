import { entityToBasePlain } from "@/@shared/entities/base-entity.utils";
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
      ...entityToBasePlain(category),
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
      ...entityToBasePlain(category),
    });

    category = new Category({ name: "Movie", description: "Some description" });
    expect(category.plain).toStrictEqual({
      name: "Movie",
      description: "Some description",
      is_active: true,
      ...entityToBasePlain(category),
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

  it("should return category entity", () => {
    expect(makeRandomCategory()).toBeInstanceOf(Category);
  });
});
