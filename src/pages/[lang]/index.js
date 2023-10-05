import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import { useEffect, useState } from 'react'
import Head from 'next/head';







export default function LangIndex({ language }) {
  const { t } = i18next
  return (
    <>
    <Head>
    <title>bimodel.net</title>
    <meta name="description" content="BIM Modeling." />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

    </Head>
    <Layout>
      <div className="container">
      <div className="banner-box">
          <h1>{t('ourValuesAndPurpose')}</h1>
          <p>{t('ourVision')}</p>
          <Link href="#scn">
          <a className="btn">{t('project')}</a>
          </Link>
      </div>
      <div className="banner-box banner-image">
        <a href="">
          <img  src="https://www.erbilen.net/demo/egghead/img/ImmuateableImmer_Final.png" alt="" />
        </a>
      </div>
    </div>
    <div className="cont" id="scn">
      <div className="inner">
          <h3>{t('ready')}</h3>
        </div>
      <div className="section1" >
        <div className="lang">
          <Link href="/service/bim">
            <a>
            <img src="https://cdn-icons-png.flaticon.com/512/6968/6968900.png" alt="" />
            <span className="title">BIM Modeling</span>
            </a>
          </Link>
          <Link href="/service/object">
            <a>
          <img src="https://t4.ftcdn.net/jpg/03/34/61/85/360_F_334618569_xsm60thnM5iv8CLE8j0kLFkcPuVzHde5.jpg" alt="" />
            <span className="title">BIM Object Modeling</span>
            </a>
          </Link>
          <Link href="/service/point">
            <a>
            <img src="https://cdn-icons-png.flaticon.com/512/7024/7024150.png" alt="" />
            <span className="title">Point Cloud Modeling</span>
            </a>
          </Link>
          <Link href="/service/design">
            <a>
            <img src="https://bim-withstand.com/wp-content/uploads/2019/03/Modeling-b.png" alt="" />
            <span className="title">Design Automation</span>
          </a>
          </Link>
        </div>
      </div>
      <div className="get">
        <a href="#" className="btn">{t('get')}</a>
        </div>
    </div>
  </Layout>
    </>
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
