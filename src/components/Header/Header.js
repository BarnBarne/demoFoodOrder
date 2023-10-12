import React from 'react'

import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import mainImage from '../../assets/meals.jpg'

const Header = props => {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onOpenCart={props.onOpenCart} />
			</header>
			<div className={styles['main-image']}>
				<img className={styles.img} src={mainImage} alt='table with meals'></img>
			</div>
		</React.Fragment>
	)
}

export default Header
