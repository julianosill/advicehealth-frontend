interface OptionsProps {
  toDecimals?: boolean
}

export function formatCurrency(
  value: number | string,
  options: OptionsProps = { toDecimals: true },
) {
  const { toDecimals = true } = options
  const filteredNumbers = String(value).replace(/\D/g, '')

  const number = toDecimals
    ? Number(filteredNumbers) / 100
    : Number(filteredNumbers)

  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
