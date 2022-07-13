import { IUser } from "@/types/IUser";

export async function serviceUsers(): Promise<IUser[]> {
  try {
    const data = await fetch(
      "https://reviva-credit-api.herokuapp.com/users"
    );
    return await data.json();
  } catch (error) {
    throw new Error(
      "Não foi possível se comunicar com a base de dados, por favor verifique o erro" +
        error
    );
  }
}

  