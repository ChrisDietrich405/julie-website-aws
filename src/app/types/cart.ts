import { Dispatch, SetStateAction } from "react";


export interface cartI {
  _id: number;
  price: number;
  image: string;
}

export interface cartItem {
  cart?: cartI[];
  setCart?: Dispatch<SetStateAction<never[]>>
}
