import react, { useContext } from 'react'

import styles from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

const Cart = props => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
	const hasItems = cartCtx.items.length > 0

	const cartItemRemoveHandler = id => {}

	const cartItemAddHandler = item => {}

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					price={item.price}
					amount={item.amount}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	)

	return (
		<Modal onClick={props.onCloseCart}>
			{cartItems}
			{/* <CartItem /> */}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button onClick={props.onCloseCart} className={styles['button--alt']}>
					Close
				</button>
				{hasItems && (
					<button onClick={props.onOrder} className={styles.button}>
						Order
					</button>
				)}
			</div>
		</Modal>
	)
}

export default Cart
