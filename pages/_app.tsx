import type { AppProps/*, AppContext */  } from 'next/app'
import { StarWarsProvider } from '../Context/StarWarsProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <StarWarsProvider>
        <Component {...pageProps} />
      </StarWarsProvider>
    </>
  )
}

export default MyApp
