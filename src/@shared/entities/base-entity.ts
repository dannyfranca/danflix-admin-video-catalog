import { SetOptional } from "type-fest";

import UniqueEntityId from "../value-objects/unique-entity-id";

export interface BaseEntityEntityProperties {
  id: UniqueEntityId;
}

export type BaseEntityPropertiesInput = SetOptional<
  BaseEntityEntityProperties,
  "id"
>;

export interface PlainBaseEntity {
  id: string;
}

export class BaseEntity {
  public readonly id: UniqueEntityId;

  constructor(props?: BaseEntityPropertiesInput) {
    this.id = props?.id ?? new UniqueEntityId();
  }

  get plain(): PlainBaseEntity {
    return {
      id: this.id.value,
    };
  }
}
