import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Link from './link'
import LanguageMenu from './languageMenu'


const object = function ({ children }) {
  const router = useRouter()
  const { t } = i18next
  console.log(router,"router")

  return (
    <>
        adadasdad
    </>
  )
}
export default object