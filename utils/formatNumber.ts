export function formatNumberIntl(num: number, locale: string = 'ru-RU') {
  return new Intl.NumberFormat(locale).format(num)
}
