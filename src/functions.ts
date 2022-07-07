export const formactPrice = (preco: number): string =>
new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(preco);