import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import { IMovie } from '../../slider/slider.interface'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { ISlide } from './slider.types'
import { useSlider } from './useSlider'

interface ISlider {
	buttonTitle?: string
	slides: IMovie[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			{isPrev && (
				<SlideArrow
					variant="left"
					styles={styles}
					clickHandler={() => handleClick('prev')}
				/>
			)}

			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isNext && (
				<SlideArrow
					variant="right"
					styles={styles}
					clickHandler={() => handleClick('next')}
				/>
			)}
		</div>
	)
}

export default Slider
