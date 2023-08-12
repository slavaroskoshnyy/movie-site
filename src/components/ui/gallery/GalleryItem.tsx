import cn from 'classnames'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.types'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<a
			href={item.url}
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<img alt={item.title} src={item.url} draggable={false} />
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.title}</div>
					{/* {item.content.subTitle && (
						<div className={styles.subTitle}> {item.content.subTitle}</div>)
						} */}
				</div>
			)}
		</a>
	)
}

export default GalleryItem
