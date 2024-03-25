import { LocaleObject } from 'yup'

const localeObject: LocaleObject = {
  mixed: {
    default: 'Ungültiger Wert',
    required: 'Pflichtfeld',
    defined: 'Pflichtfeld',
    oneOf: 'Gültige Werte: ${values}',
    notOneOf: 'Ungültige Werte: ${values}',
    notType: 'Ungültiger Typ',
  },
  string: {
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
  },
  number: {
    min: 'Min: ${min}',
    max: 'Max: ${max}',
    lessThan: 'Kleiner als ${less}',
    moreThan: 'Größer als ${more}',
    positive: 'Nur positive Zahlen',
    negative: 'Nur negative Zahlen',
    integer: 'Nur Zahlen erlaubt',
  },
  date: {
    min: 'Datum nach ${min}',
    max: 'Datum vor ${max}',
  },
  object: {
    noUnknown: 'Unbekannter Wert',
  },
  array: {
    min: 'Mindestens ${min} Einträge',
    max: 'Maximal ${max} Einträge',
    length: 'Genau ${length} Einträge',
  },
  boolean: {
    isValue: 'Muss ${value} sein',
  },
}

export default localeObject
