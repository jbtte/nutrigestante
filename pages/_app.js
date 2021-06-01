import '../styles/globals.css'
import '../styles/modal.css'
import HeadInfo from '../components/HeadInfo'
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  return(
  <UserProvider>
    <HeadInfo />
    <Component {...pageProps} />
  </UserProvider>)
}

export default MyApp
