import cn from 'classnames'
import { FC } from 'react'

import { IStyles } from '../../../slider/slider.interface'
import { MaterialIcon } from '../../icons/MaterialIcon'

// import styles from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler?: () => void
	styles: IStyles
	style?: React.CSSProperties
}

const SlideArrow: FC<ISlideArrow> = ({
	variant,
	styles,
	style,
	clickHandler,
}) => {
	const isLeft = variant === 'left'

	return (
		<div
			onClick={clickHandler}
			style={style}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon
				name={isLeft ? 'BsChevronCompactLeft' : 'BsChevronCompactRight'}
			/>
		</div>
	)
}

export default SlideArrow
