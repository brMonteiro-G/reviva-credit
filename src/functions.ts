export const formactPrice = (preco: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);

export const formatDate = (date: string) => {
  const dateTemp = new Date(date);
  return new Intl.DateTimeFormat("pt-BR").format(dateTemp);
};
