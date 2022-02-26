import { generateUUIDV4, isUUID } from "@/utils/uuid"
import { HasUUID } from "./has-uuid"

describe('Has UUID Tests', () => {
  test('id field', () => {
    let hasUUID: HasUUID
    let validUUID = generateUUIDV4()
    let noUUID = 'abc'

    hasUUID = new HasUUID()
    expect(isUUID(hasUUID.id)).toBe(true)

    hasUUID = new HasUUID(validUUID)
    expect(isUUID(hasUUID.id)).toBe(true)
    expect(hasUUID.id).toBe(validUUID)

    expect(() => new HasUUID(noUUID)).toThrowError()
  })
})
