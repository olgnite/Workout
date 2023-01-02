import React, { FC } from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
	text: string;
	callback: () => void;
	type?: string;
}

const Button: FC<IButtonProps> = ({text, callback, type = 'purple'}) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={callback} className={`${styles.button} ${styles[type]}`}>
				{text}
			</button>
		</div>
	)
}

export default Button
