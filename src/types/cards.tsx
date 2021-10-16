interface card {
  image: string
  value: string
  suit: string
  code: string
}

export interface ICard {
  success: boolean
  cards: card[]
  deck_id: string
  remaining: number
}