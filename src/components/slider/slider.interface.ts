export interface IMovie {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
	[key: string]: string | number
}
export interface IStyles {
	[key: string]: string
}

export interface ISlider {
	shift?: boolean
	card?: boolean
	data: IMovie[]
	className?: string
}
