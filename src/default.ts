import { defineMessages } from 'react-intl'
import {
  ArrayLocale,
  BooleanLocale,
  DateLocale,
  LocaleObject,
  MixedLocale,
  NumberLocale,
  ObjectLocale,
  StringLocale,
} from 'yup/es/locale'

export const mixed: Required<MixedLocale> = defineMessages({
  default: {
    id: 'validation.mixed/default',
    defaultMessage: 'Invalid value',
  },
  required: {
    id: 'validation.mixed/required',
    defaultMessage: 'Required',
  },
  defined: {
    id: 'validation.mixed/defined',
    defaultMessage: 'Required',
  },
  oneOf: {
    id: 'validation.mixed/oneOf',
    defaultMessage: 'One of: ${values}',
  },
  notOneOf: {
    id: 'validation.mixed/notOneOf',
    defaultMessage: 'Not one of: ${values}',
  },
  notType: {
    id: 'validation.mixed/notType',
    defaultMessage: 'Invalid type',
  },
})

export const string: Required<StringLocale> = defineMessages({
  length: {
    id: 'validation.string/length',
    defaultMessage: 'Must be exactly ${length} characters',
  },
  min: {
    id: 'validation.string/min',
    defaultMessage: 'Min ${min} characters',
  },
  max: {
    id: 'validation.string/max',
    defaultMessage: 'Max ${max} characters',
  },
  matches: {
    id: 'validation.string/matches',
    defaultMessage: 'Must match: "${regex}"',
  },
  email: {
    id: 'validation.string/email',
    defaultMessage: 'Invalid email',
  },
  url: {
    id: 'validation.string/url',
    defaultMessage: 'Invalid URL',
  },
  uuid: {
    id: 'validation.string/uuid',
    defaultMessage: 'Invalid UUID',
  },
  trim: {
    id: 'validation.string/trim',
    defaultMessage: 'Not trimmed',
  },
  lowercase: {
    id: 'validation.string/lowercase',
    defaultMessage: 'Lowercase only',
  },
  uppercase: {
    id: 'validation.string/uppercase',
    defaultMessage: 'Uppercase only',
  },
})

export const number: Required<NumberLocale> = defineMessages({
  min: {
    id: 'validation.number/min',
    defaultMessage: 'Min: ${min}',
  },
  max: {
    id: 'validation.number/max',
    defaultMessage: 'Max: ${max}',
  },
  lessThan: {
    id: 'validation.number/lessThan',
    defaultMessage: 'Less than ${less}',
  },
  moreThan: {
    id: 'validation.number/moreThan',
    defaultMessage: 'Greater than ${more}',
  },
  positive: {
    id: 'validation.number/positive',
    defaultMessage: 'Positive number',
  },
  negative: {
    id: 'validation.number/negative',
    defaultMessage: 'Negative number',
  },
  integer: {
    id: 'validation.number/integer',
    defaultMessage: 'Numbers only',
  },
})

export const date: Required<DateLocale> = defineMessages({
  min: {
    id: 'validation.date/min',
    defaultMessage: 'Later than ${min}',
  },
  max: {
    id: 'validation.date/max',
    defaultMessage: 'Earlier than ${max}',
  },
})

export const boolean: BooleanLocale = defineMessages({
  isValue: {
    id: 'validation.boolean/isValue',
    defaultMessage: 'Must be ${value}',
  },
})

export const object: Required<ObjectLocale> = defineMessages({
  noUnknown: {
    id: 'validation.object/noUnknown',
    defaultMessage: 'Unknown value',
  },
})

export const array: Required<ArrayLocale> = defineMessages({
  min: {
    id: 'validation.array/min',
    defaultMessage: 'At least ${min} items',
  },
  max: {
    id: 'validation.array/max',

    defaultMessage: 'Not more than ${max} items',
  },
  length: {
    id: 'validation.array/length',
    defaultMessage: 'Exactly ${length} items',
  },
})

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
} as LocaleObject
