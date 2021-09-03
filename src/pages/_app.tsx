import '../styles/global.scss'
import { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../lib/redux/store'

const App = ({ Component, pageProps }: AppProps) => {
	const store = useStore(pageProps.initialReduxState)
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default App
