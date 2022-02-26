import {v4, validate} from 'uuid'

export const generateUUIDV4 = () => v4()
export const isUUID = (value: string) => validate(value)
