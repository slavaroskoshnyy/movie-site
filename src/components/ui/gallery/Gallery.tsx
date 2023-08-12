import { FC, useRef } from 'react'

import { useScrollbar } from '../../../hooks/useScrollbar'
// import { IGalleryItem } from './gallery.types'
import { IMovie } from '../../slider/slider.interface'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery: FC<{ items: IMovie[] }> = ({ items }) => {
	const galleryWrapper = useRef(null)
	const hasScroll = true

	useScrollbar(galleryWrapper, hasScroll)

	return (
		<div style={{ width: 500 }} ref={galleryWrapper}>
			<div className={styles.gallery}>
				{items.map((item) => (
					<GalleryItem key={item.url} item={item} variant="vertical" />
				))}
			</div>
		</div>
	)
}

export default Gallery
