interface Props {
  region?: string
  currency?: string
}

export class CurrencyFormatter {
  private formatter: Intl.NumberFormat

  constructor({ region = 'es-MX', currency = 'MXN' }: Props) {
    this.formatter = new Intl.NumberFormat(region, {
      style: 'currency',
      currency,
    })
  }

  formatCurrency(currency: number) {
    return this.formatter.format(currency)
  }
}
