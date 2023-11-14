import { Dispatch, SetStateAction } from "react";

export interface cartI {
  id: number;
  price: number;
  image: string;
  title: string;
  measurements: string;
}

export interface cartItem {
  cart?: cartI[];
  setCart?: Dispatch<SetStateAction<never[]>>;
}
