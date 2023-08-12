import 'overlayscrollbars/overlayscrollbars.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './components/routes/Routes'
import './index.scss'
import MainProvider from './providers/MainProvider'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<MainProvider>
			<Router />
		</MainProvider>
	</React.StrictMode>
)

reportWebVitals()
