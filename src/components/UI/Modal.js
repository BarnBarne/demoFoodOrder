import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'

import styles from './Modal.module.css'

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = props => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	)
}

export default Modal

// const Backdrop = props => {
// 	return <div className={styles.backdrop} onClick={props.onCloseError}></div>
// }

// const ModalOverlay = props => {
// 	return (
// 		<Card className={styles.modal}>
// 			<header className={styles.header}>
// 				<h2>{props.title}</h2>
// 			</header>
// 			<div className={styles.content}>
// 				<p>{props.message}</p>
// 			</div>
// 			<footer className={styles.actions}>
// 				<Button onClick={props.onCloseError}>Okay</Button>
// 			</footer>
// 		</Card>
// 	)
// }

// const ErrorModal = props => {
// 	return (
// 		<React.Fragment>
// 			{ReactDOM.createPortal(<Backdrop onCloseError={props.onCloseError} />, document.getElementById('backdrop-root'))}
// 			{ReactDOM.createPortal(
// 				<ModalOverlay title={props.title} message={props.message} onCloseError={props.onCloseError} />,
// 				document.getElementById('overlay-root')
// 			)}
// 		</React.Fragment>
// 	)
// }

// export default ErrorModal
