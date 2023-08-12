import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { useAuth } from "../../hooks/useAuth";
import { routes } from './rotes.data'

// import NotFound from '../components/screens/not-found/NotFound'

const Router: FC = () => {
	//   const { isAuth } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route: any) => {
					//  if (route.isAuth && !isAuth) {
					//    return false;
					//  }

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	)
}
export default Router
