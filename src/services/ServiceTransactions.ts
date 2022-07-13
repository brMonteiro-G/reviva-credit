import { ITransaction } from "@/types/ITransaction";

export async function serviceTransactions(): Promise<ITransaction[]> {
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
