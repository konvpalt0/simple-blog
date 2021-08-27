import '../styles/global.scss'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<ThemeProvider theme={{}}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>
)

export default App
