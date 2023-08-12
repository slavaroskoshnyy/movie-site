import { FC } from 'react'

import Slider from '../../../components/slider/Slider'
import Sliders from '../../../components/ui/slider/Slider'

import Gallery from '../../ui/gallery/Gallery'
import MySlider from '../../ui/mySlider/MySlider'
import SkeletonLoader from '../../ui/skeleton-loader/SkeletonLoader'

import '../../../App.scss'
import data from '../../../data'

// import { IHome } from './home.interface'

const Home: FC = () => {
	// const { isLoading, data } = useMovies()
	const isLoading = false
	return (
		<div>
			{/* {isLoading ? (
				<SkeletonLoader count={5} />
			) : (
				<Gallery items={data || []} />
			)}
			<div className="slider">
				<Sliders slides={data} />
			</div> */}
			<MySlider data={data} />;
			<Slider data={data} />;
		</div>
	)
}

export default Home
