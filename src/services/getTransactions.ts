export interface Transactions {
  id: string;
  cardId: string;
  value: number;
  description: string;
  date: string;
}

export async function getTransactions(): Promise<Transactions[]> {
  const list: Transactions[] = [];
  const data = fetch('https://reviva-credit-api.herokuapp.com/transactions')
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      throw new Error(
        'Não foi possível se comunicar com a base de dados, por favor verifique o erro' +
          err
      );
    });
  const aux = await data;
  list.push(...aux);
  
  //colocar em estado 
  return list.slice(0, 10);

}
