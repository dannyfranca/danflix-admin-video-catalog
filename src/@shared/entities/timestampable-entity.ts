import {
  BaseEntity,
  PlainBaseEntity,
  BaseEntityEntityProperties,
  BaseEntityPropertiesInput,
} from "./base-entity";

export interface TimestampablePropertiesOnly {
  created_at: Date;
  deleted_at: Date | null;
}

export interface TimestampableEntityProperties
  extends BaseEntityEntityProperties,
    TimestampablePropertiesOnly {}

export interface TimestampablePropertiesInput
  extends BaseEntityPropertiesInput,
    Partial<TimestampablePropertiesOnly> {}

export interface PlainTimestampable extends PlainBaseEntity {
  created_at: Date;
  deleted_at: Date | null;
}

export class TimestampableEntity extends BaseEntity {
  protected _created_at: Date;
  protected _deleted_at: Date | null;

  constructor(props?: TimestampablePropertiesInput) {
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
