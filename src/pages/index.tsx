import { FC } from 'react'

import { errorCatch } from '../api/api.helpers'
// import type { GetStaticProps, NextPage } from 'next'
import Home from '../components/screens/home/Home'
import { IHome } from '../components/screens/home/home.interface'
// import { IGalleryItem } from '@/components/ui/gallery/gallery.types'
import { ISlide } from '../components/ui/slider/slider.types'
// import { getGenresList } from '@/utils/movie/getGenresList'
import { getActorUrl, getMovieUrl } from '../configs/url.config'
// import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '../services/movie/movie.service'

const index: FC = () => {
	return <div>index</div>
}

export default index

// const HomePage:FC<IHome> = (props) => {
// 	return <Home {...props} />
// }

// export const getStaticProps: GetStaticProps = async () => {
// 	try {
// 		const { data: movies } = await MovieService.getMovies()
// 		const { data: dataActors } = await ActorService.getAll()
// 		const datatTrendingMovies = await MovieService.getMostPopularMovies()

// 		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
// 			_id: m._id,
// 			link: getMovieUrl(m.slug),
// 			subTitle: getGenresList(m.genres),
// 			title: m.title,
// 			bigPoster: m.bigPoster,
// 		}))

// 		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
// 			name: a.name,
// 			posterPath: a.photo,
// 			url: getActorUrl(a.slug),
// 			content: {
// 				title: a.name,
// 				subTitle: `+${a.countMovies} movies`,
// 			},
// 		}))

// 		const trendingMovies: IGalleryItem[] = datatTrendingMovies
// 			.slice(0, 7)
// 			.map((m) => ({
// 				name: m.title,
// 				posterPath: m.poster,
// 				url: getMovieUrl(m.slug),
// 			}))

// 		return {
// 			props: {
// 				actors,
// 				slides,
// 				trendingMovies,
// 			} as IHome,
// 		}
// 	} catch (error) {
// 		console.log(errorCatch(error))

// 		return {
// 			props: {
// 				actors: [],
// 				slides: [],
// 				trendingMovies: [],
// 			} as IHome,
// 		}
// 	}
// }

// export default HomePage
