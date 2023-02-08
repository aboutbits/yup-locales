import { LocaleObject } from 'yup/es/locale'
import { array, boolean, date, mixed, number, object, string } from './default'

export const locales: LocaleObject = {
  mixed: {
    default: {
      descriptor: mixed.default,
    },
    required: {
      descriptor: mixed.required,
    },
    defined: {
      descriptor: mixed.defined,
    },
    oneOf: ({ values }) => ({
      descriptor: mixed.oneOf,
      values: { values },
    }),
    notOneOf: ({ values }) => ({
      descriptor: mixed.notOneOf,
      values: { values },
    }),
    notType: {
      descriptor: mixed.notType,
    },
  },
  string: {
    length: ({ length }) => ({
      descriptor: string.length,
      values: { length },
    }),
    min: ({ min }) => ({
      descriptor: string.min,
      values: { min },
    }),
    max: ({ max }) => ({
      descriptor: string.max,
      values: { max },
    }),
    matches: ({ regex }) => ({
      descriptor: string.matches,
      values: { regex },
    }),
    email: {
      descriptor: string.email,
    },
    url: {
      descriptor: string.url,
    },
    uuid: {
      descriptor: string.uuid,
    },
    trim: {
      descriptor: string.trim,
    },
    lowercase: {
      descriptor: string.lowercase,
    },
    uppercase: {
      descriptor: string.uppercase,
    },
  },
  number: {
    min: ({ min }) => ({
      descriptor: number.min,
      values: { min },
    }),
    max: ({ max }) => ({
      descriptor: number.max,
      values: { max },
    }),
    lessThan: ({ less }) => ({
      descriptor: number.lessThan,
      values: { less },
    }),
    moreThan: ({ more }) => ({
      descriptor: number.moreThan,
      values: { more },
    }),
    positive: {
      descriptor: number.positive,
    },
    negative: {
      descriptor: number.negative,
    },
    integer: {
      descriptor: number.integer,
    },
  },
  date: {
    min: ({ min }) => ({
      descriptor: date.min,
      values: { min },
    }),
    max: ({ max }) => ({
      descriptor: date.max,
      values: { max },
    }),
  },
  boolean: {
    isValue: ({ value }) => ({
      descriptor: boolean.isValue,
      values: { value },
    }),
  },
  object: {
    noUnknown: {
      descriptor: object.noUnknown,
    },
  },
  array: {
    min: ({ min }) => ({
      descriptor: array.min,
      values: { min },
    }),
    max: ({ max }) => ({
      descriptor: array.max,
      values: { max },
    }),
    length: ({ length }) => ({
      descriptor: array.length,
      values: { length },
    }),
  },
}
