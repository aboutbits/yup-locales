import { LocaleObject } from 'yup'

const localeObject: LocaleObject = {
  mixed: {
    default: 'Invalid value',
    required: 'Required',
    defined: 'Required',
    oneOf: 'One of: ${values}',
    notOneOf: 'Not one of: ${values}',
    notType: 'Invalid type',
  },
  string: {
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
  },
  number: {
    min: 'Min: ${min}',
    max: 'Max: ${max}',
    lessThan: 'Less than ${less}',
    moreThan: 'Greater than ${more}',
    positive: 'Positive number',
    negative: 'Negative number',
    integer: 'Numbers only',
  },
  date: {
    min: 'Later than ${min}',
    max: 'Earlier than ${max}',
  },
  object: {
    noUnknown: 'Unknown value',
  },
  array: {
    min: 'At least ${min} items',
    max: 'Not more than ${max} items',
    length: 'Exactly ${length} items',
  },
  boolean: {
    isValue: 'Must be ${value}',
  },
}

export default localeObject
