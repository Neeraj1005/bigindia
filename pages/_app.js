import '../styles/globals.css'
import 'material-icons/iconfont/material-icons.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  // <Layout>
    <Component {...pageProps} />
  // </Layout>
  )
}

export default MyApp
