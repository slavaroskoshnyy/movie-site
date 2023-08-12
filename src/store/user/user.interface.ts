import { IUser } from '../../shared/types/user.types'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface IToken {
	accessToken: string
	refreshToken: string
}

export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface InterfaceEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends IToken {
	user: IUser & {
		isAdmin: boolean
	}
}
