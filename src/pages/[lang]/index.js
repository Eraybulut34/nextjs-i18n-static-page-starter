import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import VideoComponent from '../../components/VideoComponent';
import gsap from 'gsap';







function LangIndex({ language }) {
  useEffect(() => {
    gsap.to('.banner-box h1', {
      duration: 8,
      x: 10,
      opacity: 5, 
    });

    gsap.to('.banner-box p', {
      duration: 8,
      x: 10,
      opacity: 5,
    });
  }, []);
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
          <Image   src="/images/images1.png" alt="" width={500} height={500} /> 
        </a>
      </div>
    </div>
    <div className="logos">
            <div className="logos-slide">
            <div className="sogol"><Image src="/images/images2.png" alt="" width={100} height={100} /><p>Bim Modeling</p></div>
            <div className="sogol"><Image src="/images/images8.png" alt="" width={100} height={100} /><p>Bim Object Modeling</p></div>
            <div className="sogol"><Image src="/images/images5.png" alt="" width={100} height={100} /><p>Design Automation</p></div>
            <div className="sogol"><Image src="/images/images4.png" alt="" width={100} height={100} /><p>Point Cloud Modeling</p></div>
            <div className="sogol"><Image src="/images/images97.png" alt="" width={120} height={120} /><p>Building</p></div>
            <div className="sogol"><Image src="/images/images94.png" alt="" width={120} height={120} /><p>Software</p></div>
            <div className="sogol"><Image src="/images/images95.png" alt="" width={120} height={120} /><p>Plan</p></div>
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
            <Image src="/images/images2.png" alt="" width={100} height={100} />
            <span className="title">{t('bmn')}</span>
            </a>
          </Link>
          <Link href="/service/object">
            <a>
          <Image src="/images/images8.png" alt="" width={100} height={100} />
            <span className="title">{t('exp')}</span>
            </a>
          </Link>
          <Link href="/service/point">
            <a>
            <Image src="/images/images4.png" alt="" width={100} height={100} />
            <span className="title">{t('cld')}</span>
            </a>
          </Link>
          <Link href="/service/design">
            <a>
            <Image src="/images/images5.png" alt="" width={100} height={100} />
            <span className="title">{t('auto')}</span>
          </a>
          </Link>
        </div>
      </div>
      <div className="get">
        <Link href="/iletisim">
        <a href="#" className="btn">{t('get')}</a>
        </Link>
        </div>
    </div>
    <div className="video">
    <VideoComponent />
    </div>
  </Layout>
    </>
  )
}

export default LangIndex;

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}
