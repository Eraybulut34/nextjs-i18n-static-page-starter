import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Link from './link'
import LanguageMenu from './languageMenu'
import Header from './header'
import Footer from './footer'

const Layout = function ({ children }) {
  const router = useRouter()
  const { t } = i18next

  return (
    <>
    <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
export default Layout
