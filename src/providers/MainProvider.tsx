import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

// import ReduxToastr from '../components/ui/redux-toastr/ReduxToastr'
// import { TypeComponentAuthFields } from '../shared/types/auth.types'
import { store } from '../store/store'

// import AuthProvider from './AuthProvider/AuthProvider'

// import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
