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
  default: 'Ungültiger Wert',
  required: 'Pflichtfeld',
  defined: 'Pflichtfeld',
  oneOf: 'Gültige Werte: ${values}',
  notOneOf: 'Ungültige Werte: ${values}',
  notType: 'Ungültiger Typ',
}

export const string: Required<StringLocale> = {
  length: 'Genau ${length} Zeichen',
  min: 'Min ${min} Zeichen',
  max: 'Max ${max} Zeichen',
  matches: 'Format ungültig: "${regex}"',
  email: 'Ungültige E-Mail',
  url: 'Ungültige URL',
  uuid: 'Ungültige UUID',
  trim: 'Keine Leerzeichen am Anfang und Ende',
  lowercase: 'Nur Kleinschreibung',
  uppercase: 'Nur Großschreibung',
}

export const number: Required<NumberLocale> = {
  min: 'Min: ${min}',
  max: 'Max: ${max}',
  lessThan: 'Kleiner als ${less}',
  moreThan: 'Größer als ${more}',
  positive: 'Nur positive Zahlen',
  negative: 'Nur negative Zahlen',
  integer: 'Nur Zahlen erlaubt',
}

export const date: Required<DateLocale> = {
  min: 'Datum nach ${min}',
  max: 'Datum vor ${max}',
}

export const boolean: BooleanLocale = {
  isValue: 'Muss ${value} sein',
}

export const object: Required<ObjectLocale> = {
  noUnknown: 'Unbekannter Wert',
}

export const array: Required<ArrayLocale> = {
  min: 'Mindestens ${min} Einträge',
  max: 'Maximal ${max} Einträge',
  length: 'Genau ${length} Einträge',
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
