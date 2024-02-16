export interface ICartItem {
  id: string,
  price: number,
  image: string,
  measurements: string,
  title: string
}

export type ICart = ICartItem[]