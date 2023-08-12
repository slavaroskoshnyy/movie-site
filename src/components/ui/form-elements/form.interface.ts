import {
	ButtonHTMLAttributes,
	InputHTMLAttributes,
	LinkHTMLAttributes,
	ReactNode,
} from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	//  error?: FieldError | undefined;
	error?: any
	icon?: ReactNode
	// icon?: IconType
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps &
	LinkHTMLAttributes<HTMLLinkElement>

export interface IFild extends TypeInputPropsField {}
