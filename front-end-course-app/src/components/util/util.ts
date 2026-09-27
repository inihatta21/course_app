export function pressLengthQuote(quote: string, sum: number): string {
  const array: string[] = quote.split(" ");
  const isTruncate: boolean = array.length > sum;
  const newQuote: string = isTruncate
    ? array.slice(0, sum).join(" ") + "...."
    : quote;

  return newQuote;
}

export function convertCurrencyId(sum: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(sum);
}
