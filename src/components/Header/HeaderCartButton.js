import { useContext, useEffect, useState } from 'react'

import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	const { items } = cartCtx

	const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''} `

	useEffect(() => {
		if (items.length === 0) {
			return
		}
		setBtnIsHighlighted(true)

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false)
		}, 300)

		return () => {
			clearTimeout(timer)
		}
	}, [items])

	return (
		<button onClick={props.onOpenCart} className={btnClasses}>
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
