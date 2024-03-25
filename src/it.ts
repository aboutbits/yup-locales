import { LocaleObject } from 'yup'

const localeObject: LocaleObject = {
  mixed: {
    default: 'Valore non valido',
    required: 'Campo obbligatorio',
    defined: 'Campo obbligatorio',
    oneOf: 'Valori validi: ${values}',
    notOneOf: 'Valori non validi: ${values}',
    notType: 'Tipo non valido',
  },
  string: {
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
  },
  number: {
    min: 'Min: ${min}',
    max: 'Max: ${max}',
    lessThan: 'Meno di ${less}',
    moreThan: 'Più di ${more}',
    positive: 'Solo numeri positivi',
    negative: 'Solo numeri negativi',
    integer: 'Solo numeri',
  },
  date: {
    min: 'Data dopo ${min}',
    max: 'Data precedente a ${max}',
  },
  object: {
    noUnknown: 'Valore sconosciuto',
  },
  array: {
    min: 'Inserimenti minimi ${min}',
    max: 'Massimo di voci ${max}',
    length: 'Esattamente ${length} voci',
  },
  boolean: {
    isValue: 'Deve essere ${value}',
  },
}

export default localeObject
