import {generateUUIDV4, isUUID} from '@/utils/uuid'

export class HasUUID {
  public readonly id: string

  constructor(id?: string) {
    this.id = id ?? generateUUIDV4()
    if (!isUUID(this.id)) throw new Error('given id must be a valid UUID')
  }
}
