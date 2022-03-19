import { SetOptional } from "type-fest";

import UniqueEntityId from "../value-objects/unique-entity-id";

export interface EntityProps {
  id: UniqueEntityId;
}

export type EntityInput = SetOptional<EntityProps, "id">;

export interface PlainEntity {
  id: string;
}

export abstract class Entity {
  public readonly id: UniqueEntityId;

  constructor(props?: EntityInput) {
    this.id = props?.id ?? new UniqueEntityId();
  }

  get plain(): PlainEntity {
    return {
      id: this.id.value,
    };
  }
}
