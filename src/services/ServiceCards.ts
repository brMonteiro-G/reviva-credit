import { ICard } from "@/types/ICard";
import { Dispatch, SetStateAction } from "react";

export async function serviceCards(cards:ICard[],
  setCards: Dispatch<SetStateAction<ICard[]>>
): Promise<void> {
  const data = fetch("https://reviva-credit-api.herokuapp.com/cards")
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
  console.log("sux",aux);

  setCards(aux);
  console.log("cards",cards);
  
  
}
