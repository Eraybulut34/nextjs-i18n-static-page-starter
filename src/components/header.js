import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Link from './link'
import LanguageMenu from './languageMenu'

const Header = function ({ children }) {
  const router = useRouter()
  const { t } = i18next

  return (
    <>
<p className='font-class'>    Burası Header</p>
    </>
  )
}
export default Header
