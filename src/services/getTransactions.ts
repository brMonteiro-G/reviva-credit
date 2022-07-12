import { ITransactions } from "@/types/ITransactions";

export async function getTransactions(): Promise<ITransactions[]> {
  try {
    const data = await fetch(
      "https://reviva-credit-api.herokuapp.com/transactions"
    );
    return await data.json();
  } catch (error) {
    throw new Error(
      "Não foi possível se comunicar com a base de dados, por favor verifique o erro" +
        error
    );
  }
}
