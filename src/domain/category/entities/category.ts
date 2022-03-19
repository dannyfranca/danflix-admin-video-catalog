import { SetOptional } from "type-fest";
import {
  TimestampableEntityProps,
  TimestampableInput,
  PlainTimestampable,
  TimestampableEntity,
} from "@/@shared/entities/timestampable-entity";

export interface CategoryPropsOnly {
  name: string;
  description: string | null;
  is_active: boolean;
}

export interface CategoryProps
  extends TimestampableEntityProps,
    CategoryPropsOnly {}

export interface CategoryInput
  extends TimestampableInput,
    SetOptional<CategoryPropsOnly, "description" | "is_active"> {}

export interface PlainCategory extends PlainTimestampable {
  name: string;
  description: string | null;
  is_active: boolean;
}

export class Category extends TimestampableEntity {
  private _name: string;
  private _description: string | null;
  private _is_active: boolean;

  constructor(props: CategoryInput) {
    super(props);
    this._name = props.name;
    this._description = props.description ?? null;
    this._is_active = props.is_active ?? true;
  }

  get plain(): PlainCategory {
    return {
      ...super.plain,
      name: this._name,
      description: this._description,
      is_active: this._is_active,
    };
  }
}
