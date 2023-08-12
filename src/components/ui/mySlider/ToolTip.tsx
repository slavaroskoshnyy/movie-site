import { ReactElement, useRef, useState } from 'react'

import classes from './ToolTip.module.scss'

type PropsType = {
	children: ReactElement
	text: string
	customClass?: string
}

const ToolTip: React.FC<PropsType> = ({ children, text, customClass }) => {
	const refSetTimeout = useRef<NodeJS.Timeout>()
	const [showToolTip, setShowToolTip] = useState(false)
	const toolTipClasses = customClass
		? `${classes.tooltip} ${customClass}`
		: `${classes.tooltip}`

	const onMouseEnterHandler = () => {
		refSetTimeout.current = setTimeout(() => {
			setShowToolTip(true)
		}, 750)
	}

	const onMouseLeaveHandler = () => {
		clearTimeout(refSetTimeout.current)
		setShowToolTip(false)
	}

	return (
		<div
			className={classes.container}
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
		>
			{children}
			{showToolTip && <span className={classes.triangleDown}></span>}
			{showToolTip && <div className={toolTipClasses}>{text}</div>}
		</div>
	)
}

export default ToolTip
