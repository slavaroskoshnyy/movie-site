import { Options, OverlayScrollbars } from 'overlayscrollbars'
import { useEffect } from 'react'

// interface IConfig extends Options {
// 	scrollbars: {
// 		visibility: 'ScrollbarsVisibilityBehavior'
// 		autoHide: 'ScrollbarsAutoHideBehavior'
// 	}
// }

const config = {
	// scrollbars: {
	// 	visibility: 'hidden',
	// 	autoHide: 'scroll',
	// },
}

export const useScrollbar = (root: any, hasScroll?: boolean) => {
	useEffect(() => {
		
		let scrollbars: OverlayScrollbars

		if ((root.current, hasScroll)) {
			scrollbars = OverlayScrollbars(root.current, config)
		}

		return () => {
			if (scrollbars) {
				scrollbars.destroy()
			}
		}
	}, [root, hasScroll])
}
