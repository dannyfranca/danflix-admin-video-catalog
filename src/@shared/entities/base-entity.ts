import { SetOptional } from "type-fest";

import UniqueEntityId from "../value-objects/unique-entity-id";

export interface BaseEntityProperties {
  id: UniqueEntityId;
  created_at: Date;
  deleted_at: Date | null;
}

export type BaseEntityPropertiesInput = SetOptional<
  BaseEntityProperties,
  "id" | "created_at" | "deleted_at"
>;

export interface PlainBaseEntity {
  id: string;
  created_at: Date;
  deleted_at: Date | null;
}

export class BaseEntity {
  public readonly id: UniqueEntityId;
  protected _created_at: Date;
  protected _deleted_at: Date | null;

  constructor(props?: BaseEntityPropertiesInput) {
    this.id = props?.id ?? new UniqueEntityId();
    this._created_at = props?.created_at ?? new Date();
    this._deleted_at = props?.deleted_at ?? null;
  }

  get plain(): PlainBaseEntity {
    return {
      id: this.id.value,
      created_at: this.created_at,
      deleted_at: this.deleted_at,
    };
  }

  get created_at() {
    return this._created_at;
  }

  get deleted_at() {
    return this._deleted_at;
  }
}
