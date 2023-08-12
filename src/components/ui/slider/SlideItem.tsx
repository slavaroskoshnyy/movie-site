// import Image from 'next/image'
// import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMovie } from '../../slider/slider.interface'

import styles from './Slider.module.scss'
import { ISlide } from './slider.types'

interface ISlideItem {
	slide: IMovie
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Смотреть' }) => {
	// const { push } = useRouter()

	return (
		<div className={styles.slide}>
			<img
				// layout="fill"
				className={styles.image}
				src={slide.url}
				alt={slide.title}
				draggable={false}
				// unoptimized
				// priority
			/>

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button}>
					<a href={slide.url} target="blank">
						{buttonTitle}
					</a>
				</button>
			</div>
		</div>
	)
}

export default SlideItem
