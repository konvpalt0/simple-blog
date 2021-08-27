import '../styles/global.scss'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>
)

export default App
