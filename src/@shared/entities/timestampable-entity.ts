import { Entity, PlainEntity, EntityProps, EntityInput } from "./entity";

export interface TimestampablePropsOnly {
  created_at: Date;
  deleted_at: Date | null;
}

export interface TimestampableEntityProps
  extends EntityProps,
    TimestampablePropsOnly {}

export interface TimestampableInput
  extends EntityInput,
    Partial<TimestampablePropsOnly> {}

export interface PlainTimestampable extends PlainEntity {
  created_at: Date;
  deleted_at: Date | null;
}

export class TimestampableEntity extends Entity {
  protected _created_at: Date;
  protected _deleted_at: Date | null;

  constructor(props?: TimestampableInput) {
    super(props);
    this._created_at = props?.created_at ?? new Date();
    this._deleted_at = props?.deleted_at ?? null;
  }

  get plain(): PlainTimestampable {
    return {
      ...super.plain,
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
