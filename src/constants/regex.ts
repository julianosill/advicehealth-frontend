export const NON_NUMBER_REGEX = /\D/g
export const NUMBER_REGEX = /[\d]/g

export const SPECIAL_CHARS_REGEX = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/
export const NAME_REGEX = /\w+(?:\s+\w+)+/
export const DATE_REGEX = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/
export const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
export const PHONE_REGEX = /^\(\d{2}\) \d{4,5}-\d{4}$/
