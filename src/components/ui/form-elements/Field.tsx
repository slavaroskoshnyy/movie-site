import cn from 'classnames'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { GrFormViewHide } from 'react-icons/gr'

import logo from '../../../assets/img/icon.png'

import { IFild } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IFild>(
	({ placeholder, error, icon, type = 'text', style, ...rest }, ref) => {
		// const show_hide_password = () => {}
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<input ref={ref} type={type} {...rest} />
					<span className={styles.span}>{placeholder}</span>
					{icon}
					<GrFormViewHide className={styles.icons} />
					{/* <a
						href="#"
						className="password-control"
						onClick={show_hide_password}
					></a> */}
				</label>
				{error && (
					<div className={styles.error}>
						<img src={logo} alt=" " />
						<div>
							<p> Ошибка </p>
							<p>{error.message}</p>
						</div>
					</div>
				)}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
