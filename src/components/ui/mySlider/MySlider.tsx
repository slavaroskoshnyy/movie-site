import cn from 'classnames'
import { FC } from 'react'
import { BsBookmark, BsMagic, BsStar } from 'react-icons/bs'
import { GoCircleSlash } from 'react-icons/go'
import Slider from 'react-slick'

import { IMovie, ISlider } from '../../slider/slider.interface'

import styles from './MySlider.module.scss'
import ToolTip from './ToolTip'
import './slick.scss'
import './slickTheme.scss'

const MySlider: FC<ISlider> = ({ data: movies }) => {
	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 912,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 555,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 412,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				},
			},
		],
	}

	return (
		<Slider {...settings}>
			{movies.map((movie: IMovie, index: number) => {
				const { id, title, url } = movie
				return (
					<div className={styles.wrapper} key={id}>
						<a href="/" target="blank">
							<img className={styles.img} src={url} alt={title} />
							<div className={styles.wrapperContent}>
								<p>{title}</p>
							</div>
							<div className={styles.hovered}>
								<div className={styles.hoveredWrapperIcons}>
									<ToolTip text={'Смотреть позже'}>
										<BsBookmark className={styles.icons} />
									</ToolTip>
									<ToolTip text={'Похожее'}>
										<BsMagic className={styles.icons} />
									</ToolTip>
									<ToolTip text={'Уже смотрел, оценить'}>
										<BsStar className={styles.icons} />
									</ToolTip>
									<ToolTip text={'Не нравиться такое'}>
										<GoCircleSlash className={styles.icons} />
									</ToolTip>
								</div>
								<div className={styles.hoveredDescription}>
									<div
										className={styles.hoveredRating}
										title="Уже смотрел, оценить"
									>
										Rating
									</div>
									<div className={styles.hoveredPlot}>Plot</div>
									<div className={styles.hoveredName}>Name</div>
									<div className={styles.hoveredPart}>Part</div>
								</div>
							</div>
						</a>
					</div>
				)
			})}
			<a href="/" target="blank" className={cn(styles.img, styles.pageMovie)}>
				Посмотреть все
			</a>
		</Slider>
	)
}

export default MySlider
