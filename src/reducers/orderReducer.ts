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

let updatedOrder: OrderItem[]

export default (state = initialState, { type, payload }: OrderActions) => {
  switch (type) {

  case 'add-item':
    const itemExist = state.order.find(orderItem => orderItem.id === payload.item.id)
    updatedOrder = []
    if (itemExist) {
        updatedOrder = state.order.map(orderItem => orderItem.id === payload.item.id 
            ? {...orderItem, quantity: orderItem.quantity + 1} 
            : orderItem
        )
    } else {
        const newItem: OrderItem = {...payload.item, quantity: 1}
        updatedOrder = [...state.order, newItem]
    }
    return { ...state, order: updatedOrder }

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
