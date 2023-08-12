import { IMovie } from '../../slider/slider.interface'

export interface IGalleryItem {
	posterPath: string
	name: string
	url: string
	content?: {
		title: string
		subTitle?: string
	}
}

// export interface IGalleryItemProps {
// 	item: IGalleryItem
// 	variant: 'horizontal' | 'vertical'
// }
export interface IGalleryItemProps {
	item: IMovie
	variant: 'horizontal' | 'vertical'
}
