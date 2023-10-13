import React, { useState } from 'react'

import Header from './components/Header/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
	const [isInCart, setIsInCart] = useState(false)

	const showCartHandler = () => {
		setIsInCart(prevState => !prevState)
	}

	const orderHandler = () => {
		console.log('ordered')
	}

	return (
		<CartProvider>
			{isInCart && <Cart onCloseCart={showCartHandler} onOrder={orderHandler} />}
			{/* could use useContext onOpenCart  */}
			<Header onOpenCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App
