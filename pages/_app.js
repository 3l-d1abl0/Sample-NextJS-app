import '../styles/globals.css'
import DefaultLayout from '../components/DefaultLayout'

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}

export default MyApp
