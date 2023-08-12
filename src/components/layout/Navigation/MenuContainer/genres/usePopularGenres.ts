import { useQuery } from 'react-query'

import { getGenreUrl } from '../../../../../configs/url.config'
import { GenreService } from '../../../../../services/genre/genre.service'
import { toastError } from '../../../../../utils/toast-error'
import { IMenuItem } from '../menu.types'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getPopularGenres(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
			onError(error) {
				toastError(error, 'Popular genres menu')
			},
		}
	)

	return queryData
}
