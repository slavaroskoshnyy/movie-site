import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../ui/form-elements/Button'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'

const Auth: FC = () => {
	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		// mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<div className={styles.wrapperForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<AuthFields
					formState={formState}
					register={registerInput}
					isPasswordRequired
				/>
				<Button
					type="submit"
					onClick={() => setType('login')}
					disabled={isLoading}
				>
					Вход
				</Button>
				<Button
					type="submit"
					onClick={() => setType('register')}
					disabled={isLoading}
				>
					Регестрация
				</Button>
			</form>
		</div>
	)
}

export default Auth
