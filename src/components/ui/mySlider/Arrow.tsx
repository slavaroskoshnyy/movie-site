import cn from 'classnames'
import { FC } from 'react'
import { BsChevronCompactLeft } from 'react-icons/bs'

import styles from './Arrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	onClick?: () => void
	style?: React.CSSProperties
}

export const Arrow: FC<ISlideArrow> = ({ onClick, variant }) => {
	const isLeft = variant === 'left'

	return (
		<button
			type="button"
			data-role="none"
			className={cn(
				styles.arrow,
				{ [styles.next]: isLeft },
				{ [styles.prev]: !isLeft }
			)}
			onClick={onClick}
		></button>
	)
}