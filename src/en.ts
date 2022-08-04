import {
  MixedLocale,
  StringLocale,
  NumberLocale,
  DateLocale,
  BooleanLocale,
  ObjectLocale,
  ArrayLocale,
  LocaleObject,
} from 'yup/es/locale'

export const mixed: Required<MixedLocale> = {
  default: 'Invalid value',
  required: 'Required',
  defined: 'Required',
  oneOf: 'One of: ${values}',
  notOneOf: 'Not one of: ${values}',
  notType: 'Invalid type',
}

export const string: Required<StringLocale> = {
  length: 'Must be exactly ${length} characters',
  min: 'Min ${min} characters',
  max: 'Max ${max} characters',
  matches: 'Must match: "${regex}"',
  email: 'Invalid email',
  url: 'Invalid URL',
  uuid: 'Invalid UUID',
  trim: 'Not trimmed',
  lowercase: 'Lowercase only',
  uppercase: 'Uppercase only',
}

export const number: Required<NumberLocale> = {
  min: 'Min: ${min}',
  max: 'Max: ${max}',
  lessThan: 'Less than ${less}',
  moreThan: 'Greater than ${more}',
  positive: 'Positive number',
  negative: 'Negative number',
  integer: 'Numbers only',
}

export const date: Required<DateLocale> = {
  min: 'Later than ${min}',
  max: 'Earlier than ${max}',
}

export const boolean: BooleanLocale = {
  isValue: 'Must be ${value}',
}

export const object: Required<ObjectLocale> = {
  noUnknown: 'Unknown value',
}

export const array: Required<ArrayLocale> = {
  min: 'At least ${min} items',
  max: 'Not more than ${max} items',
  length: 'Exactly ${length} items',
}

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
} as LocaleObject
