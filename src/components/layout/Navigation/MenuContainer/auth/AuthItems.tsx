import { FC } from 'react'

import { getAdminHomeUrl } from '../../../../../configs/url.config'
import { useAuth } from '../../../../../hooks/useAuth'

// import MenuItem from '../MenuItem'
import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<div> </div>
					{/* <MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/> */}
					<LogoutButton />
				</>
			) : (
				<div> </div>
				// <MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<div> </div>
				// <MenuItem
				// 	item={{
				// 		icon: 'MdOutlineLock',
				// 		link: getAdminHomeUrl(),
				// 		title: 'Admin panel',
				// 	}}
				// />
			)}
		</>
	)
}

export default AuthItems
