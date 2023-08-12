import cn from 'classnames'
import { useEffect, useState } from 'react'

import { Arrow } from '../ui/mySlider/Arrow'

import { IMovie, ISlider } from './slider.interface'
import styles from './slider.module.scss'

export default function Slider({ data, className }: ISlider) {
	const [movies] = useState(data)
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const lastIndex = movies.length - 1
		if (currentIndex < 0) {
			setCurrentIndex(lastIndex)
		}
		if (currentIndex > lastIndex) {
			setCurrentIndex(0)
		}
	}, [currentIndex, movies])

	useEffect(() => {
		let slider = setInterval(
			() => setCurrentIndex((prevState) => prevState + 1),
			3000
		)
		return () => {
			clearInterval(slider)
		}
	}, [currentIndex])

	return (
		<div className={cn(styles.section, className)}>
			<div className={styles.sectionCenter}>
				<div className={styles.sectionItems}>
					{movies.map((movie: IMovie, movieIndex: number) => {
						const { id, title, url, description } = movie

						let position = `${styles.nextSlider}`
						if (movieIndex === currentIndex) {
							position = `${styles.activeSlider}`
						}

						if (
							movieIndex === currentIndex - 1 ||
							(currentIndex === 0 && movieIndex === movies.length - 1)
						) {
							position = `${styles.lastSlider}`
						}
						return (
							<article className={cn(position, styles.article)} key={id}>
								<img className={styles.img} src={url} alt={title} />
								<div className={styles.wrapperContent}>
									<a href="/" target="_blank">
										{title}
									</a>
									<p>{description}</p>
									<button>
										<a href="/" target="_blank">
											Смотреть
										</a>
									</button>
								</div>
							</article>
						)
					})}
					<Arrow
						variant="left"
						onClick={() => setCurrentIndex((prevState) => prevState + 1)}
					/>
					<Arrow
						variant="right"
						onClick={() => setCurrentIndex((prevState) => prevState - 1)}
					/>
				</div>
			</div>
		</div>
	)
}
