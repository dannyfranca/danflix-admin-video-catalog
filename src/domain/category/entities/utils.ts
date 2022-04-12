import { randomName } from '@/@shared/utils/mock';
import UniqueEntityId from '@/@shared/value-objects/unique-entity-id';
import { randomDescription } from '@/@shared/utils/mock';
import { Category } from './category';

export const makeRandomCategory = () =>
  new Category({
    id: new UniqueEntityId(),
    name: randomName(),
    description: randomDescription(),
  });
