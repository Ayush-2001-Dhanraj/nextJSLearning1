import '../styles/globals.css'
import MainLayout from '../components/layouts/main'
import DefaultLayout from '../components/layouts/default'

function MyApp ({ Component, pageProps }) {
  const Layout = Component.layout || DefaultLayout
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  )
}

export default MyApp
