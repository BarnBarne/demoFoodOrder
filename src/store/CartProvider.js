import { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
		const existingCartItem = state.items[existingCartItemIndex]
		let updatingItems

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			}
			updatingItems = [...state.items]
			updatingItems[existingCartItemIndex] = updatedItem
		} else {
			const updatedItem = { ...action.item }
			updatingItems = state.items.concat(action.item)
		}

		const updatedItems = state.items.concat(action.item)
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	} else if (action.type === 'REMOVE') {
	}

	return defaultCartState
}

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

	const addItemtoCartHandler = item => {
		dispatchCartAction({
			type: 'ADD',
			item: item,
		})
	}

	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE', id: id })
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemtoCartHandler,
		removeItem: removeItemFromCartHandler,
	}

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider