import queryString from 'query-string'
import { useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// function MyComponent() {
//   // Get the router object
//   const router = useRouter();
//   // Get value from query string (?postId=123) or route param (/:postId)
//   console.log(router.query.postId);
//   // Get current pathname
//   console.log(router.pathname);
//   // Navigate with router.()
//   return <button onClick={(e) => router.push("/about")}> About </button>;
// }
// Hook

export function useRouter() {
	const params = useParams()
	const location = useLocation()
	const history = useNavigate()

	return useMemo(() => {
		return {
			//    push: history.push,
			//    replace: history.replace,
			pathname: location.pathname,
			query: {
				...queryString.parse(location.search),
				...params,
			},

			location,
			history,
		}
	}, [params, location, history])
}
