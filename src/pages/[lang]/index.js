import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import { useEffect, useState } from 'react'

export default function LangIndex({ language }) {
  const { t } = i18next
  const [currentDate, setCurrentDate] = useState(0);
setInterval(() => {
  setCurrentDate(currentDate+1);
}, 1000);
  return (
    <Layout>
 <p className="eric-johnson">
  {currentDate.toString()}
 </p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang)
  return {
    props: {
      language,
    },
  }
}
