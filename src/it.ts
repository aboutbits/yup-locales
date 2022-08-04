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
  default: 'Valore non valido',
  required: 'Campo obbligatorio',
  defined: 'Campo obbligatorio',
  oneOf: 'Valori validi: ${values}',
  notOneOf: 'Valori non validi: ${values}',
  notType: 'Tipo non valido',
}

export const string: Required<StringLocale> = {
  length: 'Caratteri esatti: ${length}',
  min: 'Min ${min} caratteri',
  max: 'Max ${max} caratteri',
  matches: 'Formato non valido: "${regex}"',
  email: 'Email non valida',
  url: 'URL non valido',
  uuid: 'UUID non valido',
  trim: "Senza spazi all'inizio e alla fine",
  lowercase: 'Solo minuscolo',
  uppercase: 'Solo maiuscole',
}

export const number: Required<NumberLocale> = {
  min: 'Min: ${min}',
  max: 'Max: ${max}',
  lessThan: 'Meno di ${less}',
  moreThan: 'Più di ${more}',
  positive: 'Solo numeri positivi',
  negative: 'Solo numeri negativi',
  integer: 'Solo numeri',
}

export const date: Required<DateLocale> = {
  min: 'Data dopo ${min}',
  max: 'Data precedente a ${max}',
}

export const boolean: BooleanLocale = {
  isValue: 'Deve essere ${value}',
}

export const object: Required<ObjectLocale> = {
  noUnknown: 'Valore sconosciuto',
}

export const array: Required<ArrayLocale> = {
  min: 'Inserimenti minimi ${min}',
  max: 'Massimo di voci ${max}',
  length: 'Esattamente ${length} voci',
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
