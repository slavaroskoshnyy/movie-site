// import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
// import Menu from '../Menu'
import SkeletonLoader from '../../../../ui/skeleton-loader/SkeletonLoader'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<div></div>
		// <Menu
		// 	menu={{
		// 		title: 'Popular genres',
		// 		items: data || [],
		// 	}}
		// />
	)
}

export default GenreMenu
