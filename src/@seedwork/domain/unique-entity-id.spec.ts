import InvalidUuidError from "../errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id"

describe('Unique Id Tests', () => {
  test('id generation', () => {
    let uniqueId: UniqueEntityId
    let validUUID = UniqueEntityId.generateUuid()
    let noUUID = 'abc'

    uniqueId = new UniqueEntityId()
    expect(UniqueEntityId.isUuid(uniqueId.id)).toBe(true)

    uniqueId = new UniqueEntityId(validUUID)
    expect(UniqueEntityId.isUuid(uniqueId.id)).toBe(true)
    expect(uniqueId.id).toBe(validUUID)

    expect(() => new UniqueEntityId(noUUID)).toThrowError(InvalidUuidError)
  })
})
