import { entityToBasePlain } from '@/@shared/entities/base-entity.utils';
import UniqueEntityId from '@/@shared/value-objects/unique-entity-id';
import { Category, PlainCategory } from './category';
import { Name } from './name.vo';
import {
  makeRandomCategory,
  makeRandomCategoryName as makeRandomName,
} from './utils';

describe('Category Tests', () => {
  test('category constructor and plain object', () => {
    let id: UniqueEntityId;
    let category: Category;
    let created_at: Date;
    let deleted_at: Date;
    let name = makeRandomName();

    category = new Category({ name });
    expect(category.plain).toStrictEqual({
      name: name.value,
      description: null,
      is_active: true,
      ...entityToBasePlain(category),
    } as PlainCategory);

    created_at = new Date();
    category = new Category({
      name,
      description: 'Some description',
      is_active: false,
      created_at,
    });
    expect(category.plain).toStrictEqual({
      name: name.value,
      description: 'Some description',
      is_active: false,
      ...entityToBasePlain(category),
    });

    category = new Category({ name, description: 'Some description' });
    expect(category.plain).toStrictEqual({
      name: name.value,
      description: 'Some description',
      is_active: true,
      ...entityToBasePlain(category),
    });

    id = new UniqueEntityId();
    created_at = new Date();
    deleted_at = new Date();
    name = makeRandomName();
    category = new Category({
      name,
      id,
      created_at,
      deleted_at,
    });
    expect(category.plain).toMatchObject({
      name: name.value,
    });
  });

  it('should return category entity', () => {
    expect(makeRandomCategory()).toBeInstanceOf(Category);
  });

  it('should return name value object', () => {
    expect(makeRandomName()).toBeInstanceOf(Name);
  });
});
