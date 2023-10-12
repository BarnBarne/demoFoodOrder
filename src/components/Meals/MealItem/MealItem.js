import react, { useContext } from 'react'

import MealItemForm from './MealItemForm'
import styles from './MealItem.module.css'
import CartContext from '../../../store/cart-context'

const MealItem = props => {
	const cartCtx = useContext(CartContext)

	const price = `$${props.price.toFixed(2)}`

	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		})
	}

	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.price}>{price}</p>
			</div>
			<MealItemForm onAddToCart={addToCartHandler} id={props.id} />
		</li>
	)
}

export default MealItem
