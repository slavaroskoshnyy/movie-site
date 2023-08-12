import { useQuery } from 'react-query'

import { getMovieUrl } from '../configs/url.config'
import { MovieService } from '../services/movie/movie.service'
import { toastError } from '../utils/toast-error'

export const useMovies = () => {
	const queryData = useQuery('movies', () => MovieService.getMovies(), {
		select: ({ data }) =>
			data
				.map((m) => ({
					name: m.title,
					posterPath: m.poster,
					url: getMovieUrl(m.slug),
				}))
				.splice(0, 20),
		onError(error) {
			toastError(error, 'movies')
		},
	})

	return queryData
}
