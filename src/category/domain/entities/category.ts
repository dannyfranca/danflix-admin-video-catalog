import {SetOptional} from 'type-fest'

import { HasUUID } from '@/entities/has-uuid'

export type CategoryProperties = {
  name: string
  description: string | null
  is_active: boolean
  created_at: Date
}

export type CategoryPropertiesInput = SetOptional<CategoryProperties, 'description' | 'is_active' | 'created_at'>

export class Category extends HasUUID {
  private _name: string
  private _description: string | null
  private _is_active: boolean
  private _created_at: Date

  constructor(props: CategoryPropertiesInput, id?: string) {
    super(id)
    this._name = props.name
    this._description = props.description ?? null
    this._is_active = props.is_active ?? true
    this._created_at = props.created_at ?? new Date()
  }
  
  get props (): CategoryProperties {
    return {
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at
    }
  }

  get name () {
    return this._name
  }

  get description () {
    return this._description
  }

  get is_active () {
    return this._is_active
  }

  get created_at () {
    return this._created_at
  }
}
