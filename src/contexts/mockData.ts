import { ICard } from "@/types/ICard";
import { ITransactions } from "@/types/ITransactions";
import { IUser } from "@/types/IUser";

export const Cards: ICard[] = [
  {
    "userId": "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
    "id": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "brand": "visa",
    "number": "4283920481068830",
    "cvv": "450",
    "limit": 3998,
    "dueDate": 14,
    "expiresIn": "2028-01-21T03:09:11.811Z"
  },
  {
    "userId": "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
    "id": "3ee52154-c357-4b28-bb71-3f8700666a0c",
    "brand": "visa",
    "number": "4816979481038049",
    "cvv": "818",
    "limit": 2350,
    "dueDate": 23,
    "expiresIn": "2023-01-06T14:00:28.451Z"
  },
  {
    "userId": "cdd9ce2b-1b1e-4d78-8ce4-9a4380c76e22",
    "id": "6e6e2b1f-c002-4053-be1d-b6adf913f6cf",
    "brand": "mastercard",
    "number": "5574681340876970",
    "cvv": "997",
    "limit": 1179,
    "dueDate": 14,
    "expiresIn": "2024-04-22T22:36:52.725Z"
  },
  {
    "userId": "cdd9ce2b-1b1e-4d78-8ce4-9a4380c76e22",
    "id": "f2a63981-7082-4df3-a79b-495bcf04f137",
    "brand": "visa",
    "number": "4948430413795",
    "cvv": "886",
    "limit": 3498,
    "dueDate": 10,
    "expiresIn": "2023-10-28T01:30:06.347Z"
  },
]


export const Users: IUser[] = [
  {
    "id": "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
    "name": "Leonel"
  },
  {
    "id": "cdd9ce2b-1b1e-4d78-8ce4-9a4380c76e22",
    "name": "Genival"
  }
]

export const Transactions: ITransactions[] = [
  {
    "id": "1bceb176-d6e2-4c88-8cbc-d67869e32233",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 827.0089938016134,
    "description": "Carvalho, Melo and Martins",
    "date": "2022-05-19T05:22:35.380Z"
  },
  {
    "id": "23aab7ee-ac93-46cd-b370-98e008ffe70c",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1050.4293623762926,
    "description": "Saraiva, Barros and Moraes",
    "date": "2022-01-02T23:36:01.353Z"
  },
  {
    "id": "c03b1b72-76c2-4623-9562-c5f49afdd64f",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1938.3056488340037,
    "description": "Macedo S.A.",
    "date": "2022-04-14T02:05:13.962Z"
  },
  {
    "id": "c5134000-1af7-48de-98dc-9d85f6ae5bf6",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1640.428239383586,
    "description": "Carvalho - Carvalho",
    "date": "2022-02-27T14:53:58.945Z"
  },
  {
    "id": "5ba87956-d285-43dc-bd71-504651ed75a8",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 2170.6697339246402,
    "description": "Martins Comércio",
    "date": "2022-03-19T16:50:04.904Z"
  },
  {
    "id": "59f6597d-c4b3-4851-b516-a52019c0516e",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 205.3930544539976,
    "description": "Reis - Moraes",
    "date": "2022-04-19T09:59:24.993Z"
  },
  {
    "id": "624aabbd-89fa-4eb0-a9a7-26a821ee730a",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 2300.4077536321647,
    "description": "Costa - Martins",
    "date": "2022-02-06T07:47:15.918Z"
  },
  {
    "id": "89c32299-46cc-448c-9b2c-b18730f83c30",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 3480.0240315386886,
    "description": "Reis e Associados",
    "date": "2022-01-16T04:25:45.717Z"
  },
  {
    "id": "24328278-8ebe-42d9-ad5d-b226bfc55e33",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1657.4918172731811,
    "description": "Pereira Comércio",
    "date": "2022-02-11T03:57:02.094Z"
  },
  {
    "id": "2ff6a336-950a-4c7b-9c99-c160f2dcc289",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 3545.715108897975,
    "description": "Macedo, Macedo and Barros",
    "date": "2022-05-12T08:31:00.823Z"
  },
  {
    "id": "27292787-ed17-4d9e-bb3a-f1aa40135abe",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 3873.213315879817,
    "description": "Costa e Associados",
    "date": "2022-03-23T05:26:39.264Z"
  },
  {
    "id": "af279120-1ba7-44bb-9d97-fd67ae1c5a8a",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 3184.324807753439,
    "description": "Braga, Reis and Moreira",
    "date": "2022-03-27T07:28:49.923Z"
  },
  {
    "id": "355f7df2-7d9e-4eac-bb3e-20763823f084",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1458.9347184461194,
    "description": "Santos - Moreira",
    "date": "2022-05-19T22:18:50.345Z"
  },
  {
    "id": "63721282-c496-4872-96ed-efb4ed23fa05",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1703.5349861738416,
    "description": "Macedo - Carvalho",
    "date": "2022-05-11T20:31:21.157Z"
  },
  {
    "id": "bc843014-d896-4ea8-897d-963014309758",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 1974.2627643854507,
    "description": "Braga, Albuquerque and Batista",
    "date": "2022-01-17T19:48:26.399Z"
  },
  {
    "id": "2219c901-e6a8-41fb-8837-de57c8b3df58",
    "cardId": "16a037dc-4074-4466-a5eb-5fb00a205882",
    "value": 641.4805653655416,
    "description": "Batista, Martins and Santos",
    "date": "2022-04-13T06:37:10.910Z"
  },
]