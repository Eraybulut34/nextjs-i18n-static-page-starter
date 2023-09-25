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
    <div className="header">
      <p><a href="#">bimodel.net</a></p>
      <ul>
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#">Hakkımızda</a></li>
        <li><a href="#">İletişim</a></li>
      </ul>
    </div>
    </>
  )
}
export default Header
