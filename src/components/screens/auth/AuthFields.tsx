// import classNames from 'classnames'
import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

// import GrFormViewHide from 'react-icons'
import { validEmail } from '../../../shared/regex'
import Field from '../../ui/form-elements/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Неправильно указанны данные',
					},
				})}
				placeholder="Через E-mail или телефон"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message:
										'Не правильно указан пароль.Пожалуйста, попробуйте еще раз.',
								},
						  }
						: {}
				)}
				placeholder="Введите пароль"
				type="password"
				error={errors.password}
				// autoComplete="off"
			/>
		</>
	)
}

export default AuthFields
