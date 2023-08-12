import Cookies from 'js-cookie'

import { IAuthResponse, IToken } from '../../store/user/user.interface'

export const saveTokenStorage = (data: IToken) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
