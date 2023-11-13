import { Helmet, HelmetProvider } from 'react-helmet-async'
import MyFooter from '../components/MyFooter'
import MyNavbar from '../components/MyNavbar'


const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section>
        <MyNavbar />
      </section>
      <main>
        {
          children
        }
      </main>
      <section>
        <MyFooter />
      </section>
    </>
  )
}

export default Layout