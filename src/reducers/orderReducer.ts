import { MenuItem } from "../types"

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order', payload: {} } |
    { type: 'add-tip', payload: { value: number } }
