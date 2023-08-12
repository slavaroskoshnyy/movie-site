import { FC } from 'react'
import * as MaterialIcons from 'react-icons/bs'

import { useRenderClient } from '../../../hooks/useRenderClient'
import { TypeMaterialIconName } from '../../../shared/types/icons.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name]

	if (isRenderClient)
		return <IconComponent /> || <MaterialIcons.BsGripVertical />
	else return null
}
