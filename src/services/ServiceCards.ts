import { ICard } from "@/types/ICard";

export async function serviceCards(): Promise<ICard[]> {
  try {
    const data = await fetch(
      "https://reviva-credit-api.herokuapp.com/cards"
    );
    return await data.json();
  } catch (error) {
    throw new Error(
      "Não foi possível se comunicar com a base de dados, por favor verifique o erro" +
        error
    );
  } 
}
