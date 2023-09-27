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
      <li>
        <a>{t('home')}</a>
      </li>
      <li>
        <a href="#">{t('about')}</a>
      </li>
      <li>
        <a href="#">{t('contact')}</a>
      </li>
      </ul>
      <LanguageMenu />
    </div>
    </>
  )
}
export default Header
