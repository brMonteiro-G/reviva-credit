import { IUser } from "@/types/IUser";
import { Dispatch, SetStateAction } from "react";

export async function serviceUser(setUser: Dispatch<SetStateAction<IUser>>):Promise<void> {
    const data = fetch('https://reviva-credit-api.herokuapp.com/users')
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
  
setUser(aux[0])  
  }

  