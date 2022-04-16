import { SetOptional } from 'type-fest';
import {
  BaseEntityProperties,
  BaseEntityPropertiesInput,
  PlainBaseEntity,
  BaseEntity,
} from '@/@shared/entities/base-entity';
import { Name } from './name.vo';

export interface CategoryPropertiesOnly {
  name: Name;
  description: string | null;
  is_active: boolean;
}

export interface CategoryProperties
  extends BaseEntityProperties,
    CategoryPropertiesOnly {}

export interface CategoryPropertiesInput
  extends BaseEntityPropertiesInput,
    SetOptional<CategoryPropertiesOnly, 'description' | 'is_active'> {}

export interface PlainCategory extends PlainBaseEntity {
  name: string;
  description: string | null;
  is_active: boolean;
}

export class Category extends BaseEntity {
  private _name: Name;
  private _description: string | null;
  private _is_active: boolean;

  constructor(props: CategoryPropertiesInput) {
    super(props);
    this._name = props.name;
    this._description = props.description ?? null;
    this._is_active = props.is_active ?? true;
  }

  get plain(): PlainCategory {
    return {
      ...super.plain,
      name: this._name.value,
      description: this._description,
      is_active: this._is_active,
    };
  }
}
