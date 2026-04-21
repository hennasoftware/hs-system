export function formatZipCode(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 8);

  return numbers.replace(/(\d{5})(\d)/, "$1-$2");
}
