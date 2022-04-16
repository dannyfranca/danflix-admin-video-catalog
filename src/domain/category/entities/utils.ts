import { randomName, randomDescription } from '@/@shared/utils/mock';
import UniqueEntityId from '@/@shared/value-objects/unique-entity-id';
import { Category } from './category';
import { Name } from './name.vo';

export const makeRandomCategory = () =>
  new Category({
    id: new UniqueEntityId(),
    name: makeRandomCategoryName(),
    description: randomDescription(),
  });

export const makeRandomCategoryName = () => new Name(randomName());
