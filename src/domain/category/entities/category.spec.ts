import UniqueEntityId from '@/@shared/value-objects/unique-entity-id'
import {omit} from 'lodash'

import { Category } from "./category"

describe('Category Tests', () => {
  test('constructor of category', () => {
    let category = new Category({ name: 'Movie' })
    let created_at: Date

    let props = omit(category.props, 'created_at')
    expect(props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true
    })
    expect(category.created_at).toBeInstanceOf(Date)

    created_at = new Date()
    category = new Category({
      name: 'Movie',
      description: 'Some description',
      is_active: false,
      created_at
    })
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'Some description',
      is_active: false,
      created_at
    })

    category = new Category({ name: 'Movie', description: 'Some description' })
    expect(category.props).toMatchObject({
      name: 'Movie',
      description: 'Some description'
    })

    category = new Category({ name: 'Movie', is_active: true })
    expect(category.props).toMatchObject({
      name: 'Movie',
      is_active: true
    })

    created_at = new Date()
    category = new Category({ name: 'Another Movie', created_at })
    expect(category.props).toMatchObject({
      name: 'Another Movie',
      created_at
    })
  })

  test('getters of category', () => {
    let category: Category
    let created_at: Date

    category = new Category({ name: 'Movie' })
    expect(category.name).toBe('Movie')
    expect(category.description).toBe(null)
    expect(category.is_active).toBe(true)
    expect(category.created_at).toBeInstanceOf(Date)

    category = new Category({ name: 'Movie', description: 'Some description' })
    expect(category.description).toBe('Some description')

    category = new Category({ name: 'Movie', is_active: false })
    expect(category.description).toBe(null)
    expect(category.is_active).toBe(false)

    created_at = new Date()
    category = new Category({ name: 'Movie', created_at })
    expect(category.created_at).toBe(created_at)
  })

  test('id field', () => {
    let category: Category
    let uniqueId: UniqueEntityId

    category = new Category({name: 'Movie'})
    expect(category.id).toBeInstanceOf(UniqueEntityId)

    uniqueId = new UniqueEntityId()
    category = new Category({name: 'Movie'}, uniqueId)
    expect(category.id).toBeInstanceOf(UniqueEntityId)
    expect(category.id).toBe(uniqueId)
    expect(category.id.id).toBe(uniqueId.id)
  })
})
