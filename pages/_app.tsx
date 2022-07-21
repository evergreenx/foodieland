import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Layout from '../components/Layout'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme}>
       <Layout>
       <Component {...pageProps} />
       </Layout>
  
    </ChakraProvider>
  )
  
  
}

export default MyApp
