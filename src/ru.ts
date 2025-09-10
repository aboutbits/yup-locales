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
  default: 'Недопустимое значение',
  required: 'Обязательное поле',
  defined: 'Обязательное поле',
  oneOf: 'Одно из: ${values}',
  notOneOf: 'Не одно из: ${values}',
  notType: 'Недопустимый тип',
}

export const string: Required<StringLocale> = {
  length: 'Должно содержать ровно ${length} символов',
  min: 'Минимум ${min} символов',
  max: 'Максимум ${max} символов',
  matches: 'Должно соответствовать: "${regex}"',
  email: 'Недопустимый email',
  url: 'Недопустимый URL',
  uuid: 'Недопустимый UUID',
  trim: 'Не обрезано',
  lowercase: 'Только строчные буквы',
  uppercase: 'Только заглавные буквы',
}

export const number: Required<NumberLocale> = {
  min: 'Минимум: ${min}',
  max: 'Максимум: ${max}',
  lessThan: 'Меньше ${less}',
  moreThan: 'Больше ${more}',
  positive: 'Положительное число',
  negative: 'Отрицательное число',
  integer: 'Только числа',
}

export const date: Required<DateLocale> = {
  min: 'Позже ${min}',
  max: 'Раньше ${max}',
}

export const boolean: BooleanLocale = {
  isValue: 'Должно быть ${value}',
}

export const object: Required<ObjectLocale> = {
  noUnknown: 'Неизвестное значение',
}

export const array: Required<ArrayLocale> = {
  min: 'Минимум ${min} элементов',
  max: 'Не более ${max} элементов',
  length: 'Ровно ${length} элементов',
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
