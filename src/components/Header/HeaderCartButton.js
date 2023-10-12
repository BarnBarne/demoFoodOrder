import react, { useContext } from 'react'

import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	return (
		<button onClick={props.onOpenCart} className={`${styles.button} ${styles.bump}`}>
			<span>
				<CartIcon className={styles.icon} />
			</span>
			<span>Your Cart</span>
			<span onClick={props.onOrder} className={styles.badge}>
				{numberOfCartItems}
			</span>
		</button>
	)
}

export default HeaderCartButton
