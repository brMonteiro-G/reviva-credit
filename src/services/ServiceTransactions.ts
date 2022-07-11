import { ITransactions } from "@/types/ITransactions";
import { Dispatch, SetStateAction } from "react";

export async function serviceTransactions(
  setTransactions: Dispatch<SetStateAction<ITransactions[]>>
): Promise<void> {
  const data = fetch("https://reviva-credit-api.herokuapp.com/transactions")
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      throw new Error(
        "Não foi possível se comunicar com a base de dados, por favor verifique o erro" +
          err
      );
    });
  const aux = await data;

  const handledData = dateHandler(aux);
  setTransactions(handledData);
}

function dateHandler(data: ITransactions[]): ITransactions[] {
  data.slice(0, 50).forEach((transaction) => {
    const date = new Date(transaction.date);
    transaction.date = date.toLocaleDateString("pt-BR", {
      month: "2-digit",
      day: "2-digit",
    });
  });
  return data;
}
