import { MenuItem, OrderItem } from "../types"

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order', payload: {} } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export default (state = initialState, { type, payload }: OrderActions) => {
  switch (type) {

  case 'add-item':
    return { ...state, ...payload }

  case 'remove-item':
    return { ...state, ...payload }

  case 'place-order':
    return { ...state, ...payload }

  case 'add-tip':
    return { ...state, ...payload }

  default:
    return state
  }
}
