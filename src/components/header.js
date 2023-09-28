import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Link from './link'
import LanguageMenu from './languageMenu'


const Header = function ({ children }) {
  const router = useRouter()
  const { t } = i18next
  console.log(router,"router")

  return (
    <>
    <div className="header">
      <p><a href="#">bimodel.net</a></p>
      <ul>    
      <li>
      <Link href="/">
        <a>{t('home')}</a>
      </Link>
      </li>
      {/* <li>
        <a href="#">{t('about')}</a>
      </li> */}
      <li>
        <Link href="/hakkimizda">
          <a>{t('about')}</a>
        </Link>
      </li>
      <li>
        {/* <a href="#">{t('contact')}</a> */}
        <Link href="/iletisim">
          <a>{t('contact')}</a>
        </Link>
      </li>
      </ul>
      <LanguageMenu />
    </div>
    </>
  )
}
export default Header